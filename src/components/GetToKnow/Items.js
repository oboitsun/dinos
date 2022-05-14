import React from "react";

export default function Items() {
  const items = [
    { label: "1,000,000 token", btnType: "buy_now", src: "/imgs/rarities/items/1kk.svg" },
    { label: "500,000 token", btnType: "buy_now", src: "/imgs/rarities/items/500k.svg" },
    { label: "250,000 token", btnType: "buy_now", src: "/imgs/rarities/items/250k.svg" },
    { label: "100,000 token", btnType: "buy_now", src: "/imgs/rarities/items/100k.svg" },
    { label: "50,000 token", btnType: "buy_now", src: "/imgs/rarities/items/50k.svg" },
    { label: "25,000 token", btnType: "buy_now", src: "/imgs/rarities/items/25k.svg" },
    { label: "10,000 token", btnType: "buy_now", src: "/imgs/rarities/items/10k.svg" },
    { label: "5,000 token", btnType: "buy_now", src: "/imgs/rarities/items/5k.svg" },
    { label: "mystery token", btnType: "buy_now", src: "/imgs/rarities/items/mystery.svg" },
    // { label: "1,000,000 token", btnType: "discord", src: "/imgs/rarities/items/1kk.svg" },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-10">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-5">
          <span className="text-white text-md lg:text-[18px] leading-none">{item.label}</span>
          <img src={item.src} alt={item.label} />
          {item.btnType === "buy_now" ? (
            <a
              href="https://entrepot.app/marketplace/icdinos"
              className="rounded-full text-white h-10 flex items-center gap-1 justify-center bg-orange w-full"
            >
              <span className="relative top-0.5">buy now</span>{" "}
              {/* <img className="" src="/imgs/entrepot-logo-small.png" alt="buy on entrepot" /> */}
            </a>
          ) : (
            <a
              href="https://discord.gg/icdinos"
              className="rounded-full text-white h-10 flex items-center gap-1 justify-center bg-orange w-full"
            >
              <span className="relative top-0.5">buy now</span>{" "}
              <svg
                width={14}
                height={16}
                className="fill-current relative top-px"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2834 0C17.4134 0 18.3334 0.92 18.3334 2.06V20L16.1834 18.1L14.9734 16.98L13.6934 15.79L14.2234 17.64H2.88337C1.75337 17.64 0.833374 16.72 0.833374 15.58V2.06C0.833374 0.92 1.75337 0 2.88337 0H16.2834V0ZM12.4234 13.06C14.6334 12.99 15.4834 11.54 15.4834 11.54C15.4834 8.32 14.0434 5.71 14.0434 5.71C12.6034 4.63 11.2334 4.66 11.2334 4.66L11.0934 4.82C12.7934 5.34 13.5834 6.09 13.5834 6.09C12.5434 5.52 11.5234 5.24 10.5734 5.13C9.85337 5.05 9.16337 5.07 8.55337 5.15L8.38338 5.17C8.03338 5.2 7.18337 5.33 6.11337 5.8C5.74337 5.97 5.52337 6.09 5.52337 6.09C5.52337 6.09 6.35337 5.3 8.15338 4.78L8.05337 4.66C8.05337 4.66 6.68337 4.63 5.24337 5.71C5.24337 5.71 3.80337 8.32 3.80337 11.54C3.80337 11.54 4.64337 12.99 6.85337 13.06C6.85337 13.06 7.22337 12.61 7.52337 12.23C6.25337 11.85 5.77337 11.05 5.77337 11.05L6.05337 11.22L6.09337 11.25L6.13254 11.2725L6.14421 11.2775L6.18337 11.3C6.43337 11.44 6.68337 11.55 6.91337 11.64C7.32337 11.8 7.81337 11.96 8.38338 12.07C9.13338 12.21 10.0134 12.26 10.9734 12.08C11.4434 12 11.9234 11.86 12.4234 11.65C12.7734 11.52 13.1634 11.33 13.5734 11.06C13.5734 11.06 13.0734 11.88 11.7634 12.25C12.0634 12.63 12.4234 13.06 12.4234 13.06ZM7.77338 8.39C7.20337 8.39 6.75337 8.89 6.75337 9.5C6.75337 10.11 7.21337 10.61 7.77338 10.61C8.34338 10.61 8.79338 10.11 8.79338 9.5C8.80338 8.89 8.34338 8.39 7.77338 8.39ZM11.4234 8.39C10.8534 8.39 10.4034 8.89 10.4034 9.5C10.4034 10.11 10.8634 10.61 11.4234 10.61C11.9934 10.61 12.4434 10.11 12.4434 9.5C12.4434 8.89 11.9934 8.39 11.4234 8.39Z"
                  fill="current"
                />
              </svg>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
