export default function Socials({ big = false, setDiscord }) {
  return (
    <div className="flex gap-6 relative z-10">
      {/* <a className={`socials-icon ${big ? "w-10" : "w-5"}`} href="https://instagram.com">
        <svg
          className="fill-current w-full"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1.8025C12.67 1.8025 12.9867 1.8125 14.0417 1.86083C16.7517 1.98417 18.0175 3.27 18.1408 5.96C18.1892 7.01417 18.1983 7.33083 18.1983 10.0008C18.1983 12.6717 18.1883 12.9875 18.1408 14.0417C18.0167 16.7292 16.7542 18.0175 14.0417 18.1408C12.9867 18.1892 12.6717 18.1992 10 18.1992C7.33 18.1992 7.01333 18.1892 5.95917 18.1408C3.2425 18.0167 1.98333 16.725 1.86 14.0408C1.81167 12.9867 1.80167 12.6708 1.80167 10C1.80167 7.33 1.8125 7.01417 1.86 5.95917C1.98417 3.27 3.24667 1.98333 5.95917 1.86C7.01417 1.8125 7.33 1.8025 10 1.8025ZM10 0C7.28417 0 6.94417 0.0116667 5.8775 0.06C2.24583 0.226667 0.2275 2.24167 0.0608333 5.87667C0.0116667 6.94417 0 7.28417 0 10C0 12.7158 0.0116667 13.0567 0.06 14.1233C0.226667 17.755 2.24167 19.7733 5.87667 19.94C6.94417 19.9883 7.28417 20 10 20C12.7158 20 13.0567 19.9883 14.1233 19.94C17.7517 19.7733 19.775 17.7583 19.9392 14.1233C19.9883 13.0567 20 12.7158 20 10C20 7.28417 19.9883 6.94417 19.94 5.8775C19.7767 2.24917 17.7592 0.2275 14.1242 0.0608333C13.0567 0.0116667 12.7158 0 10 0V0ZM10 4.865C7.16417 4.865 4.865 7.16417 4.865 10C4.865 12.8358 7.16417 15.1358 10 15.1358C12.8358 15.1358 15.135 12.8367 15.135 10C15.135 7.16417 12.8358 4.865 10 4.865ZM10 13.3333C8.15917 13.3333 6.66667 11.8417 6.66667 10C6.66667 8.15917 8.15917 6.66667 10 6.66667C11.8408 6.66667 13.3333 8.15917 13.3333 10C13.3333 11.8417 11.8408 13.3333 10 13.3333ZM15.3383 3.4625C14.675 3.4625 14.1375 4 14.1375 4.6625C14.1375 5.325 14.675 5.8625 15.3383 5.8625C16.0008 5.8625 16.5375 5.325 16.5375 4.6625C16.5375 4 16.0008 3.4625 15.3383 3.4625Z"
            fill="current"
          />
        </svg>
      </a> */}
      <a
        href="https://discord.gg/icdinos"
        // onClick={() => {
        //   setDiscord({ show: true, what: 'discord' });
        // }}
        className={`socials-icon ${big ? 'w-10' : 'w-5'}`}
      >
        <svg
          className="fill-current w-full"
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
      <a
        className={`socials-icon ${big ? 'w-10' : 'w-5'}`}
        href="https://twitter.com/icdinos"
      >
        <svg
          className="fill-current w-full"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM15.055 8.0375C15.2075 11.4042 12.6967 15.1575 8.25167 15.1575C6.9 15.1575 5.6425 14.7608 4.58333 14.0817C5.85333 14.2317 7.12083 13.8783 8.12667 13.0908C7.08 13.0717 6.19583 12.3792 5.89 11.4283C6.26583 11.5 6.63583 11.4792 6.97167 11.3875C5.82083 11.1558 5.02583 10.1192 5.05167 9.01C5.375 9.18917 5.74333 9.29667 6.13583 9.30917C5.07 8.59667 4.76833 7.18917 5.395 6.11333C6.575 7.56167 8.33917 8.51417 10.3283 8.61417C9.97917 7.1175 11.115 5.675 12.6608 5.675C13.3483 5.675 13.9708 5.96583 14.4075 6.43083C14.9525 6.32417 15.4658 6.12417 15.9275 5.85C15.7483 6.40917 15.3692 6.8775 14.875 7.17417C15.3592 7.11583 15.8208 6.9875 16.2492 6.79667C15.9292 7.27833 15.5242 7.7 15.055 8.0375Z"
            fill="current"
          />
        </svg>
      </a>
    </div>
  );
}
