import type { GetServerSideProps, NextPage } from "next"

const Order: NextPage = () => {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "https://dinfo.me/onlineorder/#/home/menu/?restid=fourstreams",
      permanent: false,
    },
  }
}
export default Order
