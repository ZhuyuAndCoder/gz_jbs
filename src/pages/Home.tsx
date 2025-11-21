import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Users, Clock, MapPin, Phone } from "lucide-react";
import Planet3D from "@/components/Planet3D";
import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const [currentScript, setCurrentScript] = useState(0);

  const featuredScripts = [
    {
      id: "1",
      name: "星际迷航",
      type: "科幻悬疑",
      difficulty: 4,
      players: "5-7人",
      duration: "4小时",
      price: 98,
      description: "在浩瀚的宇宙中，一艘飞船上的船员们面临着未知的威胁...",
    },
    {
      id: "2",
      name: "古堡迷案",
      type: "推理悬疑",
      difficulty: 5,
      players: "6-8人",
      duration: "5小时",
      price: 108,
      description: "一座古老的城堡，一起离奇的命案，真相隐藏在迷雾中...",
    },
    {
      id: "3",
      name: "青春回忆录",
      type: "情感治愈",
      difficulty: 2,
      players: "4-6人",
      duration: "3小时",
      price: 78,
      description: "回到那个青涩的年代，重温那些美好的青春记忆...",
    },
  ];

  const environmentImages = [
    { title: "大厅区域", description: "宽敞舒适的大厅，提供茶水小食" },
    { title: "包间环境", description: "私密性强的包间，适合小团体游戏" },
    { title: "道具展示", description: "丰富的剧本道具，增强沉浸感" },
    { title: "休息区域", description: "舒适的休息区，游戏前后放松交流" },
  ];

  const teamMembers = [
    {
      name: "张师傅",
      role: "首席DM",
      experience: "5年主持经验",
      specialty: "悬疑、恐怖类剧本",
      avatar: "🎭",
    },
    {
      name: "李老师",
      role: "高级DM",
      experience: "3年主持经验",
      specialty: "情感、欢乐类剧本",
      avatar: "🎪",
    },
    {
      name: "王主持",
      role: "资深DM",
      experience: "4年主持经验",
      specialty: "推理、阵营类剧本",
      avatar: "🎨",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScript((prev) => (prev + 1) % featuredScripts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Planet */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Planet Background */}
        <div className="absolute inset-0 z-0">
          <Planet3D />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400 animate-glow">
            破茧社
          </h1>
          <p className="text-xl md:text-2xl text-starlight-300 mb-8 leading-relaxed">
            沉浸式剧本杀体验空间
          </p>
          <p className="text-lg text-starlight-400 mb-12 max-w-2xl mx-auto">
            在这里，每一次游戏都是一次心灵的蜕变。让我们一起进入剧本的世界，
            体验不同的人生，感受不一样的情感波澜。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/scripts"
              className="px-8 py-4 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-lg text-white font-semibold text-lg hover:from-cosmic-400 hover:to-neon-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>浏览剧本</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/booking"
              className="px-8 py-4 border-2 border-cosmic-500 rounded-lg text-cosmic-400 font-semibold text-lg hover:bg-cosmic-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              立即预约
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-starlight-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-starlight-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="py-20 bg-space-900/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-tech font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400">
            为什么选择破茧社
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              className="text-center group"
              variants={itemFade}
              transition={{
                delay: 0 * 0.12,
                duration: 0.5,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-starlight-400 mb-4">
                专业主持
              </h3>
              <p className="text-starlight-300">
                经验丰富的DM团队，专业的剧本解读和流程控制，确保每一场游戏都是完美体验。
              </p>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={itemFade}
              transition={{
                delay: 1 * 0.12,
                duration: 0.5,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-starlight-400 mb-4">
                沉浸环境
              </h3>
              <p className="text-starlight-300">
                精心设计的游戏空间，配合专业的灯光音效，营造最真实的剧本氛围。
              </p>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={itemFade}
              transition={{
                delay: 2 * 0.12,
                duration: 0.5,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-starlight-400 mb-4">
                精选剧本
              </h3>
              <p className="text-starlight-300">
                严格筛选优质剧本，涵盖各种类型和难度，满足不同玩家的需求。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Scripts Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-tech font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400">
            热门剧本推荐
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-space-800 rounded-xl p-8 border border-cosmic-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="h-64 bg-gradient-to-br from-cosmic-600 to-space-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-starlight-400 rounded-full mb-4 mx-auto animate-pulse-slow"></div>
                      <p className="text-starlight-300">剧本封面</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-starlight-400">
                    {featuredScripts[currentScript].name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-starlight-300">
                    <span className="bg-cosmic-600/20 px-3 py-1 rounded-full">
                      {featuredScripts[currentScript].type}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{featuredScripts[currentScript].players}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredScripts[currentScript].duration}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-starlight-400">难度:</span>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < featuredScripts[currentScript].difficulty
                            ? "text-yellow-400 fill-current"
                            : "text-space-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-starlight-300 leading-relaxed">
                    {featuredScripts[currentScript].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-neon-400">
                      ¥{featuredScripts[currentScript].price}/人
                    </span>
                    <Link
                      to="/booking"
                      className="px-6 py-2 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-lg text-white font-medium hover:from-cosmic-400 hover:to-neon-400 transition-all duration-300"
                    >
                      立即预约
                    </Link>
                  </div>
                </div>
              </div>

              {/* 轮播指示器 */}
              <div className="flex justify-center space-x-3 mt-6">
                {featuredScripts.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentScript
                        ? "bg-cosmic-400 w-8"
                        : "bg-starlight-400/40 ring-1 ring-cosmic-500/30 hover:bg-starlight-400/60"
                    }`}
                    onClick={() => setCurrentScript(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Environment Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="py-20 bg-space-900/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-tech font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400">
            店铺环境
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {environmentImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-space-800 rounded-xl overflow-hidden border border-cosmic-500/30 hover:border-cosmic-400 transition-all duration-300"
                variants={itemFade}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
              >
                <div className="h-40 bg-gradient-to-br from-cosmic-600 to-space-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-starlight-400 rounded-lg mb-2 mx-auto animate-pulse-slow"></div>
                    <p className="text-sm text-starlight-300">环境图片</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-starlight-400 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-starlight-300">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Staff Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-tech font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400">
            员工风采
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-space-800 rounded-xl p-6 border border-cosmic-500/30 hover:border-cosmic-400 transition-all duration-300 hover:scale-105"
                variants={itemFade}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-starlight-400 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cosmic-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-starlight-300 mb-2">
                    {member.experience}
                  </p>
                  <p className="text-sm text-neon-400">
                    擅长: {member.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="py-20 bg-gradient-to-r from-cosmic-600/20 to-neon-600/20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-tech font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400">
            准备好开始你的剧本之旅了吗？
          </h2>
          <p className="text-xl text-starlight-300 mb-8 max-w-2xl mx-auto">
            每一个剧本都是一次全新的体验，每一个角色都是一次心灵的蜕变。
            加入我们，一起探索剧本杀的无限魅力。
          </p>
          <Link
            to="/scripts"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-lg text-white font-semibold text-lg hover:from-cosmic-400 hover:to-neon-400 transition-all duration-300 transform hover:scale-105"
          >
            <span>探索所有剧本</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="py-20 bg-space-900/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-tech font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cosmic-400 to-neon-400">
            联系我们
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <motion.div
                className="bg-space-800 rounded-xl p-6 border border-cosmic-500/30 hover:border-cosmic-400 transition-all duration-300 hover:scale-105"
                variants={itemFade}
                transition={{
                  delay: 0 * 0.12,
                  duration: 0.5,
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-starlight-400 mb-2">
                  店铺地址
                </h3>
                <p className="text-starlight-300">
                  贵阳市南明区花果园大街123号
                </p>
              </motion.div>

              <motion.div
                className="bg-space-800 rounded-xl p-6 border border-cosmic-500/30 hover:border-cosmic-400 transition-all duration-300 hover:scale-105"
                variants={itemFade}
                transition={{
                  delay: 1 * 0.12,
                  duration: 0.5,
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-starlight-400 mb-2">
                  联系电话
                </h3>
                <p className="text-starlight-300">0851-12345678</p>
                <p className="text-starlight-300">138-8888-8888</p>
              </motion.div>

              <motion.div
                className="bg-space-800 rounded-xl p-6 border border-cosmic-500/30 hover:border-cosmic-400 transition-all duration-300 hover:scale-105"
                variants={itemFade}
                transition={{
                  delay: 2 * 0.12,
                  duration: 0.5,
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-500 to-neon-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-starlight-400 mb-2">
                  营业时间
                </h3>
                <p className="text-starlight-300">周一至周日</p>
                <p className="text-starlight-300">10:00 - 22:00</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
