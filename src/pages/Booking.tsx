import React, { useState } from 'react';
import LottieAnimation from '@/components/LottieAnimation';
import loadingAnimation from '@/animations/loading.json';
import successAnimation from '@/animations/success.json';

interface BookingForm {
  scriptId: string;
  date: string;
  time: string;
  playerCount: number;
  customerName: string;
  customerPhone: string;
  notes: string;
}

const Booking: React.FC = () => {
  const [form, setForm] = useState<BookingForm>({
    scriptId: '',
    date: '',
    time: '',
    playerCount: 4,
    customerName: '',
    customerPhone: '',
    notes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const scripts = [
    { id: '1', name: '神秘剧本1', price: 88 },
    { id: '2', name: '悬疑剧本2', price: 98 },
    { id: '3', name: '欢乐剧本3', price: 78 },
    { id: '4', name: '恐怖剧本4', price: 108 }
  ];

  const timeSlots = [
    '10:00', '13:00', '15:00', '17:00', '19:00', '21:00'
  ];

  const handleInputChange = (field: keyof BookingForm, value: string | number) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟提交过程
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // 3秒后隐藏成功动画并重置表单
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentStep(1);
        setForm({
          scriptId: '',
          date: '',
          time: '',
          playerCount: 4,
          customerName: '',
          customerPhone: '',
          notes: ''
        });
      }, 3000);
    }, 2000);
  };

  const selectedScript = scripts.find(s => s.id === form.scriptId);
  const totalPrice = selectedScript ? selectedScript.price * form.playerCount : 0;

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-tech font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400 animate-glow">
          预约剧本
        </h1>

        {/* 步骤指示器 */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step 
                    ? 'bg-gradient-to-r from-cosmic-500 to-neon-500 text-white' 
                    : 'bg-space-700 text-starlight-400'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-gradient-to-r from-cosmic-500 to-neon-500' : 'bg-space-700'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 成功动画 */}
        {showSuccess && (
          <div className="fixed inset-0 bg-space-950/80 flex items-center justify-center z-50">
            <div className="bg-space-800 rounded-xl p-8 border border-cosmic-500/30 text-center">
              <div className="w-32 h-32 mx-auto mb-4">
                <LottieAnimation
                  animationData={successAnimation}
                  width={128}
                  height={128}
                  loop={false}
                  autoplay={true}
                />
              </div>
              <h3 className="text-2xl font-semibold text-starlight-400 mb-2">预约成功！</h3>
              <p className="text-starlight-300">
                我们会尽快联系您确认预约信息
              </p>
            </div>
          </div>
        )}

        <div className="bg-space-800 rounded-xl p-8 border border-cosmic-500/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-starlight-400 mb-6">选择剧本</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scripts.map((script) => (
                    <div
                      key={script.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        form.scriptId === script.id
                          ? 'border-cosmic-400 bg-cosmic-600/20'
                          : 'border-space-600 hover:border-cosmic-500'
                      }`}
                      onClick={() => handleInputChange('scriptId', script.id)}
                    >
                      <h3 className="text-lg font-semibold text-starlight-400">{script.name}</h3>
                      <p className="text-neon-400 font-bold">¥{script.price}/人</p>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-starlight-400 mb-2">
                    参与人数
                  </label>
                  <select
                    value={form.playerCount}
                    onChange={(e) => handleInputChange('playerCount', parseInt(e.target.value))}
                    className="w-full px-4 py-2 bg-space-700 border border-cosmic-500 rounded-lg text-starlight-400 focus:outline-none focus:ring-2 focus:ring-cosmic-400"
                  >
                    {[4, 5, 6, 7, 8].map((count) => (
                      <option key={count} value={count}>{count}人</option>
                    ))}
                  </select>
                </div>

                {selectedScript && (
                  <div className="bg-space-700 rounded-lg p-4">
                    <p className="text-starlight-400">
                      预计费用: <span className="text-neon-400 font-bold text-xl">¥{totalPrice}</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-starlight-400 mb-6">选择时间</h2>
                
                <div>
                  <label className="block text-sm font-medium text-starlight-400 mb-2">
                    预约日期
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-4 py-2 bg-space-700 border border-cosmic-500 rounded-lg text-starlight-400 focus:outline-none focus:ring-2 focus:ring-cosmic-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-starlight-400 mb-2">
                    预约时段
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                          form.time === time
                            ? 'bg-gradient-to-r from-cosmic-500 to-neon-500 text-white border-transparent'
                            : 'bg-space-700 border-cosmic-500 text-starlight-400 hover:border-cosmic-400'
                        }`}
                        onClick={() => handleInputChange('time', time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-starlight-400 mb-6">联系信息</h2>
                
                <div>
                  <label className="block text-sm font-medium text-starlight-400 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    value={form.customerName}
                    onChange={(e) => handleInputChange('customerName', e.target.value)}
                    className="w-full px-4 py-2 bg-space-700 border border-cosmic-500 rounded-lg text-starlight-400 focus:outline-none focus:ring-2 focus:ring-cosmic-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-starlight-400 mb-2">
                    手机号 *
                  </label>
                  <input
                    type="tel"
                    value={form.customerPhone}
                    onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                    className="w-full px-4 py-2 bg-space-700 border border-cosmic-500 rounded-lg text-starlight-400 focus:outline-none focus:ring-2 focus:ring-cosmic-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-starlight-400 mb-2">
                    备注信息
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 bg-space-700 border border-cosmic-500 rounded-lg text-starlight-400 focus:outline-none focus:ring-2 focus:ring-cosmic-400 resize-none"
                    placeholder="有什么特殊需求或问题可以在这里说明..."
                  />
                </div>

                {/* 预约确认信息 */}
                <div className="bg-space-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-starlight-400 mb-3">预约确认</h3>
                  <div className="space-y-2 text-sm text-starlight-300">
                    <p>剧本: {selectedScript?.name || '未选择'}</p>
                    <p>日期: {form.date || '未选择'}</p>
                    <p>时间: {form.time || '未选择'}</p>
                    <p>人数: {form.playerCount}人</p>
                    <p>费用: <span className="text-neon-400 font-bold">¥{totalPrice}</span></p>
                  </div>
                </div>
              </div>
            )}

            {/* 导航按钮 */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-space-700 text-starlight-400 cursor-not-allowed'
                    : 'bg-space-700 text-starlight-400 hover:bg-space-600 border border-cosmic-500'
                }`}
                disabled={currentStep === 1}
              >
                上一步
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                  className="px-6 py-2 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-lg text-white font-medium hover:from-cosmic-400 hover:to-neon-400 transition-all duration-300"
                >
                  下一步
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-lg text-white font-medium hover:from-cosmic-400 hover:to-neon-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting && (
                    <div className="w-5 h-5">
                      <LottieAnimation
                        animationData={loadingAnimation}
                        width={20}
                        height={20}
                        loop={true}
                        autoplay={true}
                      />
                    </div>
                  )}
                  <span>{isSubmitting ? '提交中...' : '提交预约'}</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;