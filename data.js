// example data: news (image, title, summary, date), topic(sub topics)
const news = [
  {
    image: "./public/New.png",
    title: "Bất động sản công nghiệp tiếp tục đà tăng trưởng",
    summary:
      "Thị trường bất động sản công nghiệp những tháng đầu năm 2024 tiếp tục có sự phát triển ổn định trong nhu cầu mua và thuê với tỷ lệ lấp đầy cao.",
    content: `Thị trường bất động sản công nghiệp cả nước nói chung và Nam Bộ nói riêng những tháng đầu năm 2024 tiếp tục có sự phát triển ổn định trong nhu cầu mua và thuê với tỷ lệ lấp đầy cao. Một trong những nguyên nhân chính là do xuất nhập khẩu của Việt Nam đang khởi sắc, dòng vốn đầu tư nước ngoài chảy vào Việt Nam tăng trở lại và dự kiến thị trường bất động sản công nghiệp sẽ tiếp tục duy trì xu hướng phát triển trong nhiều năm tới.
            Phát triển ổn định

Theo CBRE Việt Nam, thị trường bất động sản công nghiệp Việt Nam duy trì hoạt động tích cực trong quý đầu tiên của năm 2024. Giá đất công nghiệp tại các thị trường cấp 1 khu vực Nam Bộ giữ mức 189 USD/m2/kỳ hạn còn lại, ổn định so với quý trước và tăng 2,4% so với cùng kỳ năm ngoái.

Tuy nhiên, do quỹ đất công nghiệp tương đối hạn chế, tỷ lệ lấp đầy tại thị trường Nam Bộ ổn định ở mức 92% và diện tích hấp thụ chỉ đạt hơn 20 ha. Các nhà sản xuất trong và ngoài nước có xu hướng mở rộng ra các thị trường cấp 2 như Bà Rịa - Vũng Tàu và Tây Ninh, nơi quỹ đất công nghiệp còn tương đối dồi dào cùng với giá thuê cạnh tranh hơn so với các thị trường cấp 1.

Riêng thị trường kho xưởng miền Nam, sau giai đoạn tăng trưởng mạnh đã không có nguồn cung mới trong quý I/2024, các dự án mới đều đang xây dựng và hoàn thiện. Tuy nhiên, điều này cũng tác động đến hoạt động của kho xưởng xây sẵn đang hoạt động, tỷ lệ lấp đầy của kho xưởng xây sẵn ước tăng 2 điểm phần trăm so với quý trước, tỷ lệ lấp đầy đạt 57% đối với nhà kho và 87% đối với nhà xưởng.

Theo các chuyên gia, ngoài những nhà sản xuất điện tử, ô tô và phụ kiện, khách thuê từ những ngành mới trong lĩnh vực công nghệ cao như sản xuất xe điện, bán dẫn hay vật liệu xanh quan tâm tới Việt Nam. Với sự định hướng của nhiều tỉnh, thành và sự quan tâm của doanh nghiệp ngày càng tăng vào các ngành công nghiệp công nghệ cao sẽ càng thúc đẩy nhu cầu trong tương lai.

Phó trưởng Ban Nghiên cứu thị trường và tư vấn xúc tiến đầu tư (Hội Môi giới Bất động sản Việt Nam - VARS) Phạm Thị Miền cho rằng, năm 2024 bất động sản công nghiệp vẫn được xem là phân khúc tăng trưởng tốt. Dòng vốn đầu tư trực tiếp nước ngoài (FDI) vẫn tích cực với lợi thế từ chính sách ưu đãi thuế. Nhiều dự án đầu tư khu công nghiệp mới được chấp thuận chủ trương đầu tư, bắt đầu triển khai các giai đoạn tiếp theo.

Theo đó, thị trường bất động sản công nghiệp Việt Nam không chỉ chào đón các "đại bàng", các tập đoàn đa quốc gia mà còn đi kèm với đó là rất nhiều doanh nghiệp với các quy mô khác nhau trong chuỗi cung ứng sản xuất thông minh toàn cầu. Do đó, nhu cầu về về đất công nghiệp, nhà xưởng, kho bãi, logistics ngày càng tăng, tạo sức nóng của bất động sản công nghiệp.

Các chuyên gia nhận định, bất động sản công nghiệp vẫn tăng trưởng bền vững là do kinh tế Việt Nam có sự tăng trưởng, thu hút các nhà đầu tư trong và ngoài nước quan tâm đầu tư; chính trị - xã hội ổn định, việc cải thiện môi trường đầu tư, chính sách đối với đầu tư nước ngoài của Việt Nam ngày càng phù hợp,… Ngoài ra, Việt Nam cũng chú trọng đầu tư cơ sở hạ tầng mới vào bất động sản các khu công nghiệp; đồng thời, đầu tư và đưa vào sử dụng hàng nghìn km đường cao tốc liên vùng, giúp thúc đẩy sự giao lưu kinh tế - văn hóa thuận tiện giữa các vùng trong nước.

Bất động sản công nghiệp tiếp tục đà tăng trưởng - Ảnh 1.
Nguồn cung bất động sản công nghiệp đang chứng kiến sự tăng trưởng ở cả hai miền Nam - Bắc

Duy trì đà tăng trưởng

Nguồn cung bất động sản công nghiệp đang chứng kiến sự tăng trưởng ở cả hai miền Nam - Bắc. Nhu cầu bất động sản công nghiệp vẫn còn rất lớn, đặc biệt là nhu cầu về các kho nhiều tầng đa dụng và nhà xưởng xây sẵn.

Thực tế, hoạt động sản xuất tại Việt Nam khởi sắc trong những tháng đầu năm 2024, cải thiện niềm tin vào triển vọng cho năm tới và các nhà sản xuất hiện đẩy mạnh tuyển dụng. Đầu tư trực tiếp nước ngoài tiếp tục được bơm vào lĩnh vực sản xuất và bất động sản tại Việt Nam, mang lại tiềm năng tích cực lâu dài cho phân khúc bất động sản công nghiệp. Sự cạnh tranh thu hút FDI giữa các tỉnh dự báo sẽ cao hơn trong thời gian tới.

Phó Giáo sư, Tiến sĩ Đinh Trọng Thịnh (Học viện Tài chính) cho rằng, Việt Nam cần phải có quỹ đất sạch để đáp ứng nhu cầu, đồng thời có quy hoạch tổng thể của cả nước, của từng địa phương, từng lĩnh vực để đưa ra chính sách ưu tiên phù hợp. Quy hoạch này cũng cần có tầm nhìn và có tính ổn định trong khoảng thời gian dài để doanh nghiệp yên tâm phát triển.

Theo Hội Môi giới Bất động sản Việt Nam, cả nước dự kiến sẽ quy hoạch tăng thêm 115.000 ha đất dành cho khu công nghiệp trong mười năm tới với khoảng 558 khu công nghiệp trên cả nước, gấp gần 1,5 lần so với số lượng hiện nay. Bên cạnh đó, quy hoạch nhiều tỉnh, thành giai đoạn 2021 - 2030 cũng sẽ giải quyết phần nào các vướng mắc liên quan tới thủ tục pháp lý cho các khu công nghiệp. Những yếu tố này sẽ giúp bất động sản khu công nghiệp thời gian tới tiếp tục duy trì vị thế và tiếp tục tăng trưởng.

Chủ tịch Hội Môi giới Bất động sản Việt Nam Nguyễn Văn Đính cho rằng, Việt Nam sẽ tiếp tục là quốc gia được nhiều nhà đầu tư nước ngoài lựa chọn. Các nhà đầu tư đến từ Singapore, Trung Quốc, Hàn Quốc, Mỹ… sẽ là khách hàng tiềm năng của bất động sản công nghiệp Việt Nam. Điều này sẽ giúp cho vốn FDI trong các khu công nghiệp, khu kinh tế tiếp tục duy trì xu hướng tăng. Dự kiến trong năm 2024, vốn FDI trong các khu công nghiệp, khu kinh tế sẽ chiếm khoảng 45% tổng vốn FDI đăng ký tăng thêm của cả nước.

Giám đốc cấp cao CBRE chi nhánh Hà Nội, bà Nguyễn Hoài An dự báo ba năm tới, giá thuê đất công nghiệp sẽ tăng 3 - 9%/năm ở miền Bắc và tăng 3 - 7%/năm ở miền Nam, giá thuê của nhà kho/nhà xưởng xây sẵn tăng nhẹ từ 1- 4%/năm. Đặc biệt, khi Việt Nam tiếp tục nâng cấp quan hệ ngoại giao với nhiều nền kinh tế lớn trong giai đoạn vừa qua, nền kinh tế nói chung và ngành sản xuất cũng như bất động sản khu công nghiệp Việt Nam dự kiến sẽ hưởng lợi và tiếp tục xu hướng phát triển.`,
    date: "2022-01-01",
  },
  {
    image: "./public/New.png",
    title: "Tin tức 2",
    summary: "Tóm tắt tin tức 2.",
    content: "Nội dung tin tức 2.",
    date: "2022-02-01",
  },
  {
    image: "./public/New.png",
    title: "Tin tức 3",
    summary: "Tóm tắt tin tức 3.",
    content: "Nội dung tin tức 3.",
    date: "2022-03-01",
  },
  {
    image: "./public/New.png",
    title: "Tin tức 4",
    summary: "Tóm tắt tin tức 4.",
    content: "Nội dung tin tức 4.",
    date: "2022-04-01",
  },
  {
    image: "./public/New.png",
    title: "Tin tức 5",
    summary: "Tóm tắt tin tức 5.",
    content: "Nội dung tin tức 5.",
    date: "2022-05-01",
  },
  {
    image: "./public/New.png",
    title: "Tin tức 6",
    summary: "Tóm tắt tin tức 6.",
    content: "Nội dung tin tức 6.",
    date: "2022-06-01",
  },
  {
    image: "./public/New.png",
    title: "Tin tức 7",
    summary: "Tóm tắt tin tức 7.",
    content: "Nội dung tin tức 7.",
    date: "2022-07-01",
  },
];

