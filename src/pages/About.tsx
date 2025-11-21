import React, { useEffect, useRef } from 'react';

// 腾讯地图组件
const TencentMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    // 动态加载腾讯地图API
    const loadMapScript = () => {
      return new Promise<void>((resolve) => {
        if ((window as any).qq && (window as any).qq.maps) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://map.qq.com/api/gljs?v=1.exp&key=YOUR_TENCENT_MAP_KEY&libraries=service';
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      try {
        await loadMapScript();
        
        if (mapContainerRef.current && (window as any).qq && (window as any).qq.maps) {
          const qq = (window as any).qq;
          
          // 初始化地图
          const map = new qq.maps.Map(mapContainerRef.current, {
            center: new qq.maps.LatLng(26.578343, 106.707116), // 贵阳坐标
            zoom: 16,
            mapStyleId: 'style1' // 深色主题
          });
          
          // 添加标记点
          const marker = new qq.maps.Marker({
            position: new qq.maps.LatLng(26.578343, 106.707116),
            map: map,
            title: '破茧社剧本杀'
          });
          
          // 创建信息窗口
          const infoWindow = new qq.maps.InfoWindow({
            map: map,
            position: new qq.maps.LatLng(26.578343, 106.707116),
            content: `
              <div style="padding: 10px; color: #333;">
                <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">破茧社剧本杀</h3>
                <p style="margin: 0 0 3px 0; font-size: 14px;">地址：贵阳市南明区花果园大街123号</p>
                <p style="margin: 0 0 3px 0; font-size: 14px;">电话：0851-12345678</p>
                <p style="margin: 0; font-size: 14px;">营业时间：10:00-22:00</p>
              </div>
            `
          });
          
          // 显示信息窗口
          infoWindow.open();
          
          // 点击标记显示信息窗口
          qq.maps.event.addListener(marker, 'click', () => {
            infoWindow.open();
          });
          
          mapRef.current = map;
        }
      } catch (error) {
        console.error('地图加载失败:', error);
      }
    };

    initMap();

    return () => {
      // 清理地图实例
      if (mapRef.current) {
        mapRef.current.destroy && mapRef.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-96 rounded-lg border border-cosmic-500/30 bg-space-800"
      style={{ minHeight: '400px' }}
    />
  );
};

const About: React.FC = () => {
  const teamMembers = [
    {
      name: '张师傅',
      role: '首席DM',
      experience: '5年主持经验',
      specialty: '悬疑、恐怖类剧本',
      avatar: '🎭'
    },
    {
      name: '李老师',
      role: '高级DM',
      experience: '3年主持经验', 
      specialty: '情感、欢乐类剧本',
      avatar: '🎪'
    },
    {
      name: '王主持',
      role: '资深DM',
      experience: '4年主持经验',
      specialty: '推理、阵营类剧本',
      avatar: '🎨'
    }
  ];

  const environmentImages = [
    { title: '大厅区域', description: '宽敞舒适的大厅，提供茶水小食' },
    { title: '包间环境', description: '私密性强的包间，适合小团体游戏' },
    { title: '道具展示', description: '丰富的剧本道具，增强沉浸感' },
    { title: '休息区域', description: '舒适的休息区，游戏前后放松交流' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-tech font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400 animate-glow">
          关于我们
        </h1>

        {/* 店铺介绍 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-space-800 rounded-xl p-8 border border-cosmic-500/30 mb-8">
            <h2 className="text-2xl font-semibold text-starlight-400 mb-6">破茧社故事</h2>
            <div className="text-starlight-300 leading-relaxed space-y-4">
              <p>
                破茧社成立于2020年，是贵阳首家专注于沉浸式剧本杀体验的线下店铺。
                我们相信每一个剧本都是一次心灵的旅程，每一次游戏都是一次破茧成蝶的蜕变。
              </p>
              <p>
                在这里，您可以暂时忘却现实的烦恼，化身成为剧本中的角色，
                体验不同的人生，感受不一样的情感波澜。我们致力于为您打造最真实、
                最沉浸的剧本杀体验。
              </p>
              <p>
                从悬疑推理到情感沉浸，从恐怖惊悚到欢乐治愈，
                我们精选每一个剧本，确保为您带来最优质的游戏体验。
              </p>
            </div>
          </div>
        </div>

        {/* 环境展示 */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center text-starlight-400 mb-8">店铺环境</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentImages.map((image, index) => (
              <div key={index} className="group relative">
                <div className="bg-space-800 rounded-xl overflow-hidden border border-cosmic-500/30 hover:border-cosmic-400 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-cosmic-600 to-space-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-starlight-400 rounded-lg mb-2 mx-auto animate-pulse-slow"></div>
                      <p className="text-sm text-starlight-300">环境图片</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-starlight-400 mb-2">{image.title}</h3>
                    <p className="text-sm text-starlight-300">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 腾讯地图集成 */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center text-starlight-400 mb-8">店铺位置</h2>
          <div className="bg-space-800 rounded-xl p-6 border border-cosmic-500/30">
            <TencentMap />
            <div className="mt-4 text-center">
              <p className="text-starlight-300 mb-2">
                📍 贵阳市南明区花果园大街123号
              </p>
              <p className="text-starlight-400 text-sm">
                地铁1号线花果园站A出口步行5分钟
              </p>
            </div>
          </div>
        </div>

        {/* 团队介绍 */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center text-starlight-400 mb-8">专业团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-space-800 rounded-xl p-6 border border-cosmic-500/30 hover:border-cosmic-400 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-starlight-400 mb-1">{member.name}</h3>
                  <p className="text-cosmic-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-starlight-300 mb-2">{member.experience}</p>
                  <p className="text-sm text-neon-400">擅长: {member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 服务理念 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-cosmic-600/20 to-neon-600/20 rounded-xl p-8 border border-cosmic-500/50">
            <h2 className="text-2xl font-semibold text-center text-starlight-400 mb-8">服务承诺</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cosmic-500 rounded-full flex items-center justify-center text-sm font-bold mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-starlight-400 mb-1">专业主持</h3>
                    <p className="text-starlight-300 text-sm">经验丰富的DM团队，确保游戏流程顺畅</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cosmic-500 rounded-full flex items-center justify-center text-sm font-bold mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-starlight-400 mb-1">优质环境</h3>
                    <p className="text-starlight-300 text-sm">舒适的包间环境，提供最佳游戏体验</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cosmic-500 rounded-full flex items-center justify-center text-sm font-bold mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-starlight-400 mb-1">精心选本</h3>
                    <p className="text-starlight-300 text-sm">严格筛选优质剧本，保证游戏质量</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-neon-500 rounded-full flex items-center justify-center text-sm font-bold mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-starlight-400 mb-1">贴心服务</h3>
                    <p className="text-starlight-300 text-sm">提供茶水小食，全程贴心服务</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-neon-500 rounded-full flex items-center justify-center text-sm font-bold mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-starlight-400 mb-1">灵活预约</h3>
                    <p className="text-starlight-300 text-sm">支持在线预约，时间安排灵活</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-neon-500 rounded-full flex items-center justify-center text-sm font-bold mt-1">✓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-starlight-400 mb-1">售后保障</h3>
                    <p className="text-starlight-300 text-sm">游戏体验不满意可申请重新安排</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 联系信息 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-space-800 rounded-xl p-8 border border-cosmic-500/30">
            <h2 className="text-2xl font-semibold text-center text-starlight-400 mb-8">联系我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center text-xl mb-3 mx-auto">📍</div>
                <h3 className="text-lg font-semibold text-starlight-400 mb-2">店铺地址</h3>
                <p className="text-starlight-300">贵阳市南明区花果园大街123号</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center text-xl mb-3 mx-auto">📞</div>
                <h3 className="text-lg font-semibold text-starlight-400 mb-2">联系电话</h3>
                <p className="text-starlight-300">0851-12345678</p>
                <p className="text-starlight-300">138-8888-8888</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center text-xl mb-3 mx-auto">⏰</div>
                <h3 className="text-lg font-semibold text-starlight-400 mb-2">营业时间</h3>
                <p className="text-starlight-300">周一至周日</p>
                <p className="text-starlight-300">10:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;