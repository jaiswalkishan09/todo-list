import { ChevronDown } from "lucide-react";
import React from "react";

export default function Header() {
  const navItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/updates", label: "Updates" },
    { href: "/story", label: "Story" },
    { href: "/download", label: "Download" },
    { href: "/developers", label: "Developers", icon: true },
  ];

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-2 sm:w-[641.65px] sm:h-[48px] bg-[#121212] border rounded-[16px] border-[#2B2B2B]">
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5189 0C12.3269 0.0916708 10.182 0.665273 8.23688 1.68L14.5189 12.56V0ZM14.5189 17.443L8.23888 28.32C10.1834 29.3344 12.3276 29.908 14.5189 30V17.443ZM15.8239 30V17.432L22.1099 28.319C20.1635 29.3343 18.0172 29.9089 15.8239 30ZM15.8239 12.57V0C18.0849 0.096 20.2169 0.693 22.1109 1.682L15.8239 12.57ZM2.50788 23.067L13.3919 16.783L7.10788 27.667C5.2584 26.4863 3.68861 24.9165 2.50788 23.067ZM27.8379 6.935L16.9579 13.216L23.2409 2.336C25.0895 3.51667 26.6576 5.08609 27.8379 6.935ZM2.50688 6.934C3.68763 5.08454 5.25742 3.51475 7.10688 2.334L13.3909 13.218L2.50688 6.934ZM1.85288 8.064C0.837619 10.0104 0.264002 12.1566 0.172882 14.35H12.7399L1.85288 8.064ZM1.85288 21.937C0.838186 19.9918 0.264585 17.847 0.172882 15.655H12.7349L1.85388 21.937H1.85288ZM17.6069 14.35H30.1719C30.0806 12.157 29.507 10.0111 28.4919 8.065L17.6069 14.35ZM28.4919 21.936L17.6119 15.656H30.1719C30.0799 17.8473 29.5063 19.9915 28.4919 21.936ZM16.9579 16.785L23.2389 27.665C25.0879 26.4844 26.6573 24.915 27.8379 23.066L16.9579 16.785Z"
          fill="#FAFAFA"
        />
      </svg>
      <nav className="flex flex-wrap items-center space-x-4 sm:space-x-6 text-white">
        {navItems.map(({ href, label, icon }) => (
          <a
            key={href}
            href={href}
            className="text-sm hover:text-gray-300 transition-colors flex items-center gap-1"
          >
            {label}
            {icon && (
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.735993 0.926474C0.887089 0.765306 1.14022 0.757146 1.30138 0.908234L4.22781 3.65176L7.15421 0.908234C7.31541 0.757146 7.56853 0.765306 7.71965 0.926474C7.87069 1.08764 7.86253 1.34078 7.70141 1.49187L4.50138 4.49189C4.34752 4.63613 4.1081 4.63613 3.95423 4.49189L0.754233 1.49187C0.593065 1.34078 0.584905 1.08764 0.735993 0.926474Z"
                  fill="#FAFAFA"
                />
              </svg>
            )}
          </a>
        ))}
      </nav>
      <div>
        <button className="bg-white mt-2 sm:mt-0 text-black text-sm font-medium px-4 py-1 w-fit h-[32px] rounded-md hover:bg-gray-200 transition-colors">
          Sign in
        </button>
      </div>
    </header>
  );
}