const recommended = [
  "Đề nghị kỷ luật hàng loạt quan chức trong vụ B5 Cầu Diễn",
  "PXT ký hợp đồng trên 900 tỷ đồng với PVX",
  "Lần đầu ra quả, cây mít khiến gia chủ đau đầu vì... điều này",
  "Lý giải nguyên nhân nhà đầu tư thường gặp rủi ro và phải mạo hiểm khi đầu tư chứng khoán",
  "Tỷ phú Jeff Bezos chi 80 triệu USD mua cùng lúc 3 căn hộ",
  "Thanh niên thành thị đứng đầu bảng... thất nghiệp",
  "“Chúng tôi đã có kế hoạch phát triển LDG Group trong 20 năm tới”",
  "Kết cục buồn của AR-15 sau chiến tranh Việt Nam",
];
const topics = {
  topic1: ["subtopic1", "subtopic2"],
  topic2: ["subtopic3", "subtopic4"],
  topic3: ["subtopic5", "subtopic6"],
  topic4: ["subtopic7", "subtopic8"],
  topic5: ["subtopic9", "subtopic10"],
  topic6: ["subtopic11", "subtopic12"],
  topic7: ["subtopic13", "subtopic14"],
  topic8: ["subtopic15", "subtopic16"],
  topic9: ["subtopic17", "subtopic18"],
  topic10: ["subtopic19", "subtopic20"],
};

export { news, recommended, topics };
