import React from "react";

const Logo = ({ className }: { className?: string }) => (
  <svg className={className || ""} width="34" height="43" viewBox="0 0 34 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.59118 42.0874C13.1261 42.0874 17.0425 39.683 21.3393 34.8742C22.8618 37.4171 24.2994 39.6178 25.6519 41.4761H34C31.7677 38.8679 29.1029 34.8661 26.0079 29.4705C28.3082 26.5689 29.9572 24.0504 30.9549 21.915C31.9536 19.7796 32.6219 17.3508 32.9598 14.6285H25.3991C25.2971 16.4868 25.0474 18.288 24.65 20.0322C24.2526 21.7764 23.7161 23.4718 23.0392 25.1181C22.6334 24.352 22.3369 23.7896 22.151 23.431L20.2991 19.7877C18.3196 15.9407 15.7484 14.0172 12.5853 14.0172C9.03338 14.0172 6.04774 15.5006 3.62843 18.4674C1.20912 21.4341 0 25.0937 0 29.446C0 33.1953 0.888245 36.2394 2.66475 38.5786C4.44018 40.9178 6.74899 42.0874 9.59118 42.0874ZM11.2274 36.8892C9.95563 36.8892 9.00575 36.2273 8.37888 34.9034C7.75094 33.5795 7.4375 31.5854 7.4375 28.9211C7.4375 26.1906 7.85718 23.8903 8.69656 22.0203C9.53593 20.1503 10.574 19.2154 11.8107 19.2154C12.5874 19.2154 13.3652 19.869 14.1429 21.1764L15.7856 23.9814C16.0151 24.3951 16.4921 25.3466 17.2167 26.836C17.5706 27.5476 17.8532 28.1267 18.0646 28.5736L19.125 30.6338C15.6974 34.8041 13.0645 36.8892 11.2274 36.8892Z"
      fill="var(--main-text)"/>
    <path fillRule="evenodd" clipRule="evenodd"
          d="M16.5813 0L18.0149 2.73663L21.2229 3.17578L18.9016 5.30745L19.4494 8.31709L16.5813 6.89476L13.7122 8.31709L14.2591 5.30745L11.9379 3.17578L15.1458 2.73663L16.5813 0Z"
          fill="var(--primary-color)"/>
  </svg>
);

export default Logo;
