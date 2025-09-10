import type { FC } from "react";
import { socialAccounts } from "../../data/data";

const Sidebar: FC = () => {
  return (
    <aside className="w-[20%] bg-white h-full rounded-3xl p-5 shadow-2xl flex flex-col justify-between">
      <div>
        <h2 className="text-4xl font-extrabold font-serif tracking-tight text-gray-800">
          Fahchouch <br /> Mohammed
        </h2>
        <h3 className="text-lg font-semibolde text-gray-600">
          Computer Science Engineer
        </h3>
      </div>
      <ul>
        <li>
          <a href="">hallo</a>
        </li>
      </ul>
      {/* social account links */}
      <ul className="flex justify-center gap-4">
        {socialAccounts.map((e, i) => (
          <li>
            <a key={i} href={e.path} target="_blank" rel={e.rel} className="">
              <e.icon className="border-2 rounded-lg p-0.5 h-7 w-7 shadow-2xl" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
