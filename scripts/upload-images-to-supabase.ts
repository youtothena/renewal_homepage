import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// .env 파일 로드
dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function uploadImages() {
  console.log('📤 이미지 업로드 시작...\n')

  const imageFolders = [
    {
      bucket: 'gallery',
      path: '/Users/parkyouna/Downloads/www_root/DB_command/gallery/data',
    },
    {
      bucket: 'products',
      path: '/Users/parkyouna/Downloads/www_root/images/product',
    },
    {
      bucket: 'popups',
      path: '/Users/parkyouna/Downloads/www_root/DB_command/popup/data',
    },
  ]

  for (const folder of imageFolders) {
    if (!fs.existsSync(folder.path)) {
      console.log(`⚠️  폴더가 존재하지 않음: ${folder.path}`)
      continue
    }

    console.log(`\n📁 ${folder.bucket} 버킷에 업로드 중...`)
    const files = fs.readdirSync(folder.path)
    let successCount = 0
    let errorCount = 0

    for (const file of files) {
      // 이미지 파일만 처리
      if (!file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) continue

      try {
        const filePath = path.join(folder.path, file)
        const fileBuffer = fs.readFileSync(filePath)
        const contentType = `image/${path.extname(file).slice(1).toLowerCase()}`

        const { data, error } = await supabase.storage
          .from(folder.bucket)
          .upload(file, fileBuffer, {
            contentType,
            upsert: true,
            cacheControl: '3600',
          })

        if (error) throw error

        // Public URL 생성
        const { data: urlData } = supabase.storage
          .from(folder.bucket)
          .getPublicUrl(file)

        console.log(`  ✅ ${file} → ${urlData.publicUrl}`)
        successCount++
      } catch (error: any) {
        console.error(`  ❌ ${file}: ${error.message}`)
        errorCount++
      }
    }

    console.log(`\n${folder.bucket} 완료: ${successCount}개 성공, ${errorCount}개 실패`)
  }

  console.log('\n🎉 모든 이미지 업로드 완료!')
}

uploadImages()