import React from "react";
import clsx from "clsx";

import backgroundImage from "../../assets/images/hero-bg.svg";

const XIcon: React.FC = () => (
  <svg
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.854 13.2029L29.0223 0.5H26.3758L16.6785 11.5299L8.93325 0.5H0L11.7122 17.179L0 30.5H2.64675L12.8875 18.8522L21.067 30.5H30.0002L17.8538 13.2029H17.8545H17.854ZM14.229 17.326L13.0423 15.6652L3.60025 2.44941H7.66525L15.2852 13.1148L16.472 14.7755L26.377 28.6389H22.312L14.2292 17.3262V17.3255L14.229 17.326Z"
      fill="white"
    />
  </svg>
);

const DiscordIcon: React.FC = () => (
  <svg
    width="41"
    height="28"
    viewBox="0 0 41 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M35.6697 3.58983C30.7471 0.00806995 26.0636 0.107718 26.0636 0.107718L25.5851 0.638113C31.3966 2.36269 34.0972 4.84991 34.0972 4.84991C30.5422 2.95952 27.0549 2.03106 23.8076 1.66622C21.5113 1.42068 19.1931 1.44301 16.9021 1.73238C16.6969 1.73238 16.526 1.7656 16.3211 1.79882C15.1246 1.89846 12.2186 2.32948 8.56064 3.88824C7.31567 4.44308 6.5676 4.83742 6.54459 4.84965C6.58869 4.80899 9.42924 2.21601 15.5347 0.505514L15.1928 0.107452C15.1928 0.107452 10.5093 0.00806995 5.58669 3.58956C5.58669 3.58956 0.664062 12.2451 0.664062 22.9237C0.664062 22.9237 3.5353 27.7323 11.0906 27.9643C11.0906 27.9643 12.3555 26.4723 13.3808 25.2116C9.03946 23.9518 7.3984 21.2988 7.3984 21.2988C7.3984 21.2988 7.74052 21.5308 8.35575 21.8624C8.38972 21.8956 8.42423 21.9288 8.49244 21.9618C8.59488 22.0282 8.6976 22.0614 8.80005 22.1279C9.65468 22.5921 10.5093 22.9567 11.2957 23.2554C12.6971 23.7857 14.3721 24.3164 16.3211 24.6812C18.8847 25.1455 21.8932 25.3113 25.175 24.7145C26.7816 24.449 28.4226 23.9848 30.1316 23.2883C31.3281 22.8576 32.6615 22.2272 34.0632 21.3317C34.0632 21.3317 32.3539 24.0509 27.8756 25.2781C28.8929 26.5283 30.1116 27.9415 30.1316 27.9643C37.6866 27.7323 40.5926 22.9237 40.5926 22.9237C40.5926 12.2451 35.6697 3.58983 35.6697 3.58983ZM17.7225 16.1583C17.7225 18.1813 16.1844 19.8394 14.2355 19.8394C12.2865 19.8394 10.749 18.1813 10.749 16.1583C10.749 14.1353 12.2871 12.4774 14.2355 12.4774H14.2357C16.1844 12.4774 17.7567 14.1355 17.7225 16.1583ZM26.7134 19.8394C24.7989 19.8394 23.2263 18.1813 23.2263 16.1583C23.2263 14.1353 24.7647 12.4774 26.7134 12.4774C28.662 12.4774 30.2001 14.1355 30.2001 16.1583C30.2001 18.181 28.6618 19.8394 26.7134 19.8394Z"
      fill="white"
    />
  </svg>
);

