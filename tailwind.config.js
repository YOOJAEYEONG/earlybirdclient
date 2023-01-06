/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  // purge : ["./src/**/*.{vue,html,js}"],/*파일 크기를 최소화하기 위해 purge 옵션을 사용한다. 프로덕션으로 빌드할 때 여기에 설정된 파일에서 사용되지 않는 모든 클래스는 제거된다.*/
  theme: {
    extend: {},
  },
  plugins: [

  ],
}
