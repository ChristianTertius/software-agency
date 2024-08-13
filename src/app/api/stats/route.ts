import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { stat } from "fs";
import { kill } from "process";

type Data = {
  commits: number;
};

const packages = [
  "react-native-mmkv",
  "react-native-vision-camera",
  "react-native-blurhash",
  "react-native-safe-area-context",
  "expo-image-editor",
  "react-native-bignumber",
];

const scopedPackages = [
  "@gorhom/bottom-sheet",
  "@gorhom/animated-tabbar",
  "@gorhom/portal",
];

const ghAccounts: { readonly [username: string]: number } = {
  mrousavy: 1,
  Szymon20000: 1,
  "thomas-coldwell": 1,
  chrispader: 1,
  janicduplessis: 3,
  akinncar: 1,
  gorhom: 1,
  ericvicenti: 1,
  mateioprea: 1,
};

const ghAuthUsername = process.env["GITHUB_USERNAME"] || "";
const ghAuthToken = process.env["GITHUB_PERSONAL_ACCESS_TOKEN"] || "";

async function getNumOfDownloads() {
  try {
    const since = new Date(+new Date() - 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    const now = new Date().toISOString().split("T")[0];
    const baseUrl = `https://api.npmjs.org/downloads/point/${since}:${now}`;
    const url = `${baseUrl}/${packages.join(",")}`;
    const { data: stats } = await axios.get(url);
    for (const scopedPackage of scopedPackages) {
      const { data } = await axios.get(`${baseUrl}/${scopedPackage}`);
      stats[scopedPackage] = data;
    }
    const downloads = Object.keys(stats).reduce(
      (num, key) => num + stats[key].downloads,
      0,
    );
    return downloads;
  } catch (e) {
    console.error(e);
    return 0;
  }
}

async function getNumOfCommits() {
  try {
    const baseUrl = `https://api.github.com/repos/facebook/react-native/commits`;
    const perPage = 100;
    let num = 0;

    for (const username of Object.keys(ghAccounts)) {
      let startPage = ghAccounts[username];
      num += (startPage - 1) * perPage;

      for (let page = startPage; ; ++page) {
        try {
          const { data: commits } = await axios.get(baseUrl, {
            params: {
              author: username,
              since: "2000",
              per_page: perPage,
              page,
            },
            auth: {
              username: ghAuthUsername,
              password: ghAuthToken,
            },
          });

          num += commits.length;
          if (commits.length < perPage) break;
        } catch (err) {
          console.error(
            `Failed to fetch commits for ${username} on page ${page}`,
            err,
          );
          break; // Exit loop on error
        }
      }
    }

    return num;
  } catch (e) {
    console.error("Failed to fetch commit counts:", e);
    return 0;
  }
}

export async function GET() {
  // Mengambil data `downloads` dan `commits` secara paralel
  const [downloads, commits] = await Promise.all([
    getNumOfDownloads(),
    getNumOfCommits(),
  ]);

  // Mengembalikan response dalam format JSON
  const response = NextResponse.json({ downloads, commits });

  // Mengatur cache control untuk hasil yang lebih efisien
  response.headers.set("Cache-Control", "s-maxage=86400");

  return response;
}
