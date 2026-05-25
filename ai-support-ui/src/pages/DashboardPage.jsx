import Layout from
"../components/layout/Layout";

import Card from
"../components/common/Card";

function DashboardPage() {

  return (

    <Layout>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">

        <Card>

          <h2 className="
            text-slate-400
            mb-2
          ">
            Documents
          </h2>

          <p className="
            text-4xl
            font-bold
            text-white
          ">
            12
          </p>

        </Card>

        <Card>

          <h2 className="
            text-slate-400
            mb-2
          ">
            Chunks
          </h2>

          <p className="
            text-4xl
            font-bold
            text-white
          ">
            248
          </p>

        </Card>

        <Card>

          <h2 className="
            text-slate-400
            mb-2
          ">
            Questions Asked
          </h2>

          <p className="
            text-4xl
            font-bold
            text-white
          ">
            89
          </p>

        </Card>

      </div>

    </Layout>
  );
}

export default DashboardPage;