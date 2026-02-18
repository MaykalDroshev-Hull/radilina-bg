import Image from 'next/image';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import { AnimatedSection, AnimatedContainer, AnimatedItem } from '../lib/animations';

export default function AboutUs() {
  return (
    <AnimatedSection id="about" className="py-12 md:py-16 lg:py-20">
      <AnimatedContainer className="px-6 md:px-10 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
          {/* Left side */}
          <AnimatedItem className="flex items-center gap-2 md:gap-3">
            <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex-shrink-0"></span>
            <span className="text-base md:text-lg lg:text-xl text-gray-400 font-body">За нас</span>
          </AnimatedItem>
          
          {/* Right side */}
          <AnimatedItem className="md:max-w-[55%] lg:max-w-[50%] text-left md:text-right text-xl md:text-2xl lg:text-4xl">
            <span className="font-semibold text-white font-headline leading-tight">
              Традиция, страст и занаят,
            </span>
            <span className="text-gray-500 font-headline leading-tight">
              {" "}предавани от поколение на поколение
            </span>
          </AnimatedItem>
        </div>

        {/* Main Content - Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
          {/* Image */}
          <AnimatedItem>
            <div className="relative aspect-[3/2] sm:aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl overflow-hidden shadow-lg group">
              <Image
                src="/branding/Radilina branding_AP-71.avif"
                alt="Радилина керамика - семейна традиция"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </AnimatedItem>

          {/* Text Content */}
          <AnimatedItem>
            <div className="flex flex-col justify-center h-full space-y-6 md:space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-5 font-headline leading-tight">
                  История на Радилина
                </h3>
                <div className="space-y-4 md:space-y-5 text-base md:text-lg text-gray-400 font-body leading-relaxed">
                  <p>
                    С над 46 години опит в керамичното производство, ние създаваме ръчно изработена троянска керамика с внимание към всеки детайл. Ние сме семейна фирма, основана от Пламен и Таня Илиеви, а днес дъщерите им – Радина и Илина – работят рамо до рамо с тях, продължавайки семейната традиция и любовта към занаята. Всички изделия се създават изцяло ръчно – от оформянето на грънчарското колело до финалните детайли, без използване на машинно производство. Използваме само сертифицирани и висококачествени материали.
                  </p>
                  <p>
                    Нашата керамика се предлага и цени от клиенти по целия свят, а майсторството ни е представяно в различни телевизионни предавания, посветени на българските традиции и занаяти. Предлагаме битова и сувенирна троянска керамика, която носи уют, традиция и автентична атмосфера във Вашия дом. Богатият ни асортимент и доказаното качество са гаранция за дълготрайност и удовлетворение.
                  </p>
                  <p>
                    Производството на нашата керамика е изцяло ръчен процес, съхранил традициите на троянския занаят през поколенията. Всяко изделие се оформя на грънчарско колело с внимание към детайла, търпение и майсторство, натрупано през годините.
                  </p>
                  <p>
                    Използваме само сертифицирани и висококачествени материали, които гарантират здравина, безопасност и дълготрайност на изделията. Всички етапи – от оформянето и сушенето, през декорацията и глазурата, до изпичането – се извършват ръчно, без използване на машинно производство.
                  </p>
                  <p>
                    Благодарение на този подход всяко изделие е уникално и носи своя характер, топлина и автентичност. Именно ръчната изработка прави нашата керамика не просто предмет, а част от българската традиция и домашния уют.
                  </p>
                </div>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F4A7A7] mb-2 font-headline">46+</div>
                  <div className="text-sm md:text-base text-gray-400 font-body">Години опит</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F4A7A7] mb-2 font-headline">100%</div>
                  <div className="text-sm md:text-base text-gray-400 font-body">Ръчна изработка</div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* Production Section */}
        <AnimatedItem>
          <div className="mb-8 md:mb-10 lg:mb-12 bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 md:mb-8 font-headline">
              Производство
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Битова керамика */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4A7A7]/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#F4A7A7]" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white font-headline">Битова керамика</h4>
                </div>
                <ul className="space-y-2 text-sm md:text-base text-gray-400 font-body">
                  <li>• Бурканчета</li>
                  <li>• Чайници</li>
                  <li>• Чаши</li>
                  <li>• Чинии</li>
                  <li>• Гювечета</li>
                  <li>• Халби</li>
                  <li>• Купи</li>
                  <li>• Пахари</li>
                  <li>• Панички</li>
                  <li>• Солнички на дърво</li>
                  <li>• Тави</li>
                  <li>• Средна тава</li>
                  <li>• Тава с капак</li>
                </ul>
              </div>

              {/* Сувенирна керамика */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#CFE6D7]/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[#CFE6D7]" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white font-headline">Сувенирна керамика</h4>
                </div>
                <ul className="space-y-2 text-sm md:text-base text-gray-400 font-body">
                  <li>• Часовници</li>
                  <li>• Панички</li>
                  <li>• Свещници</li>
                  <li>• Пепелници</li>
                  <li>• Градински пепелници</li>
                  <li>• Пепелник къщичка</li>
                  <li>• Висулки</li>
                  <li>• Камбанки</li>
                  <li>• Магнитки</li>
                  <li>• Салфетници</li>
                  <li>• Пахари</li>
                  <li>• Солнички</li>
                </ul>
              </div>

              {/* Сервизи */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C1AFA3]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#C1AFA3]" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white font-headline">Сервизи</h4>
                </div>
                <ul className="space-y-2 text-sm md:text-base text-gray-400 font-body">
                  <li>• Сервиз за вино</li>
                  <li>• Сервиз за ракия</li>
                  <li>• Кратуни</li>
                  <li>• Оливарник и менче</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedItem>

        {/* Values Section */}
        <AnimatedItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] p-6 md:p-7 lg:p-8 border border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F4A7A7]/10 flex items-center justify-center mb-4 md:mb-5">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-[#F4A7A7]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 font-headline">Ръчна изработка</h4>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                Всяко изделие е създадено изцяло на ръка с грънчарско колело
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] p-6 md:p-7 lg:p-8 border border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#CFE6D7]/10 flex items-center justify-center mb-4 md:mb-5">
                <Award className="w-6 h-6 md:w-7 md:h-7 text-[#CFE6D7]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 font-headline">Сертифицирани материали</h4>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                Използваме само готови сертифицирани материали за качество
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gradient-to-br from-[#1a1614] to-[#1a1614] rounded-2xl md:rounded-[1.75rem] p-6 md:p-7 lg:p-8 border border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#C1AFA3]/10 flex items-center justify-center mb-4 md:mb-5">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-[#C1AFA3]" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3 font-headline">46 години опит</h4>
              <p className="text-sm md:text-base text-gray-400 font-body leading-relaxed">
                Богат асортимент и доказано качество на артикулите
              </p>
            </div>
          </div>
        </AnimatedItem>
      </AnimatedContainer>
    </AnimatedSection>
  );
}
