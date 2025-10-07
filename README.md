# 서경산업 - Next.js 웹사이트

논슬립, 굽도리, 마감재 전문 서경산업의 공식 웹사이트입니다.

## 배포 환경

- **Production**: [Vercel Production URL]
- **Development**: [Vercel Preview URL]


### 사전 요구사항

- Node.js 20.x 이상
- PostgreSQL 데이터베이스

## 기술 스택

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Emotion** (CSS-in-JS)
- **React Query** (서버 상태 관리)
- **Zustand** (클라이언트 상태 관리)
- **Swiper** (슬라이더)
- **React Hook Form + Zod** (폼 관리 및 검증)

### Backend
- **Next.js API Routes**
- **Prisma** (ORM)
- **PostgreSQL** (데이터베이스)
- **NextAuth.js** (인증)

## 시작하기

### 1. 의존성 설치

\`\`\`bash
npm install
\`\`\`

### 2. 환경 변수 설정

\`.env.example\`을 \`.env\`로 복사하고 값을 설정합니다.

\`\`\`bash
cp .env.example .env
\`\`\`

### 3. 데이터베이스 설정

PostgreSQL 데이터베이스를 생성하고 Prisma를 설정합니다.

\`\`\`bash
# Prisma Client 생성
npm run db:generate

# 데이터베이스 스키마 푸시
npm run db:push

# 시드 데이터 생성
npm run db:seed
\`\`\`

### 4. 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 회사소개 페이지
- ✅ 제품소개 (논슬립, 굽도리, 마감재)
- ✅ 시공갤러리 (이미지 업로드 및 관리)
- ✅ 온라인 문의 시스템
- ✅ 질문과 답변 게시판
- ✅ 공지사항
- ✅ 관리자 페이지
- ✅ 팝업 관리
- ✅ SEO 최적화

## 프로젝트 구조

\`\`\`
src/
├── app/                    # Next.js App Router
│   ├── (admin)/           # 관리자 페이지
│   ├── (auth)/            # 인증 페이지
│   ├── (main)/            # 메인 사용자 페이지
│   └── api/               # API 라우트
├── components/            # 재사용 가능한 컴포넌트
├── hooks/                 # 커스텀 훅
├── lib/                   # 유틸리티 함수
├── store/                 # Zustand 스토어
├── styles/                # 글로벌 스타일 및 테마
└── types/                 # TypeScript 타입 정의
\`\`\`

## 배포

### Vercel에 배포

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 import
3. 환경 변수 설정
4. 배포

### 데이터베이스

프로덕션 환경에서는 다음 서비스를 권장합니다:
- [Neon](https://neon.tech) (PostgreSQL)
- [Supabase](https://supabase.com) (PostgreSQL)
- [PlanetScale](https://planetscale.com) (MySQL)

## 스크립트

- \`npm run dev\` - 개발 서버 실행
- \`npm run build\` - 프로덕션 빌드
- \`npm run start\` - 프로덕션 서버 실행
- \`npm run lint\` - ESLint 실행
- \`npm run format\` - Prettier로 코드 포맷팅
- \`npm run type-check\` - TypeScript 타입 체크
- \`npm run db:generate\` - Prisma Client 생성
- \`npm run db:push\` - 데이터베이스 스키마 푸시
- \`npm run db:studio\` - Prisma Studio 실행
- \`npm run db:seed\` - 시드 데이터 생성

## 라이선스

MIT