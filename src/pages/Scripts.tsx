import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, Filter } from 'lucide-react';

interface Script {
  id: number;
  title: string;
  description: string;
  difficulty: '简单' | '中等' | '困难';
  duration: string;
  players: string;
  rating: number;
  category: string;
  image: string;
  tags: string[];
}

const scripts: Script[] = [
  {
    id: 1,
    title: '星际迷航',
    description: '在浩瀚的宇宙中，一艘飞船失去了联系。船员们必须找出真相，否则将面临灭顶之灾。',
    difficulty: '中等',
    duration: '4小时',
    players: '6-8人',
    rating: 4.8,
    category: '科幻',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=sci-fi%20spaceship%20interior%20with%20stars%20and%20planets%20in%20background%2C%20mysterious%20atmospheric%20lighting%2C%20futuristic%20design&image_size=landscape_16_9',
    tags: ['科幻', '悬疑', '团队合作']
  },
  {
    id: 2,
    title: '古宅惊魂',
    description: '一座古老的宅院，隐藏着不为人知的秘密。每个角色都有自己的目的和过去。',
    difficulty: '困难',
    duration: '5小时',
    players: '7-10人',
    rating: 4.9,
    category: '恐怖',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=haunted%20mansion%20exterior%20at%20night%2C%20gothic%20architecture%2C%20dark%20stormy%20sky%2C%20eerie%20atmosphere%2C%20lightning%20in%20background&image_size=landscape_16_9',
    tags: ['恐怖', '推理', '心理']
  },
  {
    id: 3,
    title: '校园疑云',
    description: '平静的校园里发生了一起离奇事件。学生们必须齐心协力找出真相。',
    difficulty: '简单',
    duration: '3小时',
    players: '5-7人',
    rating: 4.6,
    category: '校园',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=school%20campus%20courtyard%20in%20spring%2C%20cherry%20blossoms%2C%20students%20walking%2C%20peaceful%20atmosphere%2C%20bright%20daylight%2C%20modern%20architecture&image_size=landscape_16_9',
    tags: ['校园', '青春', '推理']
  },
  {
    id: 4,
    title: '商战风云',
    description: '商业帝国的继承权之争，每个人都有自己的算盘。谁是真正的朋友，谁又是敌人？',
    difficulty: '中等',
    duration: '4小时',
    players: '6-9人',
    rating: 4.7,
    category: '商战',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20corporate%20boardroom%20with%20floor-to-ceiling%20windows%2C%20city%20skyline%20view%2C%20luxury%20interior%20design%2C%20professional%20atmosphere%2C%20sunset%20lighting&image_size=landscape_16_9',
    tags: ['商战', '策略', '心理']
  },
  {
    id: 5,
    title: '时空穿越',
    description: '意外穿越到不同的时空，每个时代都有自己的规则和秘密。如何回到原来的世界？',
    difficulty: '困难',
    duration: '6小时',
    players: '8-12人',
    rating: 4.9,
    category: '穿越',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=time%20portal%20vortex%20with%20multiple%20historical%20eras%20visible%2C%20ancient%20pyramids%2C%20medieval%20castle%2C%20futuristic%20city%2C%20swirling%20colors%20and%20energy&image_size=landscape_16_9',
    tags: ['穿越', '历史', '科幻']
  },
  {
    id: 6,
    title: '江湖恩仇',
    description: '江湖中的恩怨情仇，每个人都有自己的故事。在这个充满危险的世界里，信任是最珍贵的。',
    difficulty: '中等',
    duration: '4小时',
    players: '7-9人',
    rating: 4.8,
    category: '武侠',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20martial%20arts%20temple%20in%20mountains%2C%20traditional%20architecture%2C%20misty%20atmosphere%2C%20bamboo%20forest%2C%20serene%20and%20mysterious&image_size=landscape_16_9',
    tags: ['武侠', '江湖', '恩怨']
  }
];

const categories = ['全部', '科幻', '恐怖', '校园', '商战', '穿越', '武侠'];
const difficulties = ['全部', '简单', '中等', '困难'];

export default function Scripts() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部');
  const [showFilters, setShowFilters] = useState(false);

  const filteredScripts = scripts.filter(script => {
    const categoryMatch = selectedCategory === '全部' || script.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === '全部' || script.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '简单': return 'bg-green-500/20 text-green-400';
      case '中等': return 'bg-yellow-500/20 text-yellow-400';
      case '困难': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-blue via-cosmic-purple/20 to-space-blue">
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron"
          >
            剧本展示
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-starlight-silver mb-8 max-w-3xl mx-auto"
          >
            探索我们精心准备的剧本世界，每个故事都是一次独特的冒险
          </motion.p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-cosmic-purple/20 text-cosmic-purple rounded-lg hover:bg-cosmic-purple/30 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>筛选剧本</span>
          </button>
          
          <div className="text-starlight-silver">
            共找到 {filteredScripts.length} 个剧本
          </div>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-space-blue/50 rounded-lg backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-medium mb-2">剧本类型</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-cosmic-purple text-white'
                          : 'bg-space-blue/30 text-starlight-silver hover:bg-cosmic-purple/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">难度等级</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map(difficulty => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedDifficulty === difficulty
                          ? 'bg-cosmic-purple text-white'
                          : 'bg-space-blue/30 text-starlight-silver hover:bg-cosmic-purple/20'
                      }`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scripts Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScripts.map((script, index) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-space-blue/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cosmic-purple/20 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={script.image}
                  alt={script.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-blue/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(script.difficulty)}`}>
                    {script.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cosmic-purple transition-colors">
                  {script.title}
                </h3>
                <p className="text-starlight-silver text-sm mb-4 line-clamp-2">
                  {script.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-starlight-silver mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{script.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{script.players}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{script.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {script.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-cosmic-purple/20 text-cosmic-purple text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full py-2 bg-gradient-to-r from-cosmic-purple to-neon-pink text-white rounded-lg hover:shadow-lg hover:shadow-cosmic-purple/30 transition-all duration-300 font-medium">
                  查看详情
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}