import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function AnimalDetails() {
  const router = useRouter()
  const { slug } = router.query

  return(
    <Layout>
      <div className="text-center">
        <h1>Miejsce na szczegóły słodziaka o ID: {slug}</h1>
        <p>dodać też przycisk powrotu do strony głównej, np taki sam jak ze strony 404:</p>
          <Link href="/">
              <button className="m-2 bg-transparent hover:bg-adopt-pink text-white-700 font-semibold hover:text-white py-2 px-4 border border-adopt-pink hover:border-transparent rounded">
                  HOMEPAGE
              </button>
          </Link>
        </div>
    </Layout>
  );
}