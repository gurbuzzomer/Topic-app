import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-600 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Omer Faruk Gurbuz&#39s
      </Link>
      <Link href={"/addTopic"}>
      <button className="bg-white text-green-600 font-bold py-2 px-4 rounded-md hover:bg-purple-100">
          Add Topic
      </button>
      </Link>
    </nav>
  );
}
