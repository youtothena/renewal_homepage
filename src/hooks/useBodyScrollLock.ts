import { useEffect } from 'react';

export default function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
      // 모바일 등에서 터치 스크롤 방지
      document.body.style.position = 'fixed'; 
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);
}