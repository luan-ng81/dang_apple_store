import Link from "next/link";
import { getGoogleSheetsData } from "./components/gsheets";

export default async function Data() {
  const range = `15 Pro Max 256GB!A:F`;
  const posts = await getGoogleSheetsData(range);
  //   console.log(posts);
  function getTagsFromText(text: string): string[] {
    return text.split(",").map((tag) => tag.trim());
  }

  return (
    <div className="flex flex-col p-4  min-h-screen w-full">
      <div>
        <h1 className="text-4xl font-bold text-center my-2 selection:rounded-xl">
          Google Sheets as CMS
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {posts?.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-2xl"
          >
            <Link href={`/test/${item[3]}`}>
              <img
                className="w-full h-60 object-cover object-center rounded select-none"
                src={item[2]}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item[0]}</div>
                <p className="text-gray-700 text-base whitespace-nowrap text-ellipsis overflow-hidden block">
                  {item[1].replace(/<[^>]+>/g, "")}
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                {getTagsFromText(item[4]).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
