export type QuoteStatus = 'pending' | 'quoted' | 'confirmed' | 'rejected';
export type OrderStep = 1 | 2 | 3 | 4 | 5;
export type OrderStepStatus = 'in_progress' | 'waiting_customer' | 'completed';

export interface QuoteRequest {
  id: string;
  company: string;
  email: string;
  stickerType: string;
  quantity: number;
  size: string;
  status: QuoteStatus;
  createdAt: string;
  notes?: string;
}

export interface Order {
  id: string;
  company: string;
  email: string;
  stickerType: string;
  quantity: number;
  step: OrderStep;
  stepStatus: OrderStepStatus;
  createdAt: string;
  estimatedDate: string;
  address: string;
}

export const mockQuotes: QuoteRequest[] = [
  { id: 'ZT-20260427-3842', company: '星采文創有限公司', email: 'star@starcraft.com.tw', stickerType: '防水貼紙', quantity: 2000, size: '5×5cm', status: 'pending', createdAt: '2026-04-27', notes: '需要霧面加工' },
  { id: 'ZT-20260426-1195', company: '樂活生技股份有限公司', email: 'info@lohas-bio.com', stickerType: '透明貼紙', quantity: 5000, size: '3×8cm', status: 'quoted', createdAt: '2026-04-26' },
  { id: 'ZT-20260425-7731', company: '好日子咖啡', email: 'hello@goodday.cafe', stickerType: '燙金貼紙', quantity: 1000, size: '4×4cm', status: 'confirmed', createdAt: '2026-04-25', notes: 'Logo 燙金，背景霧面' },
  { id: 'ZT-20260424-2280', company: '迅捷物流', email: 'op@swift-logistics.com.tw', stickerType: '反光貼紙', quantity: 10000, size: '6×2cm', status: 'pending', createdAt: '2026-04-24' },
  { id: 'ZT-20260423-9901', company: '小草文具', email: 'buyer@grassstudio.tw', stickerType: '鐳射貼紙', quantity: 3000, size: '3×3cm', status: 'rejected', createdAt: '2026-04-23', notes: '預算不符' },
  { id: 'ZT-20260422-4456', company: '誠品生活', email: 'collab@eslite.com', stickerType: '防水貼紙', quantity: 8000, size: '7×5cm', status: 'quoted', createdAt: '2026-04-22' },
  { id: 'ZT-20260421-6673', company: '台灣大學出版中心', email: 'pub@ntu.edu.tw', stickerType: '透明貼紙', quantity: 500, size: '4×6cm', status: 'confirmed', createdAt: '2026-04-21' },
];

export const mockOrders: Order[] = [
  { id: 'ZT-20260410-5521', company: '好日子咖啡', email: 'hello@goodday.cafe', stickerType: '燙金貼紙', quantity: 1000, step: 3, stepStatus: 'waiting_customer', createdAt: '2026-04-10', estimatedDate: '2026-05-08', address: '台北市大安區復興南路一段390號' },
  { id: 'ZT-20260408-3317', company: '台灣大學出版中心', email: 'pub@ntu.edu.tw', stickerType: '透明貼紙', quantity: 500, step: 4, stepStatus: 'in_progress', createdAt: '2026-04-08', estimatedDate: '2026-05-05', address: '台北市中正區羅斯福路四段一號' },
  { id: 'ZT-20260405-8842', company: '美好藥局', email: 'order@meihao-rx.com', stickerType: '防水貼紙', quantity: 3000, step: 5, stepStatus: 'in_progress', createdAt: '2026-04-05', estimatedDate: '2026-04-30', address: '新北市板橋區文化路二段10號' },
  { id: 'ZT-20260401-2234', company: '晨光烘焙', email: 'store@morningbake.tw', stickerType: '鐳射貼紙', quantity: 2000, step: 2, stepStatus: 'waiting_customer', createdAt: '2026-04-01', estimatedDate: '2026-05-15', address: '台中市西區公益路199號' },
  { id: 'ZT-20260328-7765', company: '沐光選物', email: 'hello@muguang.shop', stickerType: '反光貼紙', quantity: 1500, step: 4, stepStatus: 'in_progress', createdAt: '2026-03-28', estimatedDate: '2026-05-02', address: '高雄市前金區中正四路211號' },
];

export const stepLabels: Record<OrderStep, string> = {
  1: '填寫需求',
  2: '報價確認',
  3: '設計打樣',
  4: '生產製造',
  5: '出貨交付',
};

