/**
 * Supabase Storage에서 Public URL 생성
 */
function getSupabaseImageUrl(bucket: string, path: string): string {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl) {
      console.warn('NEXT_PUBLIC_SUPABASE_URL이 설정되지 않았습니다.')
      return ''
    }
    
    // Supabase Storage Public URL 형식
    // https://{project-ref}.supabase.co/storage/v1/object/public/{bucket}/{path}
    return `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`
  }
  
  export function getImageUrl(imagePath: string | null | undefined): string {
    if (!imagePath) {
      return ''
    }
  
    // 이미 전체 URL인 경우 (http://, https://, //)
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('//')) {
      return imagePath
    }
  
    // Supabase Storage URL인 경우 (이미 완전한 URL)
    if (imagePath.includes('supabase.co')) {
      return imagePath
    }
  
    // 파일명만 있는 경우: Supabase Storage의 gallery 버킷에서 가져오기
    if (!imagePath.startsWith('/')) {
      return getSupabaseImageUrl('gallery', imagePath)
    }
  
    // /로 시작하는 경우: 로컬 public 폴더 경로로 간주
    return imagePath
  }