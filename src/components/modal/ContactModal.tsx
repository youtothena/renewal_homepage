'use client'

import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { useModalStore } from '@/store/modalStore';
import { useForm } from 'react-hook-form';
import axiosInstance from '@/lib/axios';
import { useEffect } from 'react';

interface ContactFormData {
  company: string;
  name: string;
  contact: string;
  content: string;
}

export default function ContactModal() {
  const { isOpen, modalType, closeModal } = useModalStore();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactFormData>();

  // 모달이 열릴 때마다 폼 초기화
  useEffect(() => {
    if (isOpen) reset();
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
      // 실제 API 연동 시 주석 해제 및 수정
      // await axiosInstance.post('/inquiry', data);
      
      console.log('문의 데이터:', data);
      alert('문의가 성공적으로 접수되었습니다.');
      closeModal();
    } catch (error) {
      console.error(error);
      alert('문의 접수 중 오류가 발생했습니다.');
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Header>
          <Title>문의하기</Title>
          <Description>언제 어디서든지 쉽고 간편하게 서경산업으로 문의해주세요.</Description>
        </Header>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <InputWrapper>
              <Input 
                placeholder="회사명을 입력해주세요." 
                {...register('company', { required: true })}
              />
            </InputWrapper>
            <InputWrapper>
              <Input 
                placeholder="성함을 입력해주세요." 
                {...register('name', { required: true })}
              />
            </InputWrapper>
          </Row>
          
          <InputWrapper>
            <Input 
              placeholder="연락처를 입력해주세요." 
              {...register('contact', { required: true })}
            />
          </InputWrapper>

          <InputWrapper>
            <TextArea 
              placeholder="문의 내용을 입력해주세요." 
              {...register('content', { required: true })}
            />
          </InputWrapper>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? '전송 중...' : '제출하기'}
          </SubmitButton>
        </Form>
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
  height: 620px;
  border-radius: 20px;
  padding: 35px 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${theme.colors.text.primary};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${theme.colors.text.secondary};
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 20px;
  background-color: #eff2f5;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  color: ${theme.colors.text.primary};
  outline: none;
  transition: all 0.2s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors.primary}20;
    background-color: #fff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 18px 20px;
  background-color: #eff2f5;
  border: none;
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
    box-shadow: 0 0 0 2px ${theme.colors.primary}20;
    background-color: #fff;
  }
`;

const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 14px 40px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;