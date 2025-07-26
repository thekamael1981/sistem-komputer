// Data soal kuis untuk setiap tingkat kelas
const quizData = {
    x: [
        {
            question: "Apa yang dimaksud dengan sistem komputer?",
            options: [
                "Kombinasi hardware, software, dan brainware yang bekerja sama",
                "Hanya perangkat keras komputer saja",
                "Program aplikasi yang berjalan di komputer",
                "Jaringan komputer yang saling terhubung"
            ],
            correct: 0,
            explanation: "Sistem komputer adalah kombinasi antara hardware (perangkat keras), software (perangkat lunak), dan brainware (pengguna) yang bekerja sama untuk memproses data."
        },
        {
            question: "Manakah yang termasuk komponen hardware?",
            options: [
                "Microsoft Word",
                "CPU dan RAM",
                "Sistem Operasi Windows",
                "Antivirus"
            ],
            correct: 1,
            explanation: "CPU dan RAM adalah contoh hardware (perangkat keras) yang dapat dilihat dan diraba secara fisik."
        },
        {
            question: "Apa fungsi utama dari software?",
            options: [
                "Menyimpan data secara permanen",
                "Memberikan instruksi kepada hardware",
                "Menghubungkan komputer ke internet",
                "Melindungi komputer dari kerusakan fisik"
            ],
            correct: 1,
            explanation: "Software berfungsi memberikan instruksi kepada hardware agar dapat menjalankan tugas-tugas tertentu."
        },
        {
            question: "Siapa yang dimaksud dengan brainware?",
            options: [
                "Perangkat keras komputer",
                "Program komputer",
                "Manusia yang mengoperasikan komputer",
                "Data yang tersimpan di komputer"
            ],
            correct: 2,
            explanation: "Brainware adalah manusia yang mengoperasikan dan mengelola sistem komputer, termasuk programmer, admin, dan pengguna."
        },
        {
            question: "Contoh perangkat input adalah?",
            options: [
                "Monitor",
                "Printer",
                "Speaker",
                "Keyboard"
            ],
            correct: 3,
            explanation: "Keyboard adalah perangkat input yang digunakan untuk memasukkan data berupa teks ke dalam komputer."
        },
        {
            question: "Apa perbedaan utama antara hardware dan software?",
            options: [
                "Hardware lebih mahal daripada software",
                "Hardware dapat diraba, software tidak dapat diraba",
                "Software lebih penting daripada hardware",
                "Hardware hanya untuk gaming, software untuk kerja"
            ],
            correct: 1,
            explanation: "Hardware adalah komponen fisik yang dapat diraba, sedangkan software adalah program yang tidak dapat diraba secara fisik."
        }
    ],
    xi: [
        {
            question: "Apa fungsi utama dari ALU (Arithmetic Logic Unit)?",
            options: [
                "Mengontrol alur eksekusi program",
                "Menyimpan data sementara",
                "Melakukan operasi aritmatika dan logika",
                "Menghubungkan CPU dengan memori"
            ],
            correct: 2,
            explanation: "ALU (Arithmetic Logic Unit) berfungsi melakukan operasi aritmatika (penjumlahan, pengurangan) dan operasi logika (AND, OR, NOT)."
        },
        {
            question: "Bagaimana urutan siklus instruksi CPU?",
            options: [
                "Execute → Fetch → Decode → Store",
                "Fetch → Decode → Execute → Store",
                "Decode → Fetch → Store → Execute",
                "Store → Execute → Fetch → Decode"
            ],
            correct: 1,
            explanation: "Siklus instruksi CPU yang benar adalah: Fetch (ambil instruksi), Decode (terjemahkan), Execute (jalankan), Store (simpan hasil)."
        },
        {
            question: "Apa karakteristik utama dari Cache Memory?",
            options: [
                "Kapasitas besar, kecepatan lambat",
                "Kapasitas kecil, kecepatan sangat tinggi",
                "Non-volatile dan permanen",
                "Hanya dapat dibaca, tidak dapat ditulis"
            ],
            correct: 1,
            explanation: "Cache Memory memiliki karakteristik kapasitas kecil tetapi kecepatan akses sangat tinggi, digunakan untuk menyimpan data yang sering diakses."
        },
        {
            question: "Apa perbedaan utama antara RAM dan ROM?",
            options: [
                "RAM lebih cepat, ROM lebih lambat",
                "RAM volatile, ROM non-volatile",
                "RAM untuk program, ROM untuk data",
                "RAM lebih mahal, ROM lebih murah"
            ],
            correct: 1,
            explanation: "RAM bersifat volatile (data hilang saat listrik mati), sedangkan ROM bersifat non-volatile (data tetap tersimpan meski listrik mati)."
        },
        {
            question: "Apa fungsi dari Control Unit (CU)?",
            options: [
                "Melakukan perhitungan matematika",
                "Menyimpan hasil operasi",
                "Mengontrol dan mengkoordinasi operasi CPU",
                "Menghubungkan CPU dengan perangkat eksternal"
            ],
            correct: 2,
            explanation: "Control Unit (CU) berfungsi mengontrol dan mengkoordinasi semua operasi CPU, termasuk mengatur alur eksekusi instruksi."
        },
        {
            question: "Dalam hierarki memori, urutan dari yang tercepat adalah?",
            options: [
                "Hard Disk → RAM → Cache → Register",
                "Register → Cache → RAM → Hard Disk",
                "Cache → Register → RAM → Hard Disk",
                "RAM → Cache → Register → Hard Disk"
            ],
            correct: 1,
            explanation: "Hierarki memori dari tercepat: Register → Cache → RAM → Storage (Hard Disk/SSD). Semakin cepat, semakin kecil kapasitasnya."
        }
    ],
    xii: [
        {
            question: "Apa fungsi utama dari sistem operasi?",
            options: [
                "Hanya menjalankan aplikasi games",
                "Mengelola sumber daya komputer dan menyediakan interface",
                "Hanya untuk keamanan komputer",
                "Menghubungkan komputer ke internet"
            ],
            correct: 1,
            explanation: "Sistem operasi berfungsi mengelola sumber daya komputer (CPU, memori, storage) dan menyediakan interface antara user dengan hardware."
        },
        {
            question: "Apa yang terjadi pertama kali saat komputer dinyalakan?",
            options: [
                "Sistem operasi langsung dimuat",
                "BIOS/UEFI melakukan POST (Power-On Self Test)",
                "Aplikasi antivirus dijalankan",
                "Koneksi internet diperiksa"
            ],
            correct: 1,
            explanation: "Saat komputer dinyalakan, BIOS/UEFI pertama kali melakukan POST (Power-On Self Test) untuk memeriksa hardware."
        },
        {
            question: "Apa itu virtualisasi?",
            options: [
                "Menggunakan komputer secara virtual saja",
                "Menjalankan beberapa OS pada satu komputer fisik",
                "Membuat backup data secara otomatis",
                "Menghubungkan komputer ke cloud"
            ],
            correct: 1,
            explanation: "Virtualisasi adalah teknologi yang memungkinkan satu komputer fisik menjalankan beberapa sistem operasi secara bersamaan."
        },
        {
            question: "Manakah yang merupakan contoh SaaS (Software as a Service)?",
            options: [
                "Amazon EC2",
                "Microsoft Azure Platform",
                "Google Docs",
                "VMware vSphere"
            ],
            correct: 2,
            explanation: "Google Docs adalah contoh SaaS karena aplikasi software diakses melalui internet tanpa perlu instalasi di komputer lokal."
        },
        {
            question: "Apa kepanjangan dari BIOS?",
            options: [
                "Basic Input Output System",
                "Binary Input Output System",
                "Basic Internal Operating System",
                "Binary Internal Operating System"
            ],
            correct: 0,
            explanation: "BIOS adalah Basic Input Output System, firmware yang mengatur komunikasi dasar antara sistem operasi dan hardware."
        },
        {
            question: "Dalam cloud computing, apa itu IaaS?",
            options: [
                "Internet as a Service",
                "Infrastructure as a Service",
                "Information as a Service",
                "Integration as a Service"
            ],
            correct: 1,
            explanation: "IaaS (Infrastructure as a Service) menyediakan infrastruktur komputasi dasar seperti virtual machines, storage, dan networking melalui cloud."
        },
        {
            question: "Apa perbedaan antara cold boot dan warm boot?",
            options: [
                "Cold boot lebih cepat dari warm boot",
                "Cold boot dari kondisi mati total, warm boot adalah restart",
                "Cold boot untuk musim dingin, warm boot untuk musim panas",
                "Tidak ada perbedaan"
            ],
            correct: 1,
            explanation: "Cold boot adalah booting dari kondisi komputer mati total, sedangkan warm boot adalah restart/reboot tanpa mematikan power sepenuhnya."
        }
    ]
};

// Data materi pembelajaran (opsional untuk ekspansi)
const materiData = {
    x: {
        title: "Konsep Dasar Sistem Komputer",
        topics: [
            "Pengertian Sistem Komputer",
            "Komponen Hardware",
            "Komponen Software", 
            "Komponen Brainware",
            "Interaksi Antar Komponen"
        ]
    },
    xi: {
        title: "Arsitektur Komputer",
        topics: [
            "Arsitektur CPU",
            "Siklus Instruksi",
            "Hierarki Memori",
            "Input-Process-Output",
            "Bus Sistem"
        ]
    },
    xii: {
        title: "Sistem Operasi & Teknologi Modern",
        topics: [
            "Fungsi Sistem Operasi",
            "Proses Booting",
            "BIOS/UEFI",
            "Virtualisasi",
            "Cloud Computing"
        ]
    }
};
