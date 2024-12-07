// 페이지 전체의 레이아웃과 로직 담당
// API 호출 및 상태 관리 (Redux, Context, useState 등 사용)
// 폼을 포함하고, 다른 UI 요소(헤더, 네비게이션, 알림 등)도 함께 배치
import { SignUpForm } from "../component/SignUpForm"

export const SignUpPage = ()=> {
    return (
    <SignUpForm />
    )
}