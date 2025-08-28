
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'yeni-sezon-trendi-teknoloji-ve-moda',
    title: 'Yeni Sezon Trendi: Teknoloji ve Moda Buluşması',
    excerpt: 'Giyilebilir teknolojiden akıllı kumaşlara, 2024 moda trendleri teknolojiyle yeniden şekilleniyor. Gardırobunuzu geleceğe hazırlayın.',
    content: `
      <p>Moda ve teknoloji arasındaki çizgi her zamankinden daha ince. Bu sezon, podyumlar sadece cesur renkler ve kesimlerle değil, aynı zamanda yenilikçi teknolojilerle de aydınlandı. Akıllı saatlerden daha fazlasını konuşuyoruz; artık kumaşlar akıllanıyor, giysiler fonksiyon kazanıyor.</p>
      <h3 class="font-bold text-xl mt-6 mb-2">Akıllı Kumaşlar Devrimi</h3>
      <p>Kendi kendini temizleyen, sıcaklığa göre renk değiştiren veya vücut ısınızı düzenleyen kumaşlar artık bilim kurgu filmlerinden fırlamış gibi değil. Özellikle spor giyimde başlayan bu akım, günlük giyime de sızmış durumda. Örneğin, yeni nesil ceketler, ortam sıcaklığına göre sizi sıcak tutuyor veya serinletiyor.</p>
      <blockquote class="border-l-4 border-primary pl-4 italic my-4">
        "Geleceğin modası, sadece nasıl göründüğümüzle değil, giysilerimizin bizim için ne yaptığıyla da ilgili olacak."
      </blockquote>
      <h3 class="font-bold text-xl mt-6 mb-2">Giyilebilir Teknolojinin Yükselişi</h3>
      <p>Estetik ve fonksiyonu bir araya getiren akıllı takılar, gözlükler ve hatta yüzükler, stil sahibi teknoloji meraklılarının yeni favorisi. Bu cihazlar sadece bildirimlerinizi göstermekle kalmıyor, aynı zamanda sağlık verilerinizi takip ediyor ve günlük hayatınızı kolaylaştırıyor.</p>
      <p>Sonuç olarak, bu sezon gardırobunuzu güncellerken sadece renklere ve desenlere değil, aynı zamanda kıyafetlerin sunduğu teknolojik özelliklere de göz atmayı unutmayın. Stil ve fonksiyonun bu mükemmel birleşimi, geleceğin modasını bugünden yaşamamızı sağlıyor.</p>
    `,
    image: 'https://picsum.photos/seed/blog1/1200/800',
    date: '2024-05-15',
    author: 'Moda Editörü',
    category: 'Moda',
  },
  {
    slug: 'ev-ofisiniz-icin-5-ergonomi-ipuclari',
    title: 'Ev Ofisiniz İçin 5 Ergonomi İpucu',
    excerpt: 'Uzun saatler boyunca rahat ve verimli çalışmak için ev ofisinizi nasıl daha ergonomik hale getirebileceğinizi keşfedin.',
    content: `
      <p>Evden çalışma düzeni hayatımızın bir parçası haline geldi. Ancak mutfak masasından veya koltuktan çalışmak, uzun vadede sağlığımız için riskler taşıyabilir. İşte daha sağlıklı ve verimli bir çalışma alanı yaratmak için 5 basit ergonomi ipucu.</p>
      <ol class="list-decimal list-inside space-y-2 my-4">
        <li><strong>Doğru Sandalyeyi Seçin:</strong> Belinizi destekleyen, yüksekliği ayarlanabilir bir ofis sandalyesi en önemli yatırımınızdır. Ayaklarınızın yere tam basmasına ve dizlerinizin 90 derece açıda olmasına dikkat edin.</li>
        <li><strong>Monitör Yüksekliği:</strong> Ekranınızın üst kenarı, göz hizanızda veya biraz altında olmalıdır. Bu, boyun ve omuz gerginliğini önler. Gerekirse bir kitap veya monitör standı kullanın.</li>
        <li><strong>Klavye ve Fare Pozisyonu:</strong> Klavyeniz ve fareniz, dirsekleriniz yaklaşık 90 derece açıda olacak şekilde konumlandırılmalıdır. Bileklerinizin düz durmasına özen gösterin.</li>
        <li><strong>Mola Verin ve Hareket Edin:</strong> Her saat başı en az 5-10 dakika mola vererek ayağa kalkın, esneme hareketleri yapın veya kısa bir yürüyüşe çıkın.</li>
        <li><strong>Gözlerinizi Koruyun:</strong> 20-20-20 kuralını uygulayın: Her 20 dakikada bir, 20 saniye boyunca en az 20 fit (yaklaşık 6 metre) uzağa bakın. Bu, göz yorgunluğunu azaltır.</li>
      </ol>
      <p>Bu basit adımlarla, ev ofisinizi daha sağlıklı, konforlu ve verimli bir alana dönüştürebilirsiniz. Unutmayın, küçük değişiklikler büyük farklar yaratabilir!</p>
    `,
    image: 'https://picsum.photos/seed/blog2/1200/800',
    date: '2024-05-10',
    author: 'Sağlık Uzmanı',
    category: 'Yaşam Tarzı',
  },
   {
    slug: 'mukemmel-kahveyi-demleme-sanati',
    title: 'Mükemmel Kahveyi Demleme Sanatı',
    excerpt: 'Evde barista kalitesinde kahve yapmak düşündüğünüzden daha kolay. İhtiyacınız olan tek şey doğru ekipman ve birkaç temel teknik.',
    content: `
      <p>Güne harika bir fincan kahveyle başlamak gibisi yoktur. Ancak her zaman dışarıdan kahve almak yerine, evde kendi mükemmel kahvenizi demleyebilirsiniz. İşte size yol gösterecek bazı adımlar.</p>
      <h3 class="font-bold text-xl mt-6 mb-2">Taze Çekirdek Kullanın</h3>
      <p>Her şeyden önce, kaliteli ve taze kavrulmuş kahve çekirdekleri kullanın. Mümkünse, kahvenizi demlemeden hemen önce kendiniz öğütün. Bu, aromaların en yoğun olduğu anı yakalamanızı sağlar.</p>
      <h3 class="font-bold text-xl mt-6 mb-2">Su Sıcaklığı ve Oranı</h3>
      <p>İdeal su sıcaklığı 90-96°C arasındadır. Su kaynadıktan sonra yaklaşık 30 saniye beklemek yeterlidir. Genel bir kural olarak, her 1 gram kahve için 15-18 ml su kullanabilirsiniz. Bu oranı damak zevkinize göre ayarlayabilirsiniz.</p>
      <blockquote class="border-l-4 border-primary pl-4 italic my-4">
        "İyi bir kahve, doğru dengeyi bulma sanatıdır: doğru çekirdek, doğru su, doğru zaman."
      </blockquote>
      <h3 class="font-bold text-xl mt-6 mb-2">Demleme Yönteminizi Seçin</h3>
      <p>French press, V60, AeroPress veya basit bir filtre kahve makinesi... Her yöntemin kendine has bir karakteri vardır. Yönteminize uygun demleme süresine ve öğütme boyutuna dikkat edin. Örneğin, French press için daha kalın, V60 için daha ince öğütülmüş kahve gerekir.</p>
      <p>Denemekten korkmayın! Farklı çekirdekleri, farklı demleme sürelerini deneyerek kendi mükemmel fincanınızı keşfedin. Afiyet olsun!</p>
    `,
    image: 'https://picsum.photos/seed/blog3/1200/800',
    date: '2024-05-02',
    author: 'Barista',
    category: 'Gurme',
  },
];

interface GetBlogPostsOptions {
  limit?: number;
}

export function getBlogPosts(options: GetBlogPostsOptions = {}): BlogPost[] {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  if (options.limit) {
    return sortedPosts.slice(0, options.limit);
  }

  return sortedPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
