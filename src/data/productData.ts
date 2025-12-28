export interface Product {
    id: string
    name: string
    specs: {
      size: string
      thickness: string
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
              image: '/images/test/main_product_01.png',
            },
          ],
        },
        {
          id: 'aluminum',
          name: '알루미늄(A.L) 논슬립',
          products: [],
        },
        {
          id: 'pvc',
          name: 'P.V.C 논슬립',
          products: [],
        },
        {
          id: 'tape',
          name: '논슬립 테이프',
          products: [],
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
              image: '/images/test/main_product_01.png',
            },
          ],
        },
        {
          id: 'aluminum',
          name: '알루미늄(A.L) 논슬립',
          products: [],
        },
        {
          id: 'pvc',
          name: 'P.V.C 논슬립',
          products: [],
        },
        {
          id: 'tape',
          name: '논슬립 테이프',
          products: [],
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
              image: '/images/test/main_product_01.png',
            },
          ],
        },
        {
          id: 'aluminum',
          name: '알루미늄(A.L) 논슬립',
          products: [],
        },
        {
          id: 'pvc',
          name: 'P.V.C 논슬립',
          products: [],
        },
        {
          id: 'tape',
          name: '논슬립 테이프',
          products: [],
        },
      ],
    },
  }