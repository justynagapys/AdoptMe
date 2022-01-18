import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
      <Layout>
          <div className="text-center">
            <h1 className="text-2xl">404 - Page Not Found</h1>
            <p className="m-2">Sorry, the page you are looking for does not exist</p>
            <Image className="object-contain" src={"/404image.svg"} width={300} height={300} />
            <p className="m-2">Do you want to go back to the home page?</p>
            <Link href="/">
                <button className="m-2 bg-transparent hover:bg-adopt-pink text-white-700 font-semibold hover:text-white py-2 px-4 border border-adopt-pink hover:border-transparent rounded">
                    HOMEPAGE
                </button>
            </Link>
          </div>
      </Layout>
);
}