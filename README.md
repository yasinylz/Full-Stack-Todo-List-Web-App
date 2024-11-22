# Full-Stack-Todo-List-Web-App

🚀 Kullanım Kılavuzu: Full-Stack-Todo-List-Web-App
1️⃣ Backend (API ve GraphQL Yapılandırması)
a. REST API CRUD İşlemleri
Backend, tüm görev işlemleri için RESTful hizmetler sunar.

🔧 Endpointler:

GET /tasks — Tüm görevleri listeler.
POST /tasks — Yeni bir görev ekler.
PUT /tasks/:id — Belirli bir görevi günceller.
DELETE /tasks/:id — Belirli bir görevi siler.
🎯 Örnek Kullanım:
GET http://localhost:5000/tasks  # Tüm görevleri alır.
POST http://localhost:5000/tasks  # Yeni bir görev ekler.
b. GraphQL API
GraphQL, daha esnek ve detaylı veri sorguları için entegre edilmiştir.

🔧 Sorgular:

Görevleri Listele:
query {
  tasks {
    id
    title
    completed
  }
}
Yeni Görev Ekle:
mutation {
  addTask(title: "Yeni Görev", completed: false) {
    id
    title
  }
}
🎯 Örnek Kullanım:
GraphQL Playground ya da Postman kullanarak REST yerine GraphQL sorguları yapabilirsiniz.

2️⃣ Frontend (React ile Kullanıcı Arayüzü)
a. Genel Özellikler
Görev ekleme, düzenleme ve silme işlemleri.
Görevlerin durumunu tamamlama/aktif olarak değiştirme.
Kullanıcı dostu, modern ve duyarlı tasarım.
b. Teknolojiler ve Kütüphaneler
React: Kullanıcı arayüzü.
Axios: REST API istekleri için.
Apollo Client: GraphQL sorguları ve mutasyonları için.
Material-UI: Modern arayüz tasarımı.
c. Bileşenler:
1️⃣ TaskList: Tüm görevlerin listelendiği ana bileşen.
2️⃣ TaskItem: Tek bir görevi temsil eder.
3️⃣ TaskForm: Yeni görev eklemek veya mevcut bir görevi düzenlemek için form.

🎯 Kullanıcı Akışı:

Görevlerinizi ana ekranda görüntüleyin.
"Yeni Görev" butonuna tıklayarak yeni bir görev ekleyin.
Görevlerinizi düzenlemek için düzenleme ikonuna, silmek için çöp kutusu ikonuna tıklayın.
3️⃣ Kullanım Adımları
a. Backend’i Başlatma
1️⃣ Proje klasörüne gidin ve aşağıdaki komutla bağımlılıkları yükleyin:
npm install
2️⃣ Server'ı başlatın:
nodemon index.js
Varsayılan Port: http://localhost:5000

b. Frontend’i Başlatma
1️⃣ React projesine gidin ve bağımlılıkları yükleyin:
npm install
2️⃣ React uygulamasını başlatın:
npm  run start
Varsayılan Port: http://localhost:3000

4️⃣ Önemli Dosya ve Yapı
Backend: /server
/routes/tasks.js: REST API endpoint’leri.
/schema.graphql: GraphQL şeması.
/models/taskModel.js: Görevlerin MongoDB ile yönetimi.
Frontend: /client
/components/TaskList.js: Görevlerin listelendiği ana bileşen.
/components/TaskForm.js: Görev ekleme ve düzenleme formu.
/services/api.js: REST ve GraphQL isteklerini yöneten dosya.
5️⃣ Dinamik Özellikler
1️⃣ Filtreleme ve Arama:
Görevleri durumlarına (tamamlandı/aktif) göre filtreleyebilirsiniz.

2️⃣ Gerçek Zamanlı Güncellemeler:
Görev eklendiğinde, düzenlendiğinde veya silindiğinde liste otomatik güncellenir.

3️⃣ GraphQL ve REST’in Birleşimi:
Backend’de hem REST hem de GraphQL ile veri alımı arasında geçiş yapabilirsiniz.

6️⃣ Proje Görünümü (UI Detayları)
Ana Ekran: Görevlerinizi görüntülediğiniz liste.
Yeni Görev Ekle: Üst köşedeki buton.
Görev Durumları: Tamamlanmış görevler gri renkle işaretlenir.
Responsive Tasarım: Hem masaüstü hem mobil cihazlarda kullanıcı dostu görünüm.



