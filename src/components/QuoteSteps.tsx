'use client';

import { useState } from 'react';
import StepModal from '@/components/StepModal';
import { Step01Form, Step02Form, Step03Form, Step04Form, Step05Form } from '@/components/StepForms';

const steps = [
  {
    number: '01',
    title: '填寫需求',
    description: '提供貼紙規格、數量、設計需求及聯絡資料，我們的業務團隊將於 1 個工作天內與您聯繫。',
    icon: '📋',
    details: ['貼紙類型與尺寸', '印刷數量', '材質需求', '設計說明或參考圖'],
    buttonLabel: '開始詢價',
  },
  {
    number: '02',
    title: '報價確認',
    description: '業務根據您的需求提供詳細報價單，包含單價、模具費及交期說明。',
    icon: '💬',
    details: ['詳細費用明細', '交貨期估算', '付款條件說明', '樣品費用（如需）'],
    buttonLabel: '確認報價',
  },
  {
    number: '03',
    title: '設計打樣',
    description: '確認訂單後，設計團隊製作打樣稿供您審核，確保品質與視覺效果符合預期。',
    icon: '🎨',
    details: ['數位打樣稿確認', '色彩校正', '版面微調', '最終簽核'],
    buttonLabel: '確認打樣',
  },
  {
    number: '04',
    title: '生產製造',
    description: '打樣確認後進入正式生產。全程採用 SGS 認證標準，確保每批產品品質穩定。',
    icon: '⚙️',
    details: ['原料品質檢驗', 'SGS 認證流程', '生產進度追蹤', '出貨前品質抽檢'],
    buttonLabel: '查詢進度',
  },
  {
    number: '05',
    title: '出貨交付',
    description: '產品完成後安排出貨，提供物流追蹤資訊，確保貨物安全送達。',
    icon: '🚚',
    details: ['包裝保護處理', '物流追蹤號碼', '送達確認', '售後服務支援'],
    buttonLabel: '確認收貨',
  },
];

function EmailBridgeNote({ note }: { note: string }) {
  return (
    <div className="relative flex justify-center my-6 md:my-8 z-10">
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 max-w-sm shadow-sm">
        <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <div>
          <p className="text-sm font-semibold text-blue-800 mb-1">Email 通知</p>
          <p className="text-sm text-blue-700 leading-relaxed">{note}</p>
        </div>
      </div>
    </div>
  );
}

export default function QuoteSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [quoteRef, setQuoteRef] = useState('');

  const activeStepData = activeStep !== null ? steps[activeStep] : null;
  const ActiveForm = activeStep !== null
    ? [Step01Form, Step02Form, Step03Form, Step04Form, Step05Form][activeStep]
    : null;

  return (
    <>
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-[#9BAAB5]" />

        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.number}>
                {index === 1 && <EmailBridgeNote note="送出 Step 01 後，系統將自動寄出確認信，內含詢價單號與一鍵前往 Step 02 的連結，收到業務報價後點擊即可直接銜接。" />}
                {index === 2 && <EmailBridgeNote note="確認報價後，設計團隊開始製作打樣稿。完成後業務將以 Email 通知您，並附上直接進入 Step 03 的確認連結。" />}
                <div className={'relative md:flex md:items-center md:gap-8 mb-12 ' + (isEven ? 'md:flex-row' : 'md:flex-row-reverse')}>
                  {/* Content Card */}
                  <div className="md:w-[calc(50%-2rem)] bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{step.icon}</span>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-[#2C4A38] tracking-widest uppercase">
                          Step {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <ul className="space-y-1 mb-5">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-gray-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A38] flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => setActiveStep(index)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2C4A38] hover:bg-[#1C3428] text-white text-sm font-bold rounded-lg transition-colors duration-200"
                        >
                          {step.buttonLabel}
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#2C4A38] text-white font-bold text-sm items-center justify-center shadow-md z-10">
                    {step.number}
                  </div>

                  {/* Spacer */}
                  <div className="md:w-[calc(50%-2rem)]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeStepData && ActiveForm && (
        <StepModal
          isOpen={activeStep !== null}
          onClose={() => setActiveStep(null)}
          stepNumber={activeStepData.number}
          stepTitle={activeStepData.title}
        >
          {activeStep === 0 ? (
            <Step01Form
              onSuccess={(ref) => setQuoteRef(ref)}
              onGoToStep02={() => setActiveStep(1)}
            />
          ) : activeStep === 1 ? (
            <Step02Form onSuccess={() => {}} quoteRef={quoteRef || undefined} />
          ) : (
            <ActiveForm onSuccess={() => {}} />
          )}
        </StepModal>
      )}
    </>
  );
}
