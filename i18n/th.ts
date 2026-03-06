/**
 * Thai strings
 */
import type { I18nStrings } from './index.js';

const th: I18nStrings = {
  // Onboarding
  skipButton: 'ข้าม',
  letsStartButton: 'เริ่มต้นใช้งาน',
  continueButton: 'ดำเนินการต่อ',

  // Login
  mobileNumberPlaceholder: 'หมายเลขโทรศัพท์',

  // OTP
  otpTitle: 'ใส่รหัส OTP',
  resendOtp: 'ส่งรหัส OTP อีกครั้ง',

  // Home / Dashboard
  welcomeMessage: 'ยินดีต้อนรับ',
  logoutButton: 'ออกจากระบบ',

  // Forgot Password
  forgotPasswordButton: 'ลืมรหัสผ่าน',

  // Errors
  invalidNumber: 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
  otpExpired: 'รหัส OTP หมดอายุแล้ว',
};

export default th;
