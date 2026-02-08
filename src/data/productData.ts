export interface Product {
    id: string
    name: string
    specs: {
      size?: string
      thickness?: string
      length?: string;
    }
    features: string[]
    applications: string[]
    construction: string[]
    image: string
  }
  
  export interface SubCategory {
    id: string
    name: string
    products: Product[]
  }
  
  export interface Category {
    id: string
    name: string
    description: string
    image: string
    subCategories?: SubCategory[]
    products?: Product[]
  }
  
  export const PRODUCT_DATA: Record<string, Category> = {
    nonslip: {
      id: 'nonslip',
      name: '논슬립',
      description: '안전을 위한 필수 장치',
      image: '/images/test/main_product_01.png',
      subCategories: [
        {
          id: 'ceramic',
          name: '세라믹논슬립',
          products: [
            {
              id: 'ceramic-62',
              name: '세라믹논슬립 62',
              specs: {
                size: '62(W) x 20(H)',
                thickness: '2mm 초슬림형',
              },
              features: [
                '보행 시 이질감이 전혀 없는 특수 광물입자 사용',
                '미끄럼방지 기능이 뛰어나고 내구성이 우수함',
              ],
              applications: [
                '대리석, 타일, 테라조, 철재 등 각종 실내·외 계단',
                '산업현장의 각종 계단 및 바닥면이 고른 계단',
                '폭계단 에폭시 시공, 사각형 피스 시공',
              ],
              construction: [
                '기존의 계단 위에 덧씌우기 공법으로 시공',
                '접착 고정법 등',
                '* 에폭시 시공 시 뒷면 양면 테이프 부착 시공이 간편함',
              ],
              image: '/images/product/nonSlip/ceramic_62.jpg',
            },
            {
              id: 'ceramic-75',
              name: '세라믹논슬립 75',
              specs: {
                size: '75(W) x 25(H)',
                thickness: '2mm 초슬림형',
              },
              features: [
                '보행 시 이질감이 전혀 없는 특수 광물입자 사용',
                '미끄럼방지 기능이 뛰어나고 내구성이 우수함',
              ],
              applications: ['빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: ['기존의 계단 및 바닥에 덧씌우기 공법으로 시공', '접착, 나사, 리벳 등'],
              image: '/images/product/nonSlip/ceramic_75.jpg',
            },
            {
              id: 'ceramic-61b',
              name: '세라믹 평논슬립 61B',
              specs: {
                size: '61(W) x 3(T) mm',
                thickness: '2mm 초슬림형',
              },
              features: [
                '보행 시 이질감이 전혀 없는 특수 광물입자 사용',
                '미끄럼방지 기능이 뛰어나고 내구성이 우수함',
              ],
              applications: ['빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: ['기존의 계단 및 바닥에 덧씌우기 공법으로 시공', '접착, 나사, 리벳 등'],
              image: '/images/product/nonSlip/ceramic_61b.jpg',
            },
            {
              id: 'ceramic-68',
              name: '세라믹 68',
              specs: {
                size: '68(W) x 3(T)',
                thickness: '2mm 초슬림형',
              },
              features: [
                '보행 시 이질감이 전혀 없는 특수 광물입자 사용',
                '미끄럼방지 기능이 뛰어나고 내구성이 우수함',
              ],
              applications: ['빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: ['기존의 계단 및 바닥에 덧씌우기 공법으로 시공', '접착, 나사, 리벳 등'],
              image: '/images/product/nonSlip/ceramic_68.jpg',
            },
            {
              id: 'ceramic-colors',
              name: '세라믹 논슬립 색상표',
              specs: {},
              features: [
                '세라믹논슬립 제품에 대한 색상표',
              ],
              applications: [],
              construction: [],
              image: '/images/product/nonSlip/ceramic_colors.jpg',
            },
          ],
        },
        {
          id: 'aluminum',
          name: '알루미늄(A.L) 논슬립',
          products: [
            {
              id: 'al-60-s',
              name: 'AL 60-S',
              specs: { size: '57(W) x 27(H)'},
              features: ['기존의 계단 위에 시공'],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/product/nonSlip/AL60-S.jpg',
            },
            {
              id: 'al-60-luminous',
              name: 'AL 60 축광',
              specs: { size: '57(W) x 27(H)'},
              features: ['어두운 공간에서 야광 효과'],
              applications: ['호텔, 병원, 빌딩, 극장 및 공공시설'],
              construction: [],
              image: '/images/product/nonSlip/AL60.jpg',
            },
            {
              id: 'al-50',
              name: 'AL 50',
              specs: { size: '52(W) x 17(H)'},
              features: [
                '1줄의 넓은 패드 삽입으로 시각적 효과 뛰어남',
                '뛰어난 미끄럼 방지 효과 및 세련된 디자인',
                '내구성이 높고 관리가 편리함',
              ],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/product/nonSlip/AL50.jpg',
            },
            {
              id: 'al-601-1',
              name: 'AL 601-1',
              specs: { size: '52(W) x 37(H)'},
              features: [
                '1줄의 넓은 패드 삽입으로 시각적 효과 뛰어남',
                '뛰어난 미끄럼 방지 효과 및 세련된 디자인',
                '고온 열처리한 미끄럼방지 패드',
                '내구성이 높고 관리가 편리함',
                '기존 신주 논슬립 위에 덧씌우기 공법',
                '돌계단에 적합',
              ],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/product/nonSlip/AL50.jpg',
            },
            {
              id: 'al-507',
              name: 'AL 507',
              specs: { size: '53(W) x 16(H) x 2.4(M)'},
              features: [
                '기존의 계단 위에 시공',
              ],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/product/nonSlip/AL507.jpg',
            },
            {
              id: 'al-colors',
              name: '알루미늄(A.L) 색상표',
              specs: {},
              features: [
                'AL 60-S, AL 50-H, AL 601-1제품에 대한 색상표',
              ],
              applications: [],
              construction: [],
              image: '/images/product/nonSlip/AL_colors.jpeg',
            },
          ],
        },
        {
          id: 'pvc',
          name: 'P.V.C 논슬립',
          products: [
            {
              id: 'deluxe-nonslip',
              name: '디럭스 논슬립',
              specs: { size: '57(W) x 27(H)'},
              features: ['어두운 공간에서 야광 효과'],
              applications: ['호텔, 병원, 빌딩, 극장 및 공공시설'],
              construction: [],
              image: '/images/product/nonSlip/PVC_Deluxe.jpeg',
            },
            {
              id: 'heavy-nonslip',
              name: '중보형 논슬립',
              specs: { size: '55(W) x 30(H) x 30(T)', length: '1.2M, 1.8M'},
              features: ['색상: 회색, 밤색, 우드색, 녹색, 적색'],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/product/nonSlip/PVC_mid.png',
            },
            {
              id: 'light-nonslip',
              name: '경보형 논슬립',
              specs: { size: '45(W) x 20(H) x 3(T)', length: '1.2M, 1.8M'},
              features: ['색상: 회색, 밤색, 우드색'],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/product/nonSlip/PVC_light.png',
            },
            {
              id: 'proma-nonslip',
              name: '프로마',
              specs: { size: '45(W) x 20(H) x 3(T)', length: '1.2M, 1.8M'},
              features: ['색상: 회색, 밤색, 우드색'],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/product/nonSlip/PVC_proma.jpeg',
            },
            {
              id: 'promacolors',
              name: '프로마 색상표',
              specs: {},
              features: [
                '프로마 제품에 대한 색상표',
              ],
              applications: [],
              construction: [],
              image: '/images/product/nonSlip/proma_color.png',
            },
          ],
        },
        {
          id: 'tape',
          name: '논슬립 테이프',
          products: [
            {
              id: 'nonslip-tape',
              name: '논슬립 테이프',
              specs: { size: '50m/m x 15m, 50m/m x 30m' },
              features: ['색상: 회색, 밤색, 검정색, 스톤색, 녹색, 노란색, 와인색, 안전사선'],
              applications: [],
              construction: [],
              image: '/images/product/nonSlip/tape_main.jpg',
            },
            {
              id: 'nonslip-tape-color',
              name: '논슬립 테이프 색상표',
              specs: {},
              features: [
                '논슬립 테이프 제품에 대한 색상표',
              ],
              applications: [],
              construction: [],
              image: '/images/product/nonSlip/tape_colors.png',
            },
          ],
        },
      ],
    },
    wallBase: {
      id: 'wallBase',
      name: '굽도리',
      description: '고급스러운 벽과 바닥의 경계',
      image: '/images/test/main_product_03.png',
      subCategories: [
        {
          id: 'wallBase',
          name: 'Wall Base 굽도리',
          products: [
            {
              id: 'wallBase',
              name: 'Wall Base 굽도리',
              specs: { size: `75m/m x 2T, 105m/m x 2T, 105m/m x 3.2T 주문 색상가능(단 2000m이상)`},
              features: ['색상: 베이지, 밤색, 진한 회색, 검정색, 연한 회색'],
              applications: [],
              construction: [],
              image: '/images/product/wallBase/gub_wallBase.jpg',
            },
            {
              id: 'wallBase-colors',
              name: 'Wall Base 색상표',
              specs: {},
              features: [
                'Wall Base 제품에 대한 색상표',
              ],
              applications: [],
              construction: [],
              image: '/images/product/wallBase/gub_wallBase_colors.png',
            },
          ],
        },
        {
          id: 'wood-wallBase',
          name: '우드 굽도리',
          products: [
            {
              id: 'wood-wallBase',
              name: '우드 굽도리',
              specs: { size: '75m/m x 25M(1R/L) 1BOX(8R/L)'},
              features: ['색상: 회색, 밤색, 검정'],
              applications: ['건물 실내 및 병원 복도'],
              construction: ['양면 테이프 부착'],
              image: '/images/product/wallBase/gub_wood.jpg'
            },
            {
              id: 'wood-wallBase-colors',
              name: '우드 굽도리 색상표',
              specs: {},
              features: [
                '우드 굽도리 제품에 대한 색상표',
              ],
              applications: [],
              construction: [],
              image: '/images/product/wallBase/gub_wood_colors.jpg'
            },
          ],
        },
        {
          id: 'plain-wallBase',
          name: '무지 굽도리',
          products: [
            {
              id: 'plain-wallBase',
              name: '무지 굽도리',
              specs: { size: '75m/m x 200M(8R/L), 100m/m x 150M(6R/L)'},
              features: ['색상: 매풀, 월넛, 체리, 오크'],
              applications: ['건물 실내 및 병원 복도'],
              construction: ['양면 테이프 부착'],
              image: '/images/product/wallBase/gub_wood.jpg'
            },
            {
              id: 'plain-wallBase-colors',
              name: '무지 굽도리 색상표',
              specs: {},
              features: [
                '무지 굽도리 제품에 대한 색상표',
              ],
              applications: [],
              construction: [],
              image: '/images/product/wallBase/gub_plain_colors.jpg'
            },
          ],
        },
      ],
    },
    baseboard: {
      id: 'baseboard',
      name: '마감재',
      description: '건축의 완성도를 높이는 디테일',
      image: '/images/test/main_product_02.png',
      subCategories: [
        {
          id: 'al-finishing',
          name: '알루미늄(A.L) 마감재',
          products: [
            {
              id: 'deco-trim',
              name: '데코트림',
              specs: { size: '3mm x 2.4M, 1.9M' },
              features: [],
              applications: [],
              construction: [],
              image: '/images/product/finishing/ma_decotrim.jpg',
            },
            {
              id: 'profile',
              name: '프로파일',
              specs: { size: '3mm x 2.4M, 1.9M' },
              features: [],
              applications: [],
              construction: [],
              image:  '/images/product/finishing/ma_profile.jpg',
            },
            {
              id: 'al-302',
              name: 'AL 302',
              specs: { size: '3mm x 2.4M, 5mm x 2.4M ' },
              features: [],
              applications: [],
              construction: [],
              image:  '/images/product/finishing/ma_AL302.jpg',
            },
            {
              id: 'al-702',
              name: 'AL 702',
              specs: { size: '7mm x 2.4M' },
              features: [],
              applications: [],
              construction: [],
              image:  '/images/product/finishing/ma_AL702.jpg',
            },
            {
              id: 'al-carpet-molding',
              name: '카펫 몰딩',
              specs: { size: '7mm x 2.4M, 1.9M' },
              features: [],
              applications: [],
              construction: [],
              image:  '/images/product/finishing/ma_carpet_molding.jpg',
            },
            {
              id: 'al-joint',
              name: '조인트',
              specs: { size: '3mm x 2.4M' },
              features: [],
              applications: [],
              construction: [],
              image:  '/images/product/finishing/ma_joint.jpg',
            },
            {
              id: 'al-308',
              name: 'AL 308',
              specs: { size: '3mm x 8mm x 2,4M' },
              features: [],
              applications: ['타일, 카펫 겸용'],
              construction: [],
              image:  '/images/product/finishing/ma_AL308.jpg',
            },
            {
              id: 'al-deco-B',
              name: '데코논슬립(B)',
              specs: { size: '3mm x 2,4M' },
              features: ['색상: 행켈색, 은색'],
              applications: ['극장 및 세미나실'],
              construction: [],
              image:  '/images/product/finishing/ma_deco_B.jpg',
            },
            {
              id: 'al-carpet-B',
              name: '카펫논슬립(B)',
              specs: { size: '7mm x 2,4M' },
              features: ['색상: 행켈색, 은색'],
              applications: ['세미나실, 교회 강당 및 실내 계단'],
              construction: [],
              image:  '/images/product/finishing/ma_carpet_b.jpg',
            },
            {
              id: 'al-deco-A',
              name: '데코논슬립(A)',
              specs: { size: '3mm x 2,4M' },
              features: [],
              applications: [],
              construction: [],
              image: '/images/product/finishing/ma_deco_a.jpg',
            },
            {
              id: 'al-angle',
              name: '각대',
              specs: { size: '20mm x 20mm 2,4M' },
              features: ['색상: 행켈, 은색'],
              applications: [],
              construction: [],
              image:  '/images/product/finishing/ma_angle.jpg',
            },
            {
              id: 'al-40B',
              name: 'AL 40B',
              specs: { size: '40m/m x 2400m/m' },
              features: [],
              applications: [],
              construction: [],
              image:  '/images/product/finishing/ma_AL40B.jpg',
            },
            {
              id: 'al-round',
              name: 'Round용',
              specs: { size: '3,5,7mm x 2.4M' },
              features: [],
              applications: [],
              construction: [],
              image:  '/images/product/finishing/ma_round.jpg',
            },
          ],
        },
      ],
    },
  };