export const ApasPortLogo: React.FC = () => (
  <svg viewBox="0 0 107 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.55384 41.9309C4.40988 42.3175 4.21779 42.8247 4.21779 43.2595C4.21779 44.0568 5.27391 44.1292 5.82596 44.1292C6.04197 44.1292 6.45006 44.1052 6.45006 44.4434C6.45006 44.7332 6.11401 44.7332 5.87394 44.7332C5.20186 44.7332 4.52991 44.6366 3.85783 44.6366C3.18574 44.6366 2.51366 44.7332 1.84171 44.7332C1.60164 44.7332 0.977539 44.8782 0.977539 44.4674C0.977539 44.1292 1.43362 44.1292 1.64963 44.1292C2.08164 44.1292 2.53772 44.081 2.8497 43.7428C3.16182 43.4046 3.59383 42.2933 3.76185 41.8343L8.39412 29.7316C8.46617 29.5381 8.53822 29.2002 8.80221 29.2002C8.99416 29.2002 9.09013 29.5142 9.13826 29.6589L13.9865 41.7861C14.3706 42.7281 14.7787 44.1292 15.9547 44.1292C16.1947 44.1292 16.6508 44.1292 16.6508 44.4916C16.6508 44.709 16.4107 44.7332 16.2907 44.7332C15.2346 44.7332 14.1786 44.6366 13.1225 44.6366C12.2585 44.6366 11.3463 44.7332 10.4584 44.7332C10.3143 44.7332 10.0743 44.709 10.0743 44.4916C10.0743 44.1292 10.5303 44.1292 10.7703 44.1292C11.3943 44.1292 12.3065 44.1292 12.3065 43.4046C12.3065 43.0663 12.0905 42.5349 11.9704 42.2209L11.2024 40.3848C10.6983 39.1527 10.8663 39.1527 9.71423 39.1527H6.45005C5.48991 39.1527 5.63401 39.2496 5.2739 40.1192L4.55384 41.9309ZM6.06603 37.9933C6.04197 38.0657 5.99398 38.2107 5.99398 38.2831C5.99398 38.5247 6.76204 38.4281 6.85801 38.4281H9.61826C9.76222 38.4281 10.3143 38.5005 10.3143 38.235C10.3143 38.1384 10.1462 37.7517 10.1462 37.7036L8.51416 33.5968C8.46617 33.5002 8.27409 32.8719 8.13013 32.8719C7.93819 32.8719 7.77017 33.4759 7.72204 33.5968L6.06603 37.9933Z"
      fill="currentColor"
    />
    <path
      d="M19.4386 37.6309C19.4386 37.2927 19.4627 36.3507 19.1987 36.0848C19.0546 35.9159 18.6947 35.8917 18.5026 35.8917H18.1906C18.0466 35.8917 17.9025 35.8432 17.9025 35.6985C17.9025 35.4084 18.2386 35.3603 18.4546 35.2876C19.0307 35.1186 20.0627 34.4906 20.4468 34.0316C20.5668 33.9108 20.6868 33.7176 20.8788 33.7176C21.1189 33.7176 21.0948 33.935 21.0948 34.104V35.4326C22.3429 34.394 23.687 33.7415 25.1511 33.7176C26.4953 33.6934 27.8634 34.4664 28.7754 35.4084C29.7355 36.4231 30.2396 37.8241 30.2396 39.2254C30.2396 42.5592 27.5994 44.9506 24.2391 44.9264C23.3271 44.9264 22.6789 44.709 21.8389 44.4192C21.6948 44.395 21.4308 44.2984 21.2869 44.2984C20.9988 44.2984 21.0948 44.8783 21.0948 45.023V47.608C21.0948 48.6465 20.8788 49.468 22.175 49.5888C22.4149 49.6131 22.8469 49.5888 22.8469 49.9028C22.8469 50.096 22.727 50.1687 22.559 50.1687C21.7909 50.1687 21.0229 50.0721 20.3028 50.0721C19.5348 50.0721 18.7667 50.1687 18.0226 50.1687C17.8545 50.1687 17.6865 50.1202 17.6865 49.9271C17.6865 49.5646 18.0946 49.6131 18.3586 49.5888C19.6548 49.468 19.4386 48.6465 19.4386 47.608V37.6309ZM27.1433 36.0125C26.3993 35.2394 25.2952 34.7562 24.215 34.7562C23.231 34.7562 22.1029 35.1186 21.5029 36.0125C21.0948 36.4715 21.0948 37.1237 21.0948 37.6793V41.4237C21.0948 42.2933 21.1669 43.163 21.8629 43.7909C22.391 44.2258 23.231 44.4916 23.951 44.4916C26.7113 44.4916 28.4154 42.0517 28.4154 39.5394C28.4154 38.2592 28.0314 36.9545 27.1433 36.0125Z"
      fill="currentColor"
    />
    <path
      d="M38.0035 38.7663C38.8675 38.3557 38.8916 38.3315 38.8916 37.4134V36.3506C38.8916 35.167 38.8436 34.1763 37.3555 34.1763C35.8913 34.1763 35.1473 34.9735 34.5952 36.2056C34.4272 36.568 34.3072 36.9063 33.9231 37.0752C33.6832 37.196 33.1791 37.3892 32.8911 37.3892C32.6991 37.3892 32.5791 37.3411 32.5791 37.0994C32.5791 36.4714 33.1312 35.7708 33.5871 35.3844C34.7153 34.3697 36.3473 33.7175 37.8835 33.7175C38.6275 33.7175 39.5155 33.8383 40.0676 34.3455C40.6437 34.8288 40.5476 35.4568 40.5476 36.109V41.81C40.5476 42.3417 40.5237 43.7427 41.3877 43.7427C41.9877 43.7427 42.2517 43.1387 42.4677 43.1387C42.5639 43.1387 42.6358 43.2353 42.6358 43.3321C42.6358 43.5977 42.2278 43.9359 42.0598 44.081C41.5798 44.4192 40.9798 44.7813 40.3557 44.7813C39.1795 44.7813 39.0596 43.0905 38.7236 43.0905C38.5076 43.0905 36.9474 44.9264 34.8592 44.9264C33.7312 44.9264 32.603 44.2257 32.603 43.0179C32.603 41.3028 34.8353 40.2882 36.1553 39.6359L38.0035 38.7663ZM36.2753 40.1192C35.3392 40.6022 34.4031 41.2304 34.4031 42.3899C34.4031 43.3321 35.1712 43.8151 36.0593 43.8151C36.8994 43.8151 37.7154 43.4287 38.2915 42.8489C38.8675 42.2448 38.8916 41.8342 38.8916 41.037V39.5875C38.8916 39.4909 38.9635 38.9114 38.7236 38.9114C38.6515 38.9114 38.5315 38.9837 38.4594 39.0079L36.2753 40.1192Z"
      fill="currentColor"
    />
    <path
      d="M45.0572 41.7134C45.0813 41.5202 45.1052 41.182 45.3694 41.182C46.2334 41.182 45.2493 44.4915 48.5135 44.4915C49.9297 44.4915 51.4418 43.6704 51.4418 42.1243C51.4418 40.723 50.2897 40.1916 49.1376 39.8052C47.6495 39.3219 45.4653 38.7179 45.4653 36.7612C45.4653 35.8192 45.9694 35.0701 46.7374 34.5145C47.5774 33.9107 48.5616 33.7175 49.5696 33.7175C50.1937 33.7175 51.4658 33.8865 52.0418 34.1281C52.4499 34.3213 52.3058 34.8527 52.3058 35.2152C52.3058 35.3602 52.4738 36.3988 52.0659 36.3988C51.4658 36.3988 51.7298 34.1281 49.1376 34.1281C48.1535 34.1281 46.9294 34.8046 46.9294 35.9158C46.9294 38.7421 52.9299 37.4619 52.9299 41.3994C52.9299 43.7185 50.4097 44.9264 48.3695 44.9264C47.5294 44.9264 46.1133 44.6124 45.3214 44.2018C44.9373 44.0325 44.9853 43.7185 44.9853 43.3321L45.0572 41.7134Z"
      fill="currentColor"
    />
    <path
      d="M62.0021 32.2198C62.0021 30.6979 62.146 30.2389 60.466 30.2389C60.25 30.2389 59.8659 30.2389 59.8659 29.9249C59.8659 29.659 60.034 29.5867 60.2741 29.5867C61.1381 29.5867 61.954 29.6833 62.8181 29.6833C64.1144 29.6833 65.3623 29.5867 66.6346 29.5867C67.7865 29.5867 68.8906 29.7317 69.8506 30.4081C70.9069 31.1327 71.6027 32.4372 71.6027 33.7177C71.6027 36.3023 69.4186 38.1385 66.9465 38.1385C66.5145 38.1385 66.3464 38.09 65.9625 37.9692L64.8103 37.5828C64.6424 37.5344 64.4742 37.462 64.2823 37.462C63.8503 37.462 63.8984 37.8242 63.8984 38.1385V42.1244C63.8984 43.6705 63.8021 44.1053 65.4583 44.1293C65.6743 44.1293 66.0825 44.1053 66.0825 44.4193C66.0825 44.6849 65.8903 44.7333 65.6743 44.7333C64.7624 44.7333 63.8984 44.6367 62.9862 44.6367C62.0741 44.6367 61.1619 44.7333 60.25 44.7333C60.034 44.7333 59.8418 44.6849 59.8418 44.4193C59.8418 44.1053 60.226 44.1293 60.442 44.1293C62.1222 44.1293 62.0022 43.6463 62.0022 42.1244L62.0021 32.2198ZM63.8984 35.6743C63.8984 36.2057 63.7783 36.6648 64.2823 36.9546C64.7624 37.2446 65.6505 37.4378 66.2025 37.4378C68.1945 37.4378 69.6105 35.7467 69.6105 33.8143C69.6105 32.7272 69.2026 31.5918 68.3626 30.8669C67.6186 30.1907 66.6105 30.0215 65.6264 30.0215C63.9703 30.0215 63.8984 30.6013 63.8984 32.099L63.8984 35.6743Z"
      fill="currentColor"
    />
    <path
      d="M73.4932 39.2254C73.4932 37.7759 74.0933 36.3264 75.1253 35.336C76.2775 34.2005 77.8374 33.7175 79.4457 33.7175C80.9337 33.7175 82.3738 34.1281 83.526 35.1186C84.7021 36.109 85.3979 37.6793 85.3979 39.2254C85.3979 42.5349 82.662 44.9264 79.4457 44.9264C76.2053 44.9264 73.4932 42.5349 73.4932 39.2254ZM83.5739 39.3943C83.5739 36.9544 82.2059 34.1763 79.4216 34.1763C76.7814 34.1763 75.2934 36.6404 75.2934 39.1045C75.2934 41.496 76.8055 44.4673 79.5176 44.4673C82.11 44.4673 83.5739 41.6892 83.5739 39.3943Z"
      fill="currentColor"
    />
    <path
      d="M88.8996 37.6308C88.8996 37.2926 88.9236 36.3506 88.6595 36.0848C88.5157 35.9158 88.1556 35.8916 87.9636 35.8916H87.6517C87.5076 35.8916 87.3635 35.8432 87.3635 35.6984C87.3635 35.4083 87.6995 35.3602 87.9155 35.2875C88.4916 35.1186 89.5238 34.4906 89.9077 34.0315C90.0277 33.9107 90.1478 33.7175 90.3397 33.7175C90.5798 33.7175 90.5557 33.9349 90.5557 34.1039V35.2875C90.5557 35.3844 90.5079 35.795 90.6758 35.795C90.9158 35.795 91.8518 33.8623 93.5079 33.8623C94.2281 33.8623 94.8762 34.2971 94.8762 35.022C94.8762 35.6258 94.4441 35.9882 93.868 35.9882C93.0519 35.9882 93.004 35.0701 92.3319 35.0701C91.8039 35.0701 91.3957 35.5776 91.1078 35.94C90.5317 36.7612 90.5557 37.3892 90.5557 38.3557V42.1725C90.5557 43.2113 90.3397 44.0325 91.6358 44.1533C91.8758 44.1775 92.3079 44.1533 92.3079 44.4673C92.3079 44.6608 92.1878 44.7332 92.0199 44.7332C91.2519 44.7332 90.4838 44.6366 89.7636 44.6366C88.9956 44.6366 88.2275 44.7332 87.4835 44.7332C87.3156 44.7332 87.1475 44.6847 87.1475 44.4915C87.1475 44.1291 87.5554 44.1775 87.8195 44.1533C89.1156 44.0325 88.8996 43.2113 88.8996 42.1725L88.8996 37.6308Z"
      fill="currentColor"
    />
    <path
      d="M99.637 41.1822C99.637 42.221 99.613 44.0084 101.053 44.0084C101.941 44.0084 102.589 43.163 102.781 43.163C102.877 43.163 102.949 43.2596 102.949 43.3323C102.949 43.5736 102.637 43.8879 102.469 44.0084C101.869 44.5641 101.077 44.9265 100.237 44.9265C99.5889 44.9265 98.9168 44.6849 98.5089 44.1777C97.8849 43.3804 97.9809 42.1484 97.9809 41.1822V34.9737C97.9809 34.4665 97.8368 34.5389 97.3807 34.5389C97.2607 34.5389 96.6367 34.6355 96.6367 34.3457C96.6367 34.1764 96.8049 34.0798 96.9249 33.9832C97.9568 33.3068 98.653 32.703 99.205 31.5433C99.2529 31.4467 99.3251 31.3259 99.4451 31.3259C99.613 31.3259 99.637 31.471 99.637 31.616V33.331C99.637 33.645 99.6849 33.7901 100.021 33.8143H102.397C102.613 33.8143 102.613 33.959 102.613 34.1525C102.613 34.6597 102.421 34.5389 101.869 34.5389H100.525C99.9731 34.5389 99.637 34.3941 99.637 35.0703V41.1822Z"
      fill="currentColor"
    />
    <path
      d="M105.133 2.71013V19.7865L85.1486 19.7563L84.462 19.7552L83.9384 20.2022L81.3176 22.4396V19.7894H75.3694V2.71013H105.133ZM106.999 0.831543H73.5029V21.6679H79.4511V26.4963L85.1458 21.6349L106.999 21.6679V0.831543Z"
      fill="currentColor"
    />
    <path
      d="M86.7152 9.89307C87.4046 9.89307 87.9636 9.33053 87.9636 8.6366C87.9636 7.94267 87.4046 7.38013 86.7152 7.38013C86.0257 7.38013 85.4668 7.94267 85.4668 8.6366C85.4668 9.33053 86.0257 9.89307 86.7152 9.89307Z"
      fill="currentColor"
    />
    <path
      d="M86.7152 15.1196C87.4046 15.1196 87.9636 14.5571 87.9636 13.8632C87.9636 13.1692 87.4046 12.6067 86.7152 12.6067C86.0257 12.6067 85.4668 13.1692 85.4668 13.8632C85.4668 14.5571 86.0257 15.1196 86.7152 15.1196Z"
      fill="currentColor"
    />
    <path
      d="M92.2079 18.1434L90.8926 16.8105C92.6744 15.0293 93.5778 13.1585 93.5778 11.2497C93.5778 9.34088 92.6744 7.46999 90.8926 5.68913L92.2079 4.3562C94.3555 6.50263 95.4446 8.82201 95.4446 11.2497C95.4446 13.6773 94.3555 15.9967 92.2079 18.1434Z"
      fill="currentColor"
    />
  </svg>
);

