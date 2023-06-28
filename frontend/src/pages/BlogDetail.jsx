import React from "react";
import Main from "../components/Main";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  return (
    <section>
      <Main>
        <div className="p-4 flex flex-col gap-5 w-4/5 m-auto">
          <div className="w-full rounded-3xl">
            <img
              src="/assets/event.jpg"
              alt=""
              className="rounded-3xl w-full h-full object-fill aspect-video"
            />
          </div>
          <div className="text-2xl py-2">
            <Link to="/blogs?category=selectedCategory">
              <span className="bg-darkBlue text-gray-300 px-3 py-2 rounded-md">
                Education
              </span>
            </Link>
          </div>
          <div className="py-2 text-3xl lg:text-5xl text-primaryYellow font-semibold tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            non.
          </div>
          <div className="text-lg opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At id odit
            nisi minima magni accusamus repellendus aliquid eum ipsam
            exercitationem, in quae modi consequuntur labore libero quis
            incidunt quasi omnis aut nulla? Quo eveniet culpa nisi rem vel quos
            similique dolorem, accusantium exercitationem veniam, asperiores
            iste eaque eius numquam, delectus quas nobis architecto quisquam
            facere corrupti nihil. Sint iste quo architecto, quae dolore
            quibusdam ad fuga temporibus quam tenetur non dignissimos! Deleniti,
            adipisci aliquid pariatur saepe ab culpa est fugit quas illum
            delectus itaque amet, architecto sint tenetur consectetur esse magni
            recusandae veniam, neque omnis quis dolore quo. Ipsam, praesentium!
            A nemo esse doloribus temporibus iure aperiam. Minus repellat
            molestiae sunt, dignissimos modi qui, eos adipisci, magnam veritatis
            quo aperiam at corrupti autem nulla recusandae facere ratione.
            Ratione modi possimus rem fuga, placeat aspernatur delectus
            exercitationem fugit numquam nam tenetur error mollitia dicta autem
            unde veniam in saepe expedita molestias necessitatibus itaque sint
            voluptas architecto perferendis! Libero ab, beatae saepe dolorum
            recusandae atque voluptates id cumque dicta quidem exercitationem,
            illum delectus ipsa dignissimos explicabo quam nulla ex hic
            excepturi accusantium corrupti reiciendis dolore? Tempore quae id
            nemo provident sed reiciendis, ex necessitatibus tempora aspernatur
            nihil perferendis ea perspiciatis? Debitis, harum?
          </div>
          <div className="flex flex-wrap items-center text-xl gap-5 text-primaryYellow">
            <span className="text-2xl py-1 text-white rounded-full">
              Tags :
            </span>

            <span className="bg-brown px-3 py-1 rounded-full">iOS</span>
            <span className="bg-brown px-3 py-1 rounded-full">Database</span>
            <span className="bg-brown px-3 py-1 rounded-full">Travel</span>
            <span className="bg-brown px-3 py-1 rounded-full">Design</span>
            <span className="bg-brown px-3 py-1 rounded-full">Nature</span>
          </div>
        </div>
      </Main>
    </section>
  );
};

export default BlogDetail;
