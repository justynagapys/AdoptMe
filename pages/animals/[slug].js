import Layout from '../../components/Layout'
import GetAnimals from '../../components/GetAnimals'
import { useRouter } from 'next/router'

export default function Animal() {
  const router = useRouter()
  const { slug } = router.query

  return(
    <Layout>
      <h1 className="text-3xl mb-6 text-center font-semibold text-adopt-pink">Our Lovely {slug}s:</h1>
      <GetAnimals animalType={slug}/>
    </Layout>
  );
}