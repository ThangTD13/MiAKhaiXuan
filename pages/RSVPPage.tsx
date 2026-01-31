import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Send, Moon, Flower } from "lucide-react";
import emailjs from "@emailjs/browser";

interface RSVPPageProps {
  onBack: () => void;
}

export const RSVPPage: React.FC<RSVPPageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attending: "yes",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      await emailjs.send(
        "service_sezzp8f",
        "template_z2wxscp",
        {
          name: formData.name,
          phone: formData.phone,
          attending:
            formData.attending === "yes" ? "Có tham gia" : "Hẹn lần khác",
          time: new Date().toLocaleString("vi-VN"),
        },
        "uqoprQUY1xKzwKM5c",
      );

      setFormState("success");
    } catch (err) {
      console.error(err);
      alert("Gửi thất bại, thử lại giúp mình nha");
      setFormState("idle");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 opacity-10">
        <Moon size={120} className="text-[#909CBB]" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Flower size={120} className="text-pink-300" />
      </div>

      <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-2xl border border-pink-50 p-8 md:p-16 relative z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-stone-400 hover:text-[#909CBB] transition-colors mb-12 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="uppercase tracking-widest text-xs font-bold">
            Quay lại hành trình
          </span>
        </button>

        {formState === "success" ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <CheckCircle2 size={48} className="text-green-500 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-4">Khai Xuân Lộc Về!</h2>
            <p className="text-stone-500 text-lg mb-12">
              Cảm ơn {formData.name} đã xác nhận tham gia. <br />
              Mình đã nhận được thông tin và sẽ sớm liên lạc với bạn!
            </p>
            <button
              onClick={onBack}
              className="bg-[#909CBB] text-white px-8 py-4 rounded-full font-bold hover:bg-[#7a89ab] transition-all"
            >
              Về trang chủ
            </button>
          </motion.div>
        ) : (
          <>
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-[#2d2a26] mb-4">
                Ghi Danh Khai Xuân
              </h1>
              <p className="handwriting text-2xl text-pink-400">
                Lộc đầu năm, tâm tình hội ngộ...
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-stone-400 ml-4">
                  Họ và Tên
                </label>
                <input
                  required
                  type="text"
                  placeholder="Nhập tên của bạn..."
                  className="w-full bg-[#fcfaf7] border border-pink-50 rounded-2xl px-6 py-4 outline-none focus:border-[#909CBB] transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-stone-400 ml-4">
                  Số Điện Thoại
                </label>
                <input
                  required
                  type="tel"
                  placeholder="Nhập SĐT của bạn..."
                  className="w-full bg-[#fcfaf7] border border-pink-50 rounded-2xl px-6 py-4 outline-none focus:border-[#909CBB] transition-all"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold text-stone-400 ml-4">
                  Xác nhận tham gia
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, attending: "yes" })
                    }
                    className={`flex-1 py-4 rounded-2xl border font-bold transition-all ${formData.attending === "yes" ? "bg-[#909CBB] text-white shadow-lg" : "bg-white text-stone-400 border-pink-50"}`}
                  >
                    Có, mình sẽ tới!
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, attending: "no" })
                    }
                    className={`flex-1 py-4 rounded-2xl border font-bold transition-all ${formData.attending === "no" ? "bg-pink-100 text-pink-500 border-pink-200 shadow-lg shadow-pink-100/50" : "bg-white text-stone-400 border-pink-50"}`}
                  >
                    Chắc chắn sẽ tới rồi^^
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-[#909CBB] text-white py-6 rounded-2xl text-lg font-bold shadow-xl flex items-center justify-center gap-3 hover:bg-[#7a89ab] transition-all disabled:opacity-50"
              >
                {formState === "submitting" ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Gửi xác nhận <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
};
