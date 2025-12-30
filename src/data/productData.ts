export interface Product {
    id: string
    name: string
    specs: {
      size: string
      thickness?: string
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
                size: '62(W) x 20(H) mm',
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
              image: '/images/test/ceramic-62.png',
            },
            {
              id: 'ceramic-75',
              name: '세라믹논슬립 75',
              specs: {
                size: '75(W) x 25(H) mm',
                thickness: '2mm 초슬림형',
              },
              features: [
                '보행 시 이질감이 전혀 없는 특수 광물입자 사용',
                '미끄럼방지 기능이 뛰어나고 내구성이 우수함',
              ],
              applications: ['빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: ['기존의 계단 및 바닥에 덧씌우기 공법으로 시공', '접착, 나사, 리벳 등'],
              image: '/images/test/ceramic-75.png',
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
              image: '/images/test/ceramic-61b.png',
            },
            {
              id: 'ceramic-68',
              name: '세라믹 68',
              specs: {
                size: '68(W) x 3(T) mm',
                thickness: '2mm 초슬림형',
              },
              features: [
                '보행 시 이질감이 전혀 없는 특수 광물입자 사용',
                '미끄럼방지 기능이 뛰어나고 내구성이 우수함',
              ],
              applications: ['빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: ['기존의 계단 및 바닥에 덧씌우기 공법으로 시공', '접착, 나사, 리벳 등'],
              image: '/images/test/ceramic-68.png',
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
              specs: { size: '57(W) x 27(H) mm', thickness: '-' },
              features: ['기존의 계단 위에 시공'],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/test/al-60-s.png',
            },
            {
              id: 'al-60-luminous',
              name: 'AL 60 축광',
              specs: { size: '57(W) x 27(H) mm', thickness: '-' },
              features: ['어두운 공간에서 야광 효과'],
              applications: ['호텔, 병원, 빌딩, 극장 및 공공시설'],
              construction: [],
              image: '/images/test/al-60-luminous.png',
            },
            {
              id: 'al-50',
              name: 'AL 50',
              specs: { size: '52(W) x 17(H) mm', thickness: '-' },
              features: [
                '1줄의 넓은 패드 삽입으로 시각적 효과 뛰어남',
                '뛰어난 미끄럼 방지 효과 및 세련된 디자인',
                '내구성이 높고 관리가 편리함',
              ],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/test/al-50.png',
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
              specs: { size: '57(W) x 27(H) mm', thickness: '-' },
              features: ['어두운 공간에서 야광 효과'],
              applications: ['호텔, 병원, 빌딩, 극장 및 공공시설'],
              construction: [],
              image: '/images/test/deluxe.png',
            },
            {
              id: 'heavy-duty-nonslip',
              name: '중보형 논슬립',
              specs: { size: '55(W) x 30(H) mm', thickness: '4mm' },
              features: ['색상: 회색, 밤색, 우드색, 녹색, 적색'],
              applications: ['호텔, 빌딩, 아파트, 관공서, 학교, 공공시설 등의 건물 실내외 계단'],
              construction: [],
              image: '/images/test/heavy.png',
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
              specs: { size: '50mm x 15m / 30m', thickness: '-' },
              features: ['색상: 회색, 밤색, 검정색, 스톤색, 녹색, 노란색, 와인색, 안전사선'],
              applications: [],
              construction: [],
              image: '/images/test/tape.png',
            },
          ],
        },
      ],
    },
    kickplate: {
      id: 'kickplate',
      name: '굽도리',
      description: '고급스러운 벽과 바닥의 경계',
      image: '/images/test/main_product_03.png',
      subCategories: [
        {
          id: 'wall-base',
          name: 'Wall Base 굽도리',
          products: [
            {
              id: 'wall-base-prod',
              name: 'Wall Base',
              specs: { size: '75mm / 105mm', thickness: '2T / 3.2T' },
              features: ['색상: 베이지, 밤색, 진한 회색, 검정색, 연한 회색', '2000m 이상 주문 색상 가능'],
              applications: [],
              construction: [],
              image: '/images/test/wallbase.png',
            },
          ],
        },
        {
          id: 'wood-kickplate',
          name: '우드 굽도리',
          products: [
            {
              id: 'wood-kickplate-prod',
              name: '우드 굽도리',
              specs: { size: '75mm x 25M', thickness: '-' },
              features: ['색상: 회색, 밤색, 검정'],
              applications: [],
              construction: [],
              image: '/images/test/wood.png',
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
              specs: { size: '3mm x 2.4M / 1.9M' },
              features: [],
              applications: [],
              construction: [],
              image: '/images/test/decotrim.png',
            },
            {
              id: 'profile',
              name: '프로파일',
              specs: { size: '3mm x 2.4M / 1.9M' },
              features: [],
              applications: [],
              construction: [],
              image: '/images/test/profile.png',
            },
            {
              id: 'al-308',
              name: 'AL 308',
              specs: { size: '3mm x 8mm x 2.4M' },
              features: ['용도: 타일, 카펫 겸용'],
              applications: [],
              construction: [],
              image: '/images/test/al308.png',
            },
          ],
        },
      ],
    },
  };