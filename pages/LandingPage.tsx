import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Sparkles,
  Heart,
  Flower,
  Wind,
  User,
} from "lucide-react";
import { Section } from "../components/Section";
import { TimelineItem, Project, Member, ValueItem } from "../types";
import Anh1 from "../assets/image/Anh1.png";
import Anh2 from "../assets/image/Anh2.png";
import Anh3 from "../assets/image/Anh3.png";
import Anh4 from "../assets/image/Anh4.png";
import DoanTrang from "../assets/image/DoanTrang.png";
import KhanhHa from "../assets/image/KhanhHa.png";
import LeHien from "../assets/image/LeHien.png";
import MinhAnh from "../assets/image/MinhAnh.png";
import NhuQuang from "../assets/image/NhuQuang.png";
import NhanQuy from "../assets/image/NhanQuy.png";
import ThangTD from "../assets/image/ThangTD.png";
import TrangNhi from "../assets/image/TrangNhi.png";
import VanAnh from "../assets/image/VanAnh.png";

interface LandingPageProps {
  onRSVPClick: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onRSVPClick }) => {
  const timeline: TimelineItem[] = [
    {
      year: "2024",
      title: "Chúng ta gặp nhau và rồi cho nhau những kỷ niệm đẹp",
      description:
        "Chúng ta bắt đầu bằng những sự kiện đầu tiên, dù là lần đầu nhưng chúng ta đã dám thử những điều mới mẻ và tìm thấy sự đồng điệu trong tâm hồn.",
    },
    {
      year: "2025",
      title: "Mỗi chúng ta đều có hành trình mới",
      description:
        "Mỗi người chúng ta đều có con đường riêng, có việc riêng cần làm và vì thế nên chúng ta tạm xa nhau.",
    },
    {
      year: "2026",
      title: "Sự tập trung và kiên định",
      description:
        "Chúng ta đều đã chọn được con đường của riêng mình và dùng hết sức mình để theo đuổi nó.",
    },
  ];

  const projects: Project[] = [
    {
      title: "Thiết Kế Năm 2024 Bùng Nổ'",
      tag: "Social Project",
      story:
        "Dự án đầu tiên mang linh hồn cho team MiA, nơi chúng mình cùng nhau phá vỡ những rào cản cũ để đón nhận những góc nhìn mới mẻ.",
      imageUrl: Anh1,
    },
    {
      title: "GenZ Tập Đi Làm",
      tag: "Internal System",
      story:
        "Tiếp nối thành công từ sự kiện trước, chúng mình lại tiếp tục với GenZ Tập Đi Làm và thu hút được 200 bạn trẻ tham gia.",
      imageUrl: Anh2,
    },
    {
      title: "MiA TEAM GEN 3 - THE FUSION FIESTA",
      tag: "Community",
      story: "Lần thứ 3 chúng mình mang hơi ấm của MiA ra cộng đồng, và...",
      imageUrl: Anh3,
    },
    {
      title: "Sui Connect 2025",
      tag: "Exhibition",
      story:
        "Mình xin khoe riêng cuộc gặp mặt bất ngờ của mình với chị Nhi hehe, cuộc gặp bất ngờ mở ra nhiều cơ hội mới cho mình.",
      imageUrl: Anh4,
    },
  ];

  const members: Member[] = [
    {
      name: "Trang Nhi",
      imageUrl: TrangNhi,
    },
    {
      name: "Minh Anh",
      imageUrl: MinhAnh,
    },
    {
      name: "Như Quang",
      imageUrl: NhuQuang,
    },
    {
      name: "Nhân Quý",
      imageUrl: NhanQuy,
    },
    {
      name: "Lê Hiền",
      imageUrl: LeHien,
    },
    {
      name: "Doan Trang",
      imageUrl: DoanTrang,
    },
    {
      name: "Vân Anh",
      imageUrl: VanAnh,
    },
    {
      name: "ThangTD",
      imageUrl: ThangTD,
    },
    {
      name: "Khánh Hà",
      imageUrl: KhanhHa,
    },
  ];

  const values: ValueItem[] = [
    {
      title: "Giá trị đi kèm những kỹ năng thực tế",
      description:
        "Kiến thức là phù sa, nhưng chúng mình đã biết cách sử dụng và đạt thành tựu với nó.",
      icon: <Flower className="w-6 h-6" />,
    },
    {
      title: "Dám làm dám thử dám thất bại",
      description:
        "Dù bạn sai, bạn thất bại, nhưng bạn đã thành công từ khi bạn bắt tay vào làm.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Tạo cộng đồng và trao giá trị cho mọi người",
      description:
        "Chúng ta đã biến những bài học và kiến thức của mình thành món quà cho cộng đồng.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Thu hút những mối quan hệ chất lượng",
      description:
        "Khi nhắc tới, chúng ta sẽ luôn thấy tự hào về những người bạn của mình.",
      icon: <Wind className="w-6 h-6" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcfaf7]/80 backdrop-blur-md border-b border-pink-100/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="serif text-xl font-bold tracking-tight text-[#2d2a26]">
              MiA Level Up
            </span>
            <div className="w-2 h-2 rounded-full bg-pink-300"></div>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium opacity-70">
            <a href="#story" className="hover:text-[#909CBB] transition-colors">
              Tâm tình
            </a>
            <a
              href="#journey"
              className="hover:text-[#909CBB] transition-colors"
            >
              Hành trình
            </a>
            <a
              href="#projects"
              className="hover:text-[#909CBB] transition-colors"
            >
              Dấu ấn
            </a>
            <a
              href="#members"
              className="hover:text-[#909CBB] transition-colors"
            >
              Đồng hành
            </a>
            <button
              onClick={onRSVPClick}
              className="hover:text-[#909CBB] transition-colors uppercase tracking-widest"
            >
              Tết MiA
            </button>
          </div>
          <button
            onClick={onRSVPClick}
            className="hidden md:block bg-[#909CBB] text-white px-5 py-2 text-sm rounded-full hover:bg-[#7a89ab] transition-colors shadow-lg shadow-[#909CBB]/20"
          >
            Khai xuân cùng MiA
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 flex items-center gap-3 text-[#909CBB] uppercase tracking-[0.4em] text-xs font-bold"
        >
          <div className="w-12 h-px bg-[#909CBB]/30"></div>
          <span>Khai Xuân 2026</span>
          <div className="w-12 h-px bg-[#909CBB]/30"></div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight max-w-4xl text-[#2d2a26]">
          MiA Level Up – <br />
          <span className="italic text-[#909CBB]">Khai Xuân, Tiếp Bước</span>
        </h1>

        <p className="handwriting text-3xl md:text-4xl text-pink-400 mb-8 opacity-80">
          Chuyện cũ mình gác lại, Level Up mình viết tiếp...
        </p>

        <p className="text-lg md:text-xl text-stone-500 max-w-2xl mb-12 leading-relaxed font-light">
          Hai năm gieo mầm, một chặng đường gắn kết.{" "}
          <br className="hidden md:block" />
          Mùa xuân này, hãy cùng MiA viết nên những chương mới rực rỡ hơn.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <button
            onClick={onRSVPClick}
            className="bg-[#909CBB] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#7a89ab] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#909CBB]/20"
          >
            Đăng ký Khai Xuân
            <ChevronRight size={18} />
          </button>
          <a
            href="#story"
            className="border border-pink-200 text-[#909CBB] px-8 py-4 rounded-full flex items-center justify-center hover:bg-pink-50 transition-all font-medium bg-white/50 backdrop-blur-sm"
          >
            Nhìn lại tâm tình
          </a>
        </div>
      </Section>

      {/* Origin Story */}
      <Section
        id="story"
        className="bg-white rounded-[3rem] my-12 border border-pink-50 relative overflow-hidden shadow-sm"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-[#2d2a26]">
            Mùa xuân kể chuyện cũ
          </h2>
          <div className="space-y-6 text-stone-600 leading-loose text-lg font-light">
            <p>
              Team “MiA Level Up” không khởi đầu từ những bản kế hoạch hoàn hảo.
              Chúng mình bắt đầu từ khát khao mong muốn học hỏi, chúng mình
              trưởng thành qua những lần làm việc cùng nhau. Hai năm trước,
              chúng mình chỉ là những mảnh ghép rời rạc, mỗi người một hướng,
              chưa thật sự hiểu nhau, chưa đủ vững để tin tưởng.
            </p>
            <p>
              Rồi những mùa lạnh qua đi. Có lúc chùn bước, có lúc hoài nghi, có
              lúc tưởng như không thể đi tiếp. Nhưng chính trong những thử thách
              ấy, chúng mình học cách ở lại, lắng nghe và nắm tay nhau chặt hơn.
              Không ai hoàn hảo ngay từ đầu. Chúng mình lớn lên cùng nhau, vấp
              ngã cùng nhau, và từng chút một… Và giờ chúng mình đã lớn, không
              còn làm việc chung nhưng ký ức và tình cảm sẽ mãi luôn đong đầy.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="journey">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-[#2d2a26]">
              Hành trình của chúng ta
            </h2>
            <p className="text-stone-500 max-w-md font-light">
              Hai mùa tết đi qua, để lại những 'mắt cây' kiên cường.
            </p>
          </div>
          <div className="space-y-24 border-l border-pink-100 pl-8 md:pl-12 ml-4">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[2.5rem] md:-left-[3.5rem] top-0 w-8 h-8 rounded-full bg-[#fcfaf7] border-4 border-[#6682ca] flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6780c2]"></div>
                </div>
                <span className="block text-4xl font-bold text-[#4e6fc3]/10 mb-4">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-[#2d2a26]">
                  {item.title}
                </h3>
                <p className="text-stone-600 font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        className="!max-w-none px-0 overflow-hidden bg-gradient-to-b from-[#fcfaf7] to-white"
      >
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl font-bold text-[#2d2a26]">
            Hành Trình Của Chúng Ta
          </h2>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-24 pb-12 no-scrollbar">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center group bg-white rounded-[2.5rem] overflow-hidden border border-pink-50 shadow-sm hover:shadow-xl transition-all duration-700"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-stone-500 italic">"{project.story}"</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Members */}
      <Section
        id="members"
        className="bg-white rounded-[3rem] my-20 border border-pink-50 shadow-sm"
      >
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d2a26]">
            Những chiến binh của chúng ta
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-light italic">
            Mỗi cá nhân là một mảnh sắc xuân riêng biệt.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="relative mb-6 overflow-hidden rounded-full aspect-square w-full max-w-[160px] bg-white border-2 border-pink-50 transition-all duration-700 group-hover:scale-105 group-hover:border-[#909CBB]/30">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <h3 className="text-lg font-bold text-stone-800">
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-pink-400 font-bold">
                New Year Member
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section
        id="values"
        className="bg-[#909CBB] text-white rounded-[3.5rem] my-12 overflow-hidden relative shadow-2xl"
      >
        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">
              Giá trị của MiA Level Up
            </h2>
            <p className="handwriting text-3xl">
              Trao giá trị và cùng nhau phát triển
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-10 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#909CBB] transition-all">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="opacity-70 font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Meetup CTA */}
      <Section id="meetup" className="text-center py-32">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl border border-pink-50">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#2d2a26]">
            Khai Xuân Đoàn Viên
          </h2>
          <p className="text-stone-500 text-lg mb-16 max-w-xl mx-auto font-light">
            Gác lại những bộn bề năm cũ, cùng nhau gieo mầm hy vọng cho một năm
            2026 rực rỡ.
          </p>
          <button
            onClick={onRSVPClick}
            className="bg-[#909CBB] text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-[#7a89ab] transition-all shadow-xl group"
          >
            Xác nhận tham gia Tết MiA
            <Sparkles
              className="inline ml-2 group-hover:animate-spin"
              size={20}
            />
          </button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center border-t border-pink-50 mt-12 bg-white">
        <p className="text-xs uppercase tracking-[0.3em] text-stone-400 font-bold">
          © 2026 MiA Level Up. Happy Lunar New Year!
        </p>
      </footer>
    </motion.div>
  );
};
