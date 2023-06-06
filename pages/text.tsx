import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Modal from "@/components/Modal";

export default function Text() {
  const [isModal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>Text</title>
        <meta name="description" content="Text page with modal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Modal setModal={setModal} isModal={isModal} />
        <div className="container mx-auto">
          <h1 className="text-2xl mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est
            quidem ullam ratione modi voluptatem repudiandae dicta. Ex, nobis
            fugiat?
          </h1>
          <p className="text-lg mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            ratione voluptatibus consequatur placeat possimus debitis
            dignissimos ab impedit quidem cupiditate! Non voluptas nobis iste?
            Labore, ullam nobis ipsa rem sunt molestiae optio rerum porro
            praesentium adipisci architecto magni iste placeat eum ratione
            impedit ex maxime tenetur obcaecati earum? Vitae harum ut laborum?
            Quis repudiandae nostrum officiis similique nobis, necessitatibus
            distinctio voluptatibus consectetur laborum asperiores, rem
            temporibus a reiciendis voluptates quae doloremque deserunt ex quasi
            odio, rerum molestiae voluptatum quia iusto in! Id nam qui eos
            tempora, itaque at enim iusto in quisquam, repellat soluta omnis
            veritatis laudantium dolore ea a quo neque expedita blanditiis atque
            quibusdam vitae? Nostrum harum ullam labore inventore officiis sequi
            perspiciatis, a, debitis reiciendis, voluptates error voluptas
            dolorem possimus! Saepe dolore facilis neque nulla est beatae!
            Quisquam omnis ratione nostrum beatae esse odio placeat nam voluptas
            itaque quis aliquam facilis debitis eligendi eos inventore illo
            distinctio autem asperiores eum vero, nobis nesciunt repudiandae?
            Architecto, illo? Quasi doloribus, officia deleniti tenetur placeat
            enim iste temporibus magnam vel dolor earum quaerat fuga commodi
            optio, illum iusto soluta esse in officiis autem. Quasi ex eveniet
            cumque beatae, iusto, aperiam deleniti nemo corporis aliquid veniam
            sint! Commodi minus exercitationem repudiandae. Quaerat ex error
            fuga vero nemo pariatur itaque eum deleniti eaque tempora distinctio
            cumque nihil voluptatem nam ipsa facilis, incidunt soluta earum quae
            officia! Delectus numquam praesentium beatae eos quae dolor quis
            voluptate laboriosam. Consequuntur adipisci quidem odit iure culpa
            eos veritatis ipsa mollitia? Officia debitis explicabo mollitia
            inventore maxime earum saepe sapiente deserunt illum, tempore beatae
            eligendi, incidunt aliquid molestiae animi ut veniam eaque, sunt
            atque impedit quasi esse vel accusamus. Incidunt quas ea atque
            laudantium accusamus? Delectus dolores mollitia sunt ipsam
            exercitationem amet debitis officia ullam aut optio ad laboriosam
            ducimus cum earum architecto, deserunt porro natus, tenetur eos
            neque, accusamus tempora! Quis accusantium veniam dolores,
            consequatur delectus suscipit maiores, nemo expedita quasi labore
            molestias atque nobis reprehenderit quia enim? Quam, in aspernatur?
            Accusamus ut et suscipit temporibus animi, quas vel incidunt esse ad
            totam earum quo molestiae quia nobis explicabo, corporis in hic sunt
            necessitatibus debitis. Recusandae, iusto fugit? Facilis totam nobis
            quasi autem laboriosam? Fuga molestias labore sequi aut natus
            excepturi repellendus, at dolor, maxime autem quasi id? Eligendi,
            enim. Nemo, consectetur a, delectus similique molestias, aliquam rem
            omnis perspiciatis ea laboriosam unde quos corrupti vel! Omnis enim
            cum culpa provident. Rem nihil, itaque vero ipsum dignissimos
            corrupti nesciunt assumenda at vel id aliquam esse sed animi
            molestiae veniam magni, veritatis praesentium exercitationem
            perferendis ducimus accusamus. Ex rerum unde perspiciatis blanditiis
            neque nobis sit, autem et quam distinctio vitae quod est maxime
            dolore repellendus omnis harum nulla ut provident. Repudiandae
            numquam exercitationem quo, dolorum excepturi aut quia unde quam
            voluptate, quidem ratione at quae illum sed corporis voluptatibus
            rem et! Debitis nobis nesciunt accusamus illo voluptatum similique
            rem rerum nemo, eveniet est tempora quidem aliquam officia.
            Doloremque, architecto magnam eveniet, tempore ducimus sequi illo
            rem deserunt delectus qui mollitia earum non labore recusandae. Id,
            quos vero?
          </p>
          <Image
            src="/pxfuel.jpg"
            height={640}
            width={360}
            alt="image"
            className="mb-10 h-[640px] w-[360px]"
          />
          <button
            type="button"
            onClick={() => setModal(true)}
            className="border border-black rounded-xl py-5 px-10 text-xl bg-slate-200 mb-10"
          >
            Open Modal
          </button>
          <p className="mb-10 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            perferendis impedit veniam magni ipsum iure soluta, tempora ut.
            Accusantium praesentium ipsa vel, ad sed veniam, voluptatem harum
            quia reiciendis earum aut. Facilis obcaecati dolorum, magni eos
            recusandae, odio nihil officia aperiam vel, a repellat numquam sit
            dicta quo facere fugit. Maiores qui maxime dolorum culpa veritatis,
            placeat corrupti eveniet dicta non aperiam voluptatibus ipsum neque
            tempore modi dignissimos quas cum nemo ad repellat provident,
            expedita asperiores. Minima consectetur id illum nam, nostrum eaque
            modi temporibus esse voluptatum non rerum ea atque cum, quisquam
            magni pariatur, magnam nesciunt optio quos! Doloribus quidem
            corporis quam alias eveniet tempore consequatur ipsa excepturi! Sunt
            a recusandae maxime officia. Cupiditate expedita consequuntur,
            voluptate atque accusamus modi, aliquid architecto illum inventore,
            quas obcaecati necessitatibus dolore? Accusantium provident
            distinctio dignissimos. Temporibus facilis eveniet ipsum eius
            consequatur quaerat veritatis natus mollitia possimus impedit,
            excepturi sapiente vel minus perferendis ut. Cumque sit consequatur
            dicta. Nesciunt facilis et quasi, aspernatur molestiae, sint
            asperiores veritatis, odit molestias hic deleniti nulla tenetur
            incidunt voluptatem. Quisquam quis, velit amet ad libero quibusdam
            nemo, voluptate nihil soluta ducimus cum enim! Iusto doloremque
            dignissimos reiciendis nostrum repellendus aspernatur dolores? Qui
            deleniti perferendis labore excepturi earum non voluptas cum!
            Cupiditate veritatis quia sed explicabo, libero tempora iusto fugiat
            ad rem facere deleniti culpa omnis quis earum quidem molestiae
            voluptates, reprehenderit nisi fugit eum voluptas ducimus inventore
            obcaecati nobis! Sequi eaque iusto reprehenderit itaque doloremque
            accusamus voluptate eveniet nihil omnis, dignissimos commodi
            molestias, ipsum quidem consequuntur exercitationem dolor possimus,
            officiis animi earum reiciendis consequatur adipisci deserunt
            officia. Culpa consequuntur aliquam dolorem consequatur dolores
            reiciendis, ipsum ipsa voluptas autem ab modi odit facilis. Harum
            odio consectetur similique magni hic porro ducimus ullam est velit
            provident alias quas minima nesciunt rem eum sint pariatur, amet
            deleniti aperiam fugiat id?
          </p>
        </div>
      </main>
    </>
  );
}