type FooterProps = {
  overlayingFooter?: boolean;
};

const Footer: React.FC<FooterProps> = ({ overlayingFooter = false }) => {
  return (
    <footer
      className={clsx(
        "bg-cover bg-no-repeat bg-center text-white",
        overlayingFooter
          ? "-mt-64 desktop:-mt-64 relative pt-96 desktop:pt-64"
          : "pt-32",
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-[500px] mx-auto flex flex-col gap-32">
        <div className="flex flex-col gap-10">
          <h2 className="text-heading4 desktop:text-heading2 text-center uppercase font-medium tracking-[0.85rem]">
            Join our community
          </h2>
          <div className="flex justify-center items-center gap-8">
            <XIcon />
            <DiscordIcon />
          </div>
          <p className="text-center text-heading5">
            &apos;Feel, think, and grow the world with your investments.&apos;
          </p>
        </div>
        <div className="flex items-end justify-center gap-2">
          <p className="text-heading5 relative -top-2">Produced by</p>
          <div className="max-w-[145px] w-full pb-[8px]">
            <ApasPortLogo />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white">
        <div className="flex flex-col desktop:flex-row justify-between items-center p-6 gap-4">
          <ul className="flex gap-4 desktop:gap-10">
            <li>
              <p className="uppercase">Contact</p>
            </li>
            <li>
              <p className="uppercase">Legal</p>
            </li>
            <li>
              <p className="uppercase">Terms of use</p>
            </li>
            <li>
              <p className="uppercase">Privacy policy</p>
            </li>
          </ul>
          <p>Copyright © Apasport all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
