const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function extractData() {
  console.log('🔄 MySQL 데이터 추출 시작...\n');

  const connection = await mysql.createConnection({
    host: '211.43.203.112',
    user: 'sukyung031a',
    password: '190529!16@chj#1',
    database: 'dbsukyung031a',
    charset: 'utf8mb4'
  });

  const tables = {
    notices: 'onbbs01',      // 공지사항
    posts: 'oqbbs01',        // 질문과 답변
    inquiries: 'oqbbs02',    // 온라인 문의
    galleries: 'ogbbs01',    // 갤러리
    popups: 'opopup'         // 팝업
  };

  const data = {};

  for (const [key, tableName] of Object.entries(tables)) {
    try {
      const [rows] = await connection.execute(`SELECT * FROM ${tableName}`);
      data[key] = rows;
      console.log(`✅ ${key}: ${rows.length}개 추출 완료`);
    } catch (error) {
      console.error(`❌ ${key} 추출 실패:`, error.message);
      data[key] = [];
    }
  }

  // 이미지 파일 목록도 추출
  const [imageFiles] = await connection.execute(`
    SELECT file1, file2, file3 
    FROM ogbbs01 
    WHERE file1 IS NOT NULL OR file2 IS NOT NULL OR file3 IS NOT NULL
  `);
  data.imageFiles = imageFiles;

  const outputPath = path.join(__dirname, 'mysql-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
  
  await connection.end();
  
  console.log('\n✅ 데이터 추출 완료!');
  console.log(`📁 저장 위치: ${outputPath}`);
  console.log('\n📊 추출 통계:');
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      console.log(`   - ${key}: ${value.length}개`);
    }
  }
}

extractData().catch(console.error);