export const quoteStatusLabel: Record<QuoteStatus, string> = {
  pending: '待報價',
  quoted: '已報價',
  confirmed: '已確認',
  rejected: '已拒絕',
};

export const quoteStatusColor: Record<QuoteStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  quoted: 'bg-blue-100 text-blue-700',
  confirmed: 'bg-green-100 text-green-700',
  rejected: 'bg-gray-100 text-gray-500',
};

export const stepStatusLabel: Record<OrderStepStatus, string> = {
  in_progress: '進行中',
  waiting_customer: '待客戶確認',
  completed: '已完成',
};

export const stepStatusColor: Record<OrderStepStatus, string> = {
  in_progress: 'bg-blue-100 text-blue-700',
  waiting_customer: 'bg-amber-100 text-amber-700',
  completed: 'bg-green-100 text-green-700',
};

export interface Customer {
  id: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  industry: string;
  totalQuotes: number;
  totalOrders: number;
  totalAmount: number;
  lastActivity: string;
  status: 'active' | 'inactive';
}

export const mockCustomers: Customer[] = [
  { id: 'C-001', company: '星采文創有限公司', email: 'star@starcraft.com.tw', phone: '02-2345-6789', address: '台北市大安區忠孝東路四段100號', industry: '文創設計', totalQuotes: 3, totalOrders: 2, totalAmount: 48000, lastActivity: '2026-04-27', status: 'active' },
  { id: 'C-002', company: '樂活生技股份有限公司', email: 'info@lohas-bio.com', phone: '02-8765-4321', address: '台北市內湖區瑞光路500號', industry: '生技醫療', totalQuotes: 2, totalOrders: 1, totalAmount: 125000, lastActivity: '2026-04-26', status: 'active' },
  { id: 'C-003', company: '好日子咖啡', email: 'hello@goodday.cafe', phone: '02-2711-8899', address: '台北市大安區復興南路一段390號', industry: '餐飲零售', totalQuotes: 4, totalOrders: 3, totalAmount: 36000, lastActivity: '2026-04-25', status: 'active' },
  { id: 'C-004', company: '迅捷物流', email: 'op@swift-logistics.com.tw', phone: '02-6600-1234', address: '新北市林口區文化二路100號', industry: '物流運輸', totalQuotes: 1, totalOrders: 0, totalAmount: 0, lastActivity: '2026-04-24', status: 'active' },
  { id: 'C-005', company: '小草文具', email: 'buyer@grassstudio.tw', phone: '02-2365-7788', address: '台北市中正區重慶南路一段10號', industry: '文具零售', totalQuotes: 2, totalOrders: 1, totalAmount: 18000, lastActivity: '2026-04-23', status: 'inactive' },
  { id: 'C-006', company: '誠品生活', email: 'collab@eslite.com', phone: '02-8789-3388', address: '台北市信義區松高路11號', industry: '零售通路', totalQuotes: 5, totalOrders: 4, totalAmount: 320000, lastActivity: '2026-04-22', status: 'active' },
  { id: 'C-007', company: '台灣大學出版中心', email: 'pub@ntu.edu.tw', phone: '02-2365-9286', address: '台北市中正區羅斯福路四段一號', industry: '學術出版', totalQuotes: 3, totalOrders: 2, totalAmount: 24000, lastActivity: '2026-04-21', status: 'active' },
  { id: 'C-008', company: '美好藥局', email: 'order@meihao-rx.com', phone: '02-2955-6677', address: '新北市板橋區文化路二段10號', industry: '醫療零售', totalQuotes: 2, totalOrders: 2, totalAmount: 55000, lastActivity: '2026-04-05', status: 'active' },
  { id: 'C-009', company: '晨光烘焙', email: 'store@morningbake.tw', phone: '04-2328-8899', address: '台中市西區公益路199號', industry: '餐飲零售', totalQuotes: 1, totalOrders: 1, totalAmount: 42000, lastActivity: '2026-04-01', status: 'active' },
  { id: 'C-010', company: '沐光選物', email: 'hello@muguang.shop', phone: '07-2211-5566', address: '高雄市前金區中正四路211號', industry: '選物零售', totalQuotes: 2, totalOrders: 1, totalAmount: 31500, lastActivity: '2026-03-28', status: 'active' },
];
