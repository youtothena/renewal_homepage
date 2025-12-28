'use client'

import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { useModalStore } from '@/store/modalStore';
import { useForm } from 'react-hook-form';
import axiosInstance from '@/lib/axios';
import { useEffect, useState } from 'react';

interface ContactFormData {
  company: string;
  name: string;
  contact: string;
  content: string;
}

export default function ContactModal() {
  const { isOpen, modalType, closeModal } = useModalStore();
  const [isSuccess, setIsSuccess] = useState(false);

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { isSubmitting, isValid, errors } 
  } = useForm<ContactFormData>({
    mode: 'onChange',
  });

  // 모달이 열릴 때마다 폼 초기화
  useEffect(() => {
    if (isOpen) {
      reset();
      setIsSuccess(false);
    }
  }, [isOpen, reset]);

  // 모달 닫기 핸들러 (배경 클릭 시)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen || modalType !== 'contact') return null;

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axiosInstance.post('/api/contact', data);
      setIsSuccess(true);
      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      console.error(error);
      alert('잠시 후 다시 시도해주세요.'); 
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
      <CloseButton onClick={closeModal} aria-label="닫기">
          ✕
        </CloseButton>

        {isSuccess ? (
          <SuccessContent>
            <CheckIcon>✓</CheckIcon>
            <SuccessTitle>문의가 접수되었습니다!</SuccessTitle>
            <SuccessDesc>담당자가 확인 후 빠르게 연락드리겠습니다.</SuccessDesc>
          </SuccessContent>
        ) : (
          <>
            <Header>
              <Title>문의하기</Title>
              <Description>언제 어디서든지 쉽고 간편하게 서경산업으로 문의해주세요.</Description>
            </Header>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <InputWrapper>
                  <Input 
                    placeholder="회사명을 입력해주세요." 
                    $hasError={!!errors.company}
                    {...register('company', { required: '회사명을 입력해주세요.' })}
                  />
                  {errors.company && <ErrorMessage>{errors.company.message}</ErrorMessage>}
                </InputWrapper>
                <InputWrapper>
                  <Input 
                    placeholder="성함을 입력해주세요." 
                    $hasError={!!errors.name}
                    {...register('name', { required: '성함을 입력해주세요.' })}
                  />
                  {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </InputWrapper>
              </Row>
              
              <InputWrapper>
                <Input 
                  placeholder="연락처를 입력해주세요. (010-0000-0000)" 
                  $hasError={!!errors.contact}
                  {...register('contact', { 
                    required: '연락처를 입력해주세요.',
                    pattern: {
                      value: /^[0-9\-\+]{9,15}$/,
                      message: '올바른 연락처 형식이 아닙니다.'
                    }
                  })}
                />
                {errors.contact && <ErrorMessage>{errors.contact.message}</ErrorMessage>}
              </InputWrapper>

              <InputWrapper>
                <TextArea 
                  placeholder="문의 내용을 입력해주세요." 
                  $hasError={!!errors.content}
                  {...register('content', { required: '문의 내용을 입력해주세요.' })}
                />
                {errors.content && <ErrorMessage>{errors.content.message}</ErrorMessage>}
              </InputWrapper>

              {/* 2. 모든 필드가 유효하지 않으면 버튼 비활성화 */}
              <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? '전송 중...' : '제출하기'}
              </SubmitButton>
            </Form>
          </>
        )}
      </ModalContainer>
    </Overlay>
  );
}

// 스타일 정의
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  padding: 40px 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative; /* 닫기 버튼 위치 기준 */
  max-height: 90vh; /* 화면 높이를 넘지 않도록 설정 */
  overflow-y: auto; /* 내용이 넘치면 스크롤 */
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    max-width: 95%; /* 모바일에서 너비 꽉 차게 */
    border-radius: 16px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  padding: 5px;
  line-height: 1;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    font-size: 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px; /* 여백 축소 */

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;


const Description = styled.p`
  font-size: 16px;
  color: ${theme.colors.text.secondary};
  margin: 0;
  word-break: keep-all; /* 단어 단위 줄바꿈 */

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px; /* 간격 축소 */
`;

const Row = styled.div`
  display: flex;
  gap: 16px; /* 간격 축소 */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 16px; /* 패딩 축소 */
  background-color: #eff2f5;
  border: 1px solid ${props => props.$hasError ? '#ef4444' : 'transparent'};
  border-radius: 8px;
  font-size: 15px;
  color: ${theme.colors.text.primary};
  outline: none;
  transition: all 0.2s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.$hasError ? '#ef4444' : theme.colors.primary}20;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 14px;
  }
`;

const TextArea = styled.textarea<{ $hasError?: boolean }>`
  width: 100%;
  height: 150px; /* 높이 축소 */
  padding: 16px;
  background-color: #eff2f5;
  border: 1px solid ${props => props.$hasError ? '#ef4444' : 'transparent'};
  border-radius: 8px;
  font-size: 15px;
  color: ${theme.colors.text.primary};
  outline: none;
  resize: none;
  transition: all 0.2s;
  font-family: inherit;

  &::placeholder {
    color: #999;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.$hasError ? '#ef4444' : theme.colors.primary}20;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    height: 120px; /* 모바일에서 더 축소 */
    padding: 14px;
    font-size: 14px;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  font-size: 12px;
  color: #ef4444;
  margin-top: 6px;
  margin-left: 4px;
`;

const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 40px 0;
`;

const CheckIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #dcfce7;
  color: #16a34a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 24px;
`;

const SuccessTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #16a34a;
  margin: 0;
`;

const SuccessDesc = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 16px; /* 버튼 높이 확보 */
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 14px;
    font-size: 15px;
  }
`;