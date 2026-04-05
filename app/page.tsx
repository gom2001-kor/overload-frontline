import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-surface border-b border-outline-variant/15 py-4 px-6 md:px-12 flex items-center justify-between z-50 relative">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="민주노총 공공운수노조 국토교통부세종지부" className="h-10 w-auto object-contain" />
          </a>
        </div>
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 font-bold text-primary text-sm">
          <a href="/report.html" className="hover:text-tertiary transition-colors">실태 보고서</a>
          <a href="/proposal.html" className="hover:text-tertiary transition-colors">정책 제안서</a>
          <a href="/treatment.html" className="hover:text-tertiary transition-colors">정책 자료</a>
        </nav>
        <div className="w-32 hidden md:block"></div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/main.png" 
            alt="Hero Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-container/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-primary/40" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-tertiary font-bold tracking-widest text-sm uppercase bg-tertiary/20 px-3 py-1 rounded-sm">긴급 정책 브리핑</span>
              <div className="h-px bg-tertiary/50 w-16" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-[-0.02em] mb-8">
              방치된 위협,<br />
              <span className="italic text-white/90">도로 위의 시한폭탄</span><br />
              과적 차량
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              성수대교 참사 30년, 여전히 99.6%의 과적 차량이 단속 후에도 그대로 도로를 달리고 있습니다. 우리의 안전은 어디에 있습니까?
            </p>
          </div>
        </div>
      </section>

      {/* Argument Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 lg:pr-12">
              <div className="mb-6">
                <span className="text-tertiary font-bold text-sm tracking-widest">4제곱 법칙</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight tracking-tight mb-8">
                무게가 두 배가 되면,<br />
                도로 파손은 16배가 됩니다.
              </h2>
              <div className="space-y-6 text-primary/80 leading-relaxed text-lg">
                <p>
                  공학적 원리인 '4제곱 법칙'에 따르면 축하중 10톤의 차량은 1톤 차량에 비해 도로에 10,000배의 손상을 입힙니다. 80톤 과적 차량 한 대가 지나갈 때 발생하는 도로나 교량의 피로도는 승용차 수십만 대의 통행과 맞먹는 수준입니다.
                </p>
                <p>
                  그럼에도 불구하고 현재의 단속 체계는 실질적인 억제력을 상실했습니다. 단속 후 회차 조치 없이 과태료만 부과되는 구조 속에서, 과적은 '비용'으로 계산될 뿐 '위험'으로 인식되지 않습니다.
                </p>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-lowest/80 backdrop-blur-xl p-10 rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.06)] border border-outline-variant/15 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-low rounded-bl-full -mr-16 -mt-16 opacity-50" />
                
                <h3 className="font-serif text-2xl text-primary mb-8 relative z-10">위험의 지표</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-6 items-start">
                    <div className="text-tertiary font-serif text-xl whitespace-nowrap pt-1">4제곱 법칙</div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">0.4% 분리운송 이행률</h4>
                      <p className="text-sm text-primary/70 leading-relaxed">고속도로와 일반국도 및 지방도의 단속 사각지대 존재</p>
                    </div>
                  </div>
                  <div className="h-px bg-outline-variant/20 w-full" />
                  <div className="flex gap-6 items-start">
                    <div className="text-tertiary font-serif text-xl whitespace-nowrap pt-1">4제곱 법칙</div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">51.3% 노후 교량</h4>
                      <p className="text-sm text-primary/70 leading-relaxed">2030년 기준 전국 교량의 절반 이상이 설계 수명 임박</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(25,28,29,0.03)] hover:shadow-[0px_12px_32px_rgba(25,28,29,0.06)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary" />
              <h4 className="text-sm font-bold text-primary/60 mb-4">실제 단속 집행률</h4>
              <div className="font-serif text-5xl text-primary mb-4 group-hover:text-tertiary transition-colors">0.4<span className="text-3xl">%</span></div>
              <p className="text-sm text-primary/70 leading-relaxed">현장 단속 후 실제 분리운송 되는 차량의 비율</p>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(25,28,29,0.03)] hover:shadow-[0px_12px_32px_rgba(25,28,29,0.06)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary" />
              <h4 className="text-sm font-bold text-primary/60 mb-4">도로 파괴 가속도</h4>
              <div className="font-serif text-5xl text-tertiary mb-4">16<span className="text-3xl">x</span></div>
              <p className="text-sm text-primary/70 leading-relaxed">축하중 2배 증가 시 발생하는 도로 파손 가속도</p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(25,28,29,0.03)] hover:shadow-[0px_12px_32px_rgba(25,28,29,0.06)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
              <h4 className="text-sm font-bold text-primary/60 mb-4">노후 교량 비율</h4>
              <div className="font-serif text-5xl text-primary mb-4">51.3<span className="text-3xl">%</span></div>
              <p className="text-sm text-primary/70 leading-relaxed">2030년 도래할 전국 노후 교량의 비율</p>
            </div>
            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(25,28,29,0.03)] hover:shadow-[0px_12px_32px_rgba(25,28,29,0.06)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
              <h4 className="text-sm font-bold text-primary/60 mb-4">미부과 과태료 추산</h4>
              <div className="font-serif text-5xl text-primary mb-4">1.6<span className="text-3xl">조</span></div>
              <p className="text-sm text-primary/70 leading-relaxed">누적 미납 과태료 및 사회적 손실 추산액(₩)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary italic">정책 자료</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Doc Card 1 */}
            <a href="/report.html" className="group block bg-surface-container-low/50 backdrop-blur-md p-10 rounded-2xl border border-outline-variant/15 hover:bg-surface-container-lowest hover:shadow-[0px_12px_32px_rgba(25,28,29,0.06)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-tertiary/10 text-tertiary flex flex-col items-center justify-center mb-8 text-[10px] font-bold leading-tight group-hover:bg-tertiary group-hover:text-white transition-colors">
                  <span>보고</span>
                  <span>서 →</span>
                  <span>열람</span>
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">방치된 위협: 실태 보고서</h3>
                <p className="text-primary/70 leading-relaxed mb-8 flex-grow">
                  전국 주요 간선도로 및 지자체 관리 도로의 과적 차량 통행 실태를 정밀 분석한 최신 데이터 보고서입니다. 99.6%가 단속을 피하는 구조적 결함을 상세히 다룹니다.
                </p>
                <div className="flex items-center text-sm font-bold text-primary">
                  보고서 열람 <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>

            {/* Doc Card 2 */}
            <a href="/proposal.html" className="group block bg-surface-container-low/50 backdrop-blur-md p-10 rounded-2xl border border-outline-variant/15 hover:bg-surface-container-lowest hover:shadow-[0px_12px_32px_rgba(25,28,29,0.06)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex flex-col items-center justify-center mb-8 text-[10px] font-bold leading-tight group-hover:bg-primary group-hover:text-white transition-colors">
                  <span>제안</span>
                  <span>서 →</span>
                  <span>확인</span>
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">제도 개혁: 정책 제안서</h3>
                <p className="text-primary/70 leading-relaxed mb-8 flex-grow">
                  단속 효율성 제고와 회차 조치 의무화, 그리고 노후 인프라 유지보수 기금 마련을 위한 법적·제도적 개선안을 담고 있는 정책 패키지입니다.
                </p>
                <div className="flex items-center text-sm font-bold text-primary">
                  제안서 확인 <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>

            {/* Doc Card 3 */}
            <a href="/treatment.html" className="group block bg-surface-container-low/50 backdrop-blur-md p-10 rounded-2xl border border-outline-variant/15 hover:bg-surface-container-lowest hover:shadow-[0px_12px_32px_rgba(25,28,29,0.06)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex flex-col items-center justify-center mb-8 text-[10px] font-bold leading-tight group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span>자료</span>
                  <span>실 →</span>
                  <span>열람</span>
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">처우 개선: 정책 자료</h3>
                <p className="text-primary/70 leading-relaxed mb-8 flex-grow">
                  운행제한단속원의 처우 개선 및 근로 환경 개선을 위한 정책 자료입니다.
                </p>
                <div className="flex items-center text-sm font-bold text-primary">
                  자료 열람 <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-surface relative">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">운행제한단속원 현장 영상</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              실제 현장에서 운행제한단속원이 수행하는 업무의 중요성과 어려움을 영상으로 확인해보세요.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
            <div className="aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xNJoB4ihlN0"
                title="운행제한단속원 현장 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                운행제한단속원의 현장 업무
              </h3>
              <p className="text-primary/70 text-sm md:text-base">
                국민 안전을 위해 최전선에서 활동하는 운행제한단속원의 실제 업무 현장을 통해 그들의 역할과 중요성을 이해할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-low py-12 border-t border-outline-variant/15">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <a href="/" className="flex items-center mb-4">
                <img src="/logo.png" alt="민주노총 공공운수노조 국토교통부세종지부" className="h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
            </div>
            <div className="flex gap-6 text-sm text-primary/70 font-medium">
              <a href="#" className="hover:text-primary transition-colors">노조 연락처</a>
              <a href="#" className="hover:text-primary transition-colors">미디어</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
