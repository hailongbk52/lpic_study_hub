// LPIC-1 Question Bank
// Total: 240
// Has Vietnamese: questionVi + optionsVi

const TOPICS = [
  {
    "id": 1,
    "name": {
      "en": "LPIC-1 Exam 101 (101-500)",
      "vi": "LPIC-1 Kỳ thi 101 (101-500)"
    },
    "icon": "🐧",
    "description": {
      "en": "System Architecture, Linux Installation, GNU & Unix Commands, Devices, Filesystems, Shell & Scripting",
      "vi": "Kiến trúc hệ thống, Cài đặt Linux, Lệnh GNU & Unix, Thiết bị, Filesystems, Shell & Scripting"
    },
    "color": "#00C9A7"
  },
  {
    "id": 2,
    "name": {
      "en": "LPIC-1 Exam 102 (102-500)",
      "vi": "LPIC-1 Kỳ thi 102 (102-500)"
    },
    "icon": "🖥️",
    "description": {
      "en": "Shells & Scripting, Interfaces & Desktops, Administrative Tasks, Essential System Services, Networking, Security",
      "vi": "Shells & Scripting, Giao diện & Màn hình, Tác vụ quản trị, Dịch vụ hệ thống, Mạng, Bảo mật"
    },
    "color": "#6C63FF"
  }
];

const QUESTIONS = [
  {
    "id": 1,
    "topicId": 1,
    "question": "Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?",
    "options": [
      "XFS",
      "VFAT",
      "ext2",
      "ext3",
      "ext4"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Khi chạy mkfs không có tham số nào khác, nó tạo filesystem ext2 theo mặc định. ext2 là filesystem Linux truyền thống, không có journaling.",
      "vi": "Khi chạy mkfs không có tham số nào khác, nó tạo filesystem ext2 theo mặc định. ext2 là filesystem Linux truyền thống, không có journaling.\n🔑 Keywords: mkfs | ext2 | default filesystem | no journaling"
    },
    "questionVi": "Loại hệ thống tệp nào được tạo bởi mkfs khi nó được thực thi chỉ với tên thiết bị khối và không có bất kỳ tham số bổ sung nào?",
    "optionsVi": [
      "XFS",
      "VFAT",
      "ext2",
      "ext3",
      "ext4"
    ]
  },
  {
    "id": 2,
    "topicId": 1,
    "question": "Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group and are not accessible at all for everyone else?",
    "options": [
      "0750",
      "0027",
      "0036",
      "7640",
      "0029"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "umask 0027 nghĩa là: owner có toàn quyền (rwx=7), group chỉ đọc+thực thi (r-x=5), others không có gì (---=0). Công thức: quyền tối đa (777) trừ umask (027) = 750 cho thư mục.",
      "vi": "umask 0027 nghĩa là: owner có toàn quyền (rwx=7), group chỉ đọc+thực thi (r-x=5), others không có gì (---=0). Công thức: quyền tối đa (777) trừ umask (027) = 750 cho thư mục.\n🔑 Keywords: umask | 0027 | directory permissions | 750"
    },
    "questionVi": "Giá trị umask nào đảm bảo rằng các thư mục mới có thể được đọc, viết và liệt kê bởi người dùng sở hữu của họ, được đọc và liệt kê bởi nhóm sở hữu của họ và những người khác hoàn toàn không thể truy cập được?",
    "optionsVi": [
      "0750",
      "0027",
      "0036",
      "7640",
      "0029"
    ]
  },
  {
    "id": 3,
    "topicId": 1,
    "question": "Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?",
    "options": [
      "tune2fs -d 200 /dev/sda1",
      "tune2fs -i 200 /dev/sda1",
      "tune2fs -c 200 /dev/sda1",
      "tune2fs -n 200 /dev/sda1",
      "tune2fs --days 200 /dev/sda1"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "tune2fs -i đặt khoảng thời gian (interval) giữa các lần fsck. '-i 200' = 200 ngày. Tham số -d không tồn tại, -c là số lần mount, không phải ngày.",
      "vi": "tune2fs -i đặt khoảng thời gian (interval) giữa các lần fsck. '-i 200' = 200 ngày. Tham số -d không tồn tại, -c là số lần mount, không phải ngày.\n🔑 Keywords: tune2fs | -i interval | fsck | ext3"
    },
    "questionVi": "Lệnh nào sau đây thay đổi số ngày trước khi hệ thống tệp ext3 trên /dev/sda1 phải thực hiện kiểm tra toàn bộ hệ thống tệp trong khi khởi động?",
    "optionsVi": [
      "tune2fs -d 200/dev/sda1",
      "tune2fs -i 200/dev/sda1",
      "tune2fs -c 200/dev/sda1",
      "tune2fs -n 200/dev/sda1",
      "tune2fs --ngày 200/dev/sda1"
    ]
  },
  {
    "id": 4,
    "topicId": 1,
    "question": "Which is the default percentage of reserved space for the root user on new ext4 filesystems?",
    "options": [
      "10%",
      "3%",
      "15%",
      "0%",
      "5%"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Theo mặc định, mkfs.ext4 dành 5% dung lượng cho root user (reserved blocks). Giá trị này tránh filesystem bị đầy hoàn toàn khi user thường dùng hết chỗ.",
      "vi": "Theo mặc định, mkfs.ext4 dành 5% dung lượng cho root user (reserved blocks). Giá trị này tránh filesystem bị đầy hoàn toàn khi user thường dùng hết chỗ.\n🔑 Keywords: ext4 | reserved blocks | 5% | root user | tune2fs -m"
    },
    "questionVi": "Tỷ lệ phần trăm dung lượng dành riêng mặc định cho người dùng root trên hệ thống tệp ext4 mới là bao nhiêu?",
    "optionsVi": [
      "10%",
      "3%",
      "15%",
      "0%",
      "5%"
    ]
  },
  {
    "id": 5,
    "topicId": 1,
    "question": "Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?",
    "options": [
      "systemd ignores any manual mounts which are not done using the systemctl mount command",
      "The command systemctl mountsync can be used to create a mount unit based on the existing mount",
      "systemd automatically generates a mount unit and monitors the mount point without changing it",
      "Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time",
      "systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "systemd tự động tạo mount unit khi bạn mount thủ công, và theo dõi (monitor) filesystem đó. Điều này là hành vi mặc định của systemd.",
      "vi": "systemd tự động tạo mount unit khi bạn mount thủ công, và theo dõi (monitor) filesystem đó. Điều này là hành vi mặc định của systemd.\n🔑 Keywords: systemd | automount | mount unit | auto-generated"
    },
    "questionVi": "Điều nào sau đây là đúng khi một hệ thống tệp không được liệt kê trong /etc/fstab và hệ thống không biết đến, được gắn thủ công?",
    "optionsVi": [
      "systemd bỏ qua mọi quá trình gắn kết thủ công không được thực hiện bằng lệnh mount systemctl",
      "Lệnh systemctl mountsync có thể được sử dụng để tạo đơn vị gắn kết dựa trên giá treo hiện có",
      "systemd tự động tạo một đơn vị gắn kết và giám sát điểm gắn kết mà không thay đổi nó",
      "Trừ khi đơn vị gắn kết systemd được tạo, systemd sẽ ngắt kết nối hệ thống tệp sau một khoảng thời gian ngắn",
      "systemctl unmount phải được sử dụng để xóa mount vì hệ thống sẽ mở bộ mô tả tệp trên điểm gắn kết"
    ]
  },
  {
    "id": 6,
    "topicId": 1,
    "question": "Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "updatedb",
    "explanation": {
      "en": "updatedb là lệnh cập nhật cơ sở dữ liệu của locate. Cơ sở dữ liệu này (thường ở /var/lib/mlocate/mlocate.db) được dùng để tìm kiếm file nhanh.",
      "vi": "updatedb là lệnh cập nhật cơ sở dữ liệu của locate. Cơ sở dữ liệu này (thường ở /var/lib/mlocate/mlocate.db) được dùng để tìm kiếm file nhanh.\n🔑 Keywords: updatedb | locate | mlocate.db | /var/lib/mlocate"
    },
    "questionVi": "Chương trình nào cập nhật cơ sở dữ liệu được lệnh định vị sử dụng? (CHỈ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào).",
    "optionsVi": []
  },
  {
    "id": 7,
    "topicId": 1,
    "question": "What does the command mount --bind do?",
    "options": [
      "It makes the contents of one directory available in another directory",
      "It mounts all available filesystems to the current directory",
      "It mounts all user mountable filesystems to the user's home directory",
      "It mounts all file systems listed in /etc/fstab which have the option userbind set",
      "It permanently mounts a regular file to a directory"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "mount --bind 'liên kết' một thư mục vào một thư mục khác — nội dung thư mục nguồn xuất hiện ở cả hai vị trí mà không cần copy. Hữu ích để chia sẻ thư mục trong chroot.",
      "vi": "mount --bind 'liên kết' một thư mục vào một thư mục khác — nội dung thư mục nguồn xuất hiện ở cả hai vị trí mà không cần copy. Hữu ích để chia sẻ thư mục trong chroot.\n🔑 Keywords: mount --bind | bind mount | directory sharing | chroot"
    },
    "questionVi": "Lệnh mount --bind làm gì?",
    "optionsVi": [
      "Nó làm cho nội dung của một thư mục có sẵn trong thư mục khác",
      "Nó gắn kết tất cả các hệ thống tập tin có sẵn vào thư mục hiện tại",
      "Nó gắn kết tất cả các hệ thống tập tin có thể gắn kết của người dùng vào thư mục chính của người dùng",
      "Nó gắn kết tất cả các hệ thống tệp được liệt kê trong /etc/fstab có bộ tùy chọn userbind",
      "Nó gắn vĩnh viễn một tập tin thông thường vào một thư mục"
    ]
  },
  {
    "id": 8,
    "topicId": 1,
    "question": "Consider the following output from the command ls -i:How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?",
    "options": [
      "ln -h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln -f c.txt a.txt",
      "ln -i 525385 c.txt"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Cú pháp hard link: ln <source> <destination>. Lệnh 'ln a.txt c.txt' tạo hard link c.txt trỏ đến cùng inode với a.txt. Thứ tự: nguồn trước, đích sau.",
      "vi": "Cú pháp hard link: ln <source> <destination>. Lệnh 'ln a.txt c.txt' tạo hard link c.txt trỏ đến cùng inode với a.txt. Thứ tự: nguồn trước, đích sau.\n🔑 Keywords: ln | hard link | inode | source destination order"
    },
    "questionVi": "Hãy xem xét kết quả đầu ra sau đây từ lệnh ls -i: Làm thế nào để tạo một tệp mới có tên c.txt với cùng số inode như a.txt (Inode 525385)?",
    "optionsVi": [
      "ln -h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln -f c.txt a.txt",
      "ln -i 525385 c.txt"
    ]
  },
  {
    "id": 9,
    "topicId": 1,
    "question": "Consider the following directory:drwxrwxr-x 2 root sales 4096 Jan 1 15:21 salesWhich command ensures new files created within the directory sales are owned by the group sales? (Choose two.)",
    "options": [
      "chmod g+s sales",
      "setpol -R newgroup=sales sales",
      "chgrp -p sales sales",
      "chown --persistent *.sales sales",
      "chmod 2775 sales"
    ],
    "correct": [
      0,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "SGID bit (Set Group ID) đảm bảo các file mới trong thư mục kế thừa group của thư mục, không phải group của người tạo. Cả 'chmod g+s' và 'chmod 2775' (số 2) đều thiết lập SGID.",
      "vi": "SGID bit (Set Group ID) đảm bảo các file mới trong thư mục kế thừa group của thư mục, không phải group của người tạo. Cả 'chmod g+s' và 'chmod 2775' (số 2) đều thiết lập SGID.\n🔑 Keywords: SGID | chmod g+s | chmod 2775 | group inheritance | sticky bit"
    },
    "questionVi": "Hãy xem xét thư mục sau: drwxrwxr-x 2 root sales 4096 15:21 sales Ngày 1 tháng 1 Lệnh nào đảm bảo các tệp mới được tạo trong thư mục sales thuộc sở hữu của nhóm sales? (Chọn hai.)",
    "optionsVi": [
      "bán hàng chmod g+s",
      "setpol -R newgroup=doanh số bán hàng",
      "chgrp -p bán hàng bán hàng",
      "chown --persistent *.bán hàng",
      "bán hàng chmod 2775"
    ]
  },
  {
    "id": 10,
    "topicId": 1,
    "question": "In order to display all currently mounted filesystems, which of the following commands could be used? (Choose two.)",
    "options": [
      "cat /proc/self/mounts",
      "free",
      "lsmounts",
      "mount",
      "cat /proc/filesystems"
    ],
    "correct": [
      0,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Để xem filesystem đang mount: (1) lệnh 'mount' không tham số hiển thị tất cả, (2) cat /proc/self/mounts đọc file ảo kernel về mount hiện tại. Cả hai đều hợp lệ.",
      "vi": "Để xem filesystem đang mount: (1) lệnh 'mount' không tham số hiển thị tất cả, (2) cat /proc/self/mounts đọc file ảo kernel về mount hiện tại. Cả hai đều hợp lệ.\n🔑 Keywords: mount | /proc/self/mounts | mounted filesystems | /proc/mounts"
    },
    "questionVi": "Để hiển thị tất cả các hệ thống tập tin hiện đang được gắn, có thể sử dụng lệnh nào sau đây? (Chọn hai.)",
    "optionsVi": [
      "mèo /proc/self/mounts",
      "free",
      "lsmounts",
      "mount",
      "cat /proc/hệ thống tập tin"
    ]
  },
  {
    "id": 11,
    "topicId": 1,
    "question": "Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "df",
    "explanation": {
      "en": "df (disk free) hiển thị dung lượng đĩa đã dùng và còn trống của tất cả filesystem đang mount. Tùy chọn -h cho kết quả dạng human-readable.",
      "vi": "df (disk free) hiển thị dung lượng đĩa đã dùng và còn trống của tất cả filesystem đang mount. Tùy chọn -h cho kết quả dạng human-readable.\n🔑 Keywords: df | disk free | mounted filesystems | -h human-readable"
    },
    "questionVi": "Lệnh nào hiển thị mức sử dụng dung lượng ổ đĩa hiện tại cho tất cả các hệ thống tệp được gắn? (CHỈ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 12,
    "topicId": 1,
    "question": "Which chown command changes the ownership to dave and the group to staff on a file named data.txt?",
    "options": [
      "chown dave/staff data.txt",
      "chown -u dave -g staff data.txt",
      "chown --user dave --group staff data.txt",
      "chown dave+staff data.txt",
      "chown dave:staff data.txt"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Cú pháp chown: 'chown owner:group file'. Dấu hai chấm (:) phân cách owner và group. Các cú pháp khác như dave/staff hoặc dave+staff đều sai.",
      "vi": "Cú pháp chown: 'chown owner:group file'. Dấu hai chấm (:) phân cách owner và group. Các cú pháp khác như dave/staff hoặc dave+staff đều sai.\n🔑 Keywords: chown | owner:group | colon separator | chown dave:staff"
    },
    "questionVi": "Lệnh chown nào thay đổi quyền sở hữu đối với dave và nhóm thành nhân viên trên tệp có tên data.txt?",
    "optionsVi": [
      "chown dave/staff data.txt",
      "chown -u dave -g nhân viên data.txt",
      "chown --user dave --group nhân viên data.txt",
      "chown dave+staff data.txt",
      "chown dave:staff data.txt"
    ]
  },
  {
    "id": 13,
    "topicId": 1,
    "question": "When considering the use of hard links, what are valid reasons not to use hard links?",
    "options": [
      "Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them",
      "Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content",
      "Hard links are specific to one filesystem and cannot point to files on another filesystem",
      "If users other than root should be able to create hard links, suln has to be installed and configured",
      "When a hard linked file is changed, a copy of the file is created and consumes additional space"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Hard link giới hạn trong cùng một filesystem (không thể trỏ sang filesystem khác). Đây là hạn chế căn bản vì hard link chia sẻ cùng inode số, mà inode chỉ duy nhất trong một filesystem.",
      "vi": "Hard link giới hạn trong cùng một filesystem (không thể trỏ sang filesystem khác). Đây là hạn chế căn bản vì hard link chia sẻ cùng inode số, mà inode chỉ duy nhất trong một filesystem.\n🔑 Keywords: hard link | same filesystem | inode | cannot cross filesystem"
    },
    "questionVi": "Khi xem xét việc sử dụng liên kết cứng, lý do chính đáng để không sử dụng liên kết cứng là gì?",
    "optionsVi": [
      "Liên kết cứng không có sẵn trên tất cả các hệ thống Linux vì các hệ thống tệp truyền thống, chẳng hạn như ext4, không hỗ trợ chúng",
      "Mỗi liên kết cứng có quyền sở hữu, quyền và ACL riêng, điều này có thể dẫn đến việc tiết lộ nội dung tệp ngoài ý muốn",
      "Liên kết cứng dành riêng cho một hệ thống tệp và không thể trỏ đến các tệp trên hệ thống tệp khác",
      "Nếu người dùng không phải root có thể tạo liên kết cứng thì phải cài đặt và định cấu hình sunn",
      "Khi một tệp được liên kết cứng được thay đổi, một bản sao của tệp sẽ được tạo và tiêu tốn thêm dung lượng"
    ]
  },
  {
    "id": 14,
    "topicId": 1,
    "question": "In compliance with the FHS, in which of the directories are man pages found?",
    "options": [
      "/opt/man/",
      "/usr/doc/",
      "/usr/share/man/",
      "/var/pkg/man",
      "/var/man/"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Theo FHS (Filesystem Hierarchy Standard), man page được lưu tại /usr/share/man/. Đây là vị trí chuẩn cho dữ liệu chỉ đọc chia sẻ giữa các kiến trúc.",
      "vi": "Theo FHS (Filesystem Hierarchy Standard), man page được lưu tại /usr/share/man/. Đây là vị trí chuẩn cho dữ liệu chỉ đọc chia sẻ giữa các kiến trúc.\n🔑 Keywords: FHS | /usr/share/man/ | man pages | Filesystem Hierarchy Standard"
    },
    "questionVi": "Để tuân thủ FHS, các trang man được tìm thấy trong thư mục nào?",
    "optionsVi": [
      "/opt/man/",
      "/usr/doc/",
      "/usr/share/man/",
      "/var/pkg/man",
      "/var/man/"
    ]
  },
  {
    "id": 15,
    "topicId": 1,
    "question": "Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "cmdline",
    "explanation": {
      "en": "/proc/cmdline chứa tham số kernel dòng lệnh (command line parameters) được bootloader (GRUB) truyền cho kernel khi khởi động.",
      "vi": "/proc/cmdline chứa tham số kernel dòng lệnh (command line parameters) được bootloader (GRUB) truyền cho kernel khi khởi động.\n🔑 Keywords: /proc/cmdline | kernel parameters | bootloader | GRUB | boot options"
    },
    "questionVi": "Tệp nào trong hệ thống tệp /proc liệt kê các tham số được truyền từ bộ nạp khởi động đến kernel? (Chỉ ghi tên tệp mà không có bất kỳ đường dẫn nào.)",
    "optionsVi": []
  },
  {
    "id": 16,
    "topicId": 1,
    "question": "What is the process ID number of the init process on a System V init based system?",
    "options": [
      "-1",
      "0",
      "1",
      "It is different with each reboot",
      "It is set to the current run level"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "init luôn là process đầu tiên được kernel khởi động, có PID = 1. Đây là process cha của tất cả process khác trong hệ thống System V init.",
      "vi": "init luôn là process đầu tiên được kernel khởi động, có PID = 1. Đây là process cha của tất cả process khác trong hệ thống System V init.\n🔑 Keywords: init | PID 1 | first process | System V | parent of all"
    },
    "questionVi": "Số ID tiến trình của tiến trình init trên hệ thống dựa trên init System V là gì?",
    "optionsVi": [
      "-1",
      "0",
      "1",
      "Nó khác nhau sau mỗi lần khởi động lại",
      "Nó được đặt ở mức chạy hiện tại"
    ]
  },
  {
    "id": 17,
    "topicId": 1,
    "question": "Which daemon handles power management events on a Linux system?",
    "options": [
      "acpid",
      "batteryd",
      "pwrmgntd",
      "psd",
      "inetd"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "acpid (ACPI Daemon) là daemon xử lý các sự kiện ACPI như đóng nắp laptop, nhấn nút nguồn, cắm sạc. ACPI = Advanced Configuration and Power Interface.",
      "vi": "acpid (ACPI Daemon) là daemon xử lý các sự kiện ACPI như đóng nắp laptop, nhấn nút nguồn, cắm sạc. ACPI = Advanced Configuration and Power Interface.\n🔑 Keywords: acpid | ACPI | power management | daemon | power button"
    },
    "questionVi": "Daemon nào xử lý các sự kiện quản lý nguồn trên hệ thống Linux?",
    "optionsVi": [
      "acpid",
      "batteryd",
      "pwrmgntd",
      "psd",
      "inetd"
    ]
  },
  {
    "id": 18,
    "topicId": 1,
    "question": "Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)",
    "options": [
      "Some parts of the boot process can be configured from the BIOS",
      "Linux does not require the assistance of the BIOS to boot a computer",
      "The BIOS boot process starts only if secondary storage, such as the hard disk, is functional",
      "The BIOS initiates the boot process after turning the computer on",
      "The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk"
    ],
    "correct": [
      0,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Quá trình boot BIOS: (A) BIOS có thể cấu hình được (boot order, settings), (D) BIOS khởi động khi bật máy và là bước đầu tiên. BIOS KHÔNG cần driver từ secondary storage để chạy.",
      "vi": "Quá trình boot BIOS: (A) BIOS có thể cấu hình được (boot order, settings), (D) BIOS khởi động khi bật máy và là bước đầu tiên. BIOS KHÔNG cần driver từ secondary storage để chạy.\n🔑 Keywords: BIOS | boot process | POST | boot order | MBR"
    },
    "questionVi": "Câu nào sau đây đúng về trình tự khởi động của PC sử dụng BIOS? (Chọn hai.)",
    "optionsVi": [
      "Một số phần của quá trình khởi động có thể được cấu hình từ BIOS",
      "Linux không cần sự trợ giúp của BIOS để khởi động máy tính",
      "Quá trình khởi động BIOS chỉ bắt đầu nếu bộ lưu trữ thứ cấp, chẳng hạn như đĩa cứng, hoạt động bình thường.",
      "BIOS bắt đầu quá trình khởi động sau khi bật máy tính",
      "BIOS được khởi động bằng cách tải trình điều khiển phần cứng từ bộ lưu trữ thứ cấp, chẳng hạn như đĩa cứng"
    ]
  },
  {
    "id": 19,
    "topicId": 1,
    "question": "What is true regarding UEFI firmware? (Choose two.)",
    "options": [
      "It can read and interpret partition tables",
      "It can use and read certain file systems",
      "It stores its entire configuration on the /boot/ partition",
      "It is stored in a special area within the GPT metadata",
      "It is loaded from a fixed boot disk position"
    ],
    "correct": [
      0,
      1
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "UEFI tiên tiến hơn BIOS: (A) có thể đọc bảng phân vùng GPT/MBR, (B) có thể đọc FAT32 từ ESP (EFI System Partition). UEFI firmware code nằm trong flash memory trên bo mạch chủ.",
      "vi": "UEFI tiên tiến hơn BIOS: (A) có thể đọc bảng phân vùng GPT/MBR, (B) có thể đọc FAT32 từ ESP (EFI System Partition). UEFI firmware code nằm trong flash memory trên bo mạch chủ.\n🔑 Keywords: UEFI | GPT | ESP | FAT32 | partition table | EFI System Partition"
    },
    "questionVi": "Điều gì đúng về phần mềm UEFI? (Chọn hai.)",
    "optionsVi": [
      "Nó có thể đọc và giải thích các bảng phân vùng",
      "Nó có thể sử dụng và đọc các hệ thống tập tin nhất định",
      "Nó lưu trữ toàn bộ cấu hình của nó trên phân vùng /boot/",
      "Nó được lưu trữ ở một khu vực đặc biệt trong siêu dữ liệu GPT",
      "Nó được tải từ một vị trí đĩa khởi động cố định"
    ]
  },
  {
    "id": 20,
    "topicId": 1,
    "question": "A faulty kernel module is causing issues with a network interface card. Which of the following actions ensures that this module is not loaded automatically when the system boots?",
    "options": [
      "Using lsmod --remove --autoclean without specifying the name of a specific module",
      "Using modinfo -k followed by the name of the offending module",
      "Using modprobe -r followed by the name of the offending module",
      "Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf",
      "Deleting the kernel module's directory from the file system and recompiling the kernel, including its modules"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Để chặn vĩnh viễn một kernel module, thêm 'blacklist <module_name>' vào /etc/modprobe.d/blacklist.conf. modprobe -r chỉ gỡ tạm thời, không ngăn load lại khi reboot.",
      "vi": "Để chặn vĩnh viễn một kernel module, thêm 'blacklist <module_name>' vào /etc/modprobe.d/blacklist.conf. modprobe -r chỉ gỡ tạm thời, không ngăn load lại khi reboot.\n🔑 Keywords: blacklist | modprobe.d | kernel module | persistent disable | /etc/modprobe.d/"
    },
    "questionVi": "Mô-đun hạt nhân bị lỗi đang gây ra sự cố với thẻ giao diện mạng. Hành động nào sau đây đảm bảo rằng mô-đun này không được tải tự động khi hệ thống khởi động?",
    "optionsVi": [
      "Sử dụng lsmod --remove --autoclean mà không chỉ định tên của mô-đun cụ thể",
      "Sử dụng modinfo -k theo sau là tên của mô-đun vi phạm",
      "Sử dụng modprobe -r theo sau là tên của mô-đun vi phạm",
      "Thêm dòng danh sách đen bao gồm tên của mô-đun vi phạm vào tệp /etc/modprobe.d/blacklist.conf",
      "Xóa thư mục của mô-đun hạt nhân khỏi hệ thống tệp và biên dịch lại hạt nhân, bao gồm cả các mô-đun của nó"
    ]
  },
  {
    "id": 21,
    "topicId": 1,
    "question": "When is the content of the kernel ring buffer reset? (Choose two.)",
    "options": [
      "When the ring buffer is explicitly reset using the command dmesg --clear",
      "When the ring buffer is read using dmesg without any additional parameters",
      "When a configurable amount of time, 15 minutes by default, has passed",
      "When the kernel loads a previously unloaded kernel module",
      "When the system is shut down or rebooted"
    ],
    "correct": [
      0,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Kernel ring buffer (dmesg) bị reset khi: (A) dùng lệnh dmesg -C hoặc dmesg --clear để xóa rõ ràng, (E) khi hệ thống tắt hoặc khởi động lại. Buffer là vòng — data cũ bị ghi đè bởi data mới.",
      "vi": "Kernel ring buffer (dmesg) bị reset khi: (A) dùng lệnh dmesg -C hoặc dmesg --clear để xóa rõ ràng, (E) khi hệ thống tắt hoặc khởi động lại. Buffer là vòng — data cũ bị ghi đè bởi data mới.\n🔑 Keywords: kernel ring buffer | dmesg | dmesg -C | reboot | ring buffer"
    },
    "questionVi": "Khi nào nội dung của bộ đệm vòng kernel được thiết lập lại? (Chọn hai.)",
    "optionsVi": [
      "Khi bộ đệm vòng được đặt lại rõ ràng bằng lệnh dmesg --clear",
      "Khi bộ đệm vòng được đọc bằng dmesg mà không có bất kỳ tham số bổ sung nào",
      "Khi đã trôi qua một khoảng thời gian có thể định cấu hình, theo mặc định là 15 phút",
      "Khi kernel tải mô-đun kernel chưa được tải trước đó",
      "Khi hệ thống bị tắt hoặc khởi động lại"
    ]
  },
  {
    "id": 22,
    "topicId": 1,
    "question": "What is the first program the Linux kernel starts at boot time when using System V init?",
    "options": [
      "/lib/init.so",
      "/proc/sys/kernel/init",
      "/etc/rc.d/rcinit",
      "/sbin/init",
      "/boot/init"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/sbin/init là chương trình đầu tiên kernel khởi động (PID 1) trong hệ thống System V. Trên systemd, /sbin/init thường là symlink đến /lib/systemd/systemd.",
      "vi": "/sbin/init là chương trình đầu tiên kernel khởi động (PID 1) trong hệ thống System V. Trên systemd, /sbin/init thường là symlink đến /lib/systemd/systemd.\n🔑 Keywords: /sbin/init | PID 1 | System V init | first userspace program"
    },
    "questionVi": "Chương trình đầu tiên mà nhân Linux khởi động khi khởi động khi sử dụng init System V là gì?",
    "optionsVi": [
      "/lib/init.so",
      "/proc/sys/kernel/init",
      "/etc/rc.d/rcinit",
      "/sbin/init",
      "/boot/init"
    ]
  },
  {
    "id": 23,
    "topicId": 1,
    "question": "A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?",
    "options": [
      "apt-get search /etc/debian_version",
      "apt -r /etc/debian_version",
      "find /etc/debian_version -dpkg",
      "dpkg -S /etc/debian_version",
      "apt-file /etc/debian_version"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "SysVinit dùng số runlevel để định nghĩa trạng thái hệ thống. Runlevel 3 = multi-user với networking, không có GUI (text mode). Runlevel 5 = multi-user + networking + GUI.",
      "vi": "SysVinit dùng số runlevel để định nghĩa trạng thái hệ thống. Runlevel 3 = multi-user với networking, không có GUI (text mode). Runlevel 5 = multi-user + networking + GUI.\n🔑 Keywords: runlevel | SysV init | runlevel 3 | multi-user | no GUI"
    },
    "questionVi": "Gói Debian tạo một số tệp trong quá trình cài đặt. Lệnh nào sau đây tìm kiếm các gói sở hữu tệp /etc/debian_version?",
    "optionsVi": [
      "tìm kiếm apt-get /etc/debian_version",
      "apt -r /etc/debian_version",
      "tìm /etc/debian_version -dpkg",
      "dpkg -S /etc/debian_version",
      "tập tin apt /etc/debian_version"
    ]
  },
  {
    "id": 24,
    "topicId": 1,
    "question": "What is contained on the EFI System Partition?",
    "options": [
      "The Linux root file system",
      "The first stage boot loader",
      "The default swap space file",
      "The Linux default shell binaries",
      "The user home directories"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Lệnh telinit dùng để thay đổi runlevel đang chạy trong System V init. Ví dụ: 'telinit 3' chuyển sang runlevel 3 (text mode).",
      "vi": "Lệnh telinit dùng để thay đổi runlevel đang chạy trong System V init. Ví dụ: 'telinit 3' chuyển sang runlevel 3 (text mode).\n🔑 Keywords: telinit | change runlevel | SysV init | runtime"
    },
    "questionVi": "Phân vùng hệ thống EFI chứa những gì?",
    "optionsVi": [
      "Hệ thống tập tin gốc Linux",
      "Bộ tải khởi động giai đoạn đầu tiên",
      "Tệp không gian trao đổi mặc định",
      "Các tệp nhị phân shell mặc định của Linux",
      "Thư mục chính của người dùng"
    ]
  },
  {
    "id": 25,
    "topicId": 1,
    "question": "Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose two.)",
    "options": [
      "~/.lib64/",
      "/usr/lib64/",
      "/var/lib64/",
      "/lib64/",
      "/opt/lib64/"
    ],
    "correct": [
      1,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "GRUB2 lưu cấu hình tại /boot/grub/grub.cfg (hoặc /boot/grub2/grub.cfg). File này được tự động sinh ra bởi grub-mkconfig từ các file trong /etc/grub.d/ và /etc/default/grub.",
      "vi": "GRUB2 lưu cấu hình tại /boot/grub/grub.cfg (hoặc /boot/grub2/grub.cfg). File này được tự động sinh ra bởi grub-mkconfig từ các file trong /etc/grub.d/ và /etc/default/grub.\n🔑 Keywords: GRUB2 | /boot/grub/grub.cfg | grub-mkconfig | /etc/default/grub"
    },
    "questionVi": "Thư mục nào sau đây trên hệ thống Linux 64 bit thường chứa các thư viện dùng chung? (Chọn hai.)",
    "optionsVi": [
      "~/.lib64/",
      "/usr/lib64/",
      "/var/lib64/",
      "/lib64/",
      "/opt/lib64/"
    ]
  },
  {
    "id": 26,
    "topicId": 1,
    "question": "Which of the following files exist in a standard GRUB 2 installation? (Choose two.)",
    "options": [
      "/boot/grub/stages/stage0",
      "/boot/grub/i386-pc/lvm.mod",
      "/boot/grub/fstab",
      "/boot/grub/grub.cfg",
      "/boot/grub/linux/vmlinuz"
    ],
    "correct": [
      1,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Để cài GRUB2 lên MBR của /dev/sda, dùng lệnh 'grub-install /dev/sda'. Không chỉ định partition mà chỉ định toàn bộ disk (không có số cuối).",
      "vi": "Để cài GRUB2 lên MBR của /dev/sda, dùng lệnh 'grub-install /dev/sda'. Không chỉ định partition mà chỉ định toàn bộ disk (không có số cuối).\n🔑 Keywords: grub-install | MBR | /dev/sda | bootloader installation"
    },
    "questionVi": "Tệp nào sau đây tồn tại trong bản cài đặt GRUB 2 tiêu chuẩn? (Chọn hai.)",
    "optionsVi": [
      "/boot/grub/stages/stage0",
      "/boot/grub/i386-pc/lvm.mod",
      "/boot/grub/fstab",
      "/boot/grub/grub.cfg",
      "/boot/grub/linux/vmlinuz"
    ]
  },
  {
    "id": 27,
    "topicId": 1,
    "question": "Which of the following commands installs all packages with a name ending with the string foo?",
    "options": [
      "zypper get '*foo'",
      "zypper update 'foo?'",
      "zypper force 'foo*'",
      "zypper install '*foo'",
      "zypper add '.*foo'"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Sau khi sửa /etc/default/grub, phải chạy 'update-grub' (Debian/Ubuntu) hoặc 'grub2-mkconfig' để tái tạo /boot/grub/grub.cfg. Không sửa grub.cfg trực tiếp.",
      "vi": "Sau khi sửa /etc/default/grub, phải chạy 'update-grub' (Debian/Ubuntu) hoặc 'grub2-mkconfig' để tái tạo /boot/grub/grub.cfg. Không sửa grub.cfg trực tiếp.\n🔑 Keywords: update-grub | grub2-mkconfig | /etc/default/grub | regenerate config"
    },
    "questionVi": "Lệnh nào sau đây cài đặt tất cả các gói có tên kết thúc bằng chuỗi foo?",
    "optionsVi": [
      "zypper nhận được '*foo'",
      "cập nhật zypper 'foo?'",
      "lực zypper 'foo*'",
      "cài đặt zypper '*foo'",
      "zypper thêm '.*foo'"
    ]
  },
  {
    "id": 28,
    "topicId": 1,
    "question": "Which of the following properties of a Linux system should be changed when a virtual machine is cloned? (Choose two.)",
    "options": [
      "The partitioning scheme",
      "The file system",
      "The D-Bus Machine ID",
      "The permissions of /root/",
      "The SSH host keys"
    ],
    "correct": [
      2,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "GRUB2 legacy password dùng MD5, nhưng GRUB2 dùng PBKDF2 (Password-Based Key Derivation Function 2) SHA-512. Dùng lệnh 'grub-mkpasswd-pbkdf2' để tạo hash.",
      "vi": "GRUB2 legacy password dùng MD5, nhưng GRUB2 dùng PBKDF2 (Password-Based Key Derivation Function 2) SHA-512. Dùng lệnh 'grub-mkpasswd-pbkdf2' để tạo hash.\n🔑 Keywords: GRUB2 password | PBKDF2 | grub-mkpasswd-pbkdf2 | SHA-512"
    },
    "questionVi": "Thuộc tính nào sau đây của hệ thống Linux nên được thay đổi khi máy ảo được sao chép? (Chọn hai.)",
    "optionsVi": [
      "Sơ đồ phân vùng",
      "Hệ thống tập tin",
      "ID máy D-Bus",
      "Quyền của /root/",
      "Các khóa máy chủ SSH"
    ]
  },
  {
    "id": 29,
    "topicId": 1,
    "question": "Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?",
    "options": [
      "grub2 install /dev/sdc",
      "grub-mkrescue /dev/sdc",
      "grub-mbrinstall /dev/sdc",
      "grub-setup /dev/sdc",
      "grub-install /dev/sdc"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Kernel parameter 'init=/bin/bash' cho phép boot thẳng vào bash shell thay vì init process. Dùng để recovery khi hệ thống hỏng. Có thể thêm vào GRUB boot line.",
      "vi": "Kernel parameter 'init=/bin/bash' cho phép boot thẳng vào bash shell thay vì init process. Dùng để recovery khi hệ thống hỏng. Có thể thêm vào GRUB boot line.\n🔑 Keywords: init=/bin/bash | kernel parameter | emergency boot | GRUB | recovery"
    },
    "questionVi": "Lệnh nào sau đây cài đặt GRUB 2 vào bản ghi khởi động chính trên đĩa cứng thứ ba?",
    "optionsVi": [
      "cài đặt grub2/dev/sdc",
      "grub-mkrescue /dev/sdc",
      "grub-mbrinstall /dev/sdc",
      "cài đặt grub/dev/sdc",
      "cài đặt grub /dev/sdc"
    ]
  },
  {
    "id": 30,
    "topicId": 1,
    "question": "Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?",
    "options": [
      "7",
      "82",
      "83",
      "8e",
      "fd"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "lsmod hiển thị danh sách các kernel module đang được load. Tương đương với cat /proc/modules. Output gồm tên module, kích thước và số lần sử dụng.",
      "vi": "lsmod hiển thị danh sách các kernel module đang được load. Tương đương với cat /proc/modules. Output gồm tên module, kích thước và số lần sử dụng.\n🔑 Keywords: lsmod | /proc/modules | kernel modules | loaded modules"
    },
    "questionVi": "Loại phân vùng nào sau đây được sử dụng cho không gian trao đổi Linux khi phân vùng ổ đĩa cứng?",
    "optionsVi": [
      "7",
      "82",
      "83",
      "8e",
      "fd"
    ]
  },
  {
    "id": 31,
    "topicId": 1,
    "question": "What is true regarding the configuration of yum? (Choose two.)",
    "options": [
      "Changes to the repository configuration become active after running yum confupdate",
      "Changes to the yum configuration become active after restarting the yumd service",
      "The configuration of package repositories can be divided into multiple files",
      "Repository configurations can include variables such as $basearch or $releasever",
      "In case /etc/yum.repos.d/ contains files, /etc/yum.conf is ignored"
    ],
    "correct": [
      2,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "modprobe dùng để load/unload kernel module cùng với các dependency của nó. Khác insmod (load thủ công, không xử lý dependency). modprobe -r để remove module.",
      "vi": "modprobe dùng để load/unload kernel module cùng với các dependency của nó. Khác insmod (load thủ công, không xử lý dependency). modprobe -r để remove module.\n🔑 Keywords: modprobe | module dependencies | insmod | modprobe -r | rmmod"
    },
    "questionVi": "Điều gì đúng về cấu hình của yum? (Chọn hai.)",
    "optionsVi": [
      "Các thay đổi đối với cấu hình kho lưu trữ sẽ được kích hoạt sau khi chạy yum confupdate",
      "Các thay đổi đối với cấu hình yum sẽ được kích hoạt sau khi khởi động lại dịch vụ yumd",
      "Cấu hình của kho gói có thể được chia thành nhiều tệp",
      "Cấu hình kho lưu trữ có thể bao gồm các biến như $basearch hoặc $releasever",
      "Trong trường hợp /etc/yum.repos.d/ chứa các tập tin, /etc/yum.conf bị bỏ qua"
    ]
  },
  {
    "id": 32,
    "topicId": 1,
    "question": "Which of the following apt-get subcommands installs the newest versions of all currently installed packages?",
    "options": [
      "auto-update",
      "dist-upgrade",
      "full-upgrade",
      "install",
      "update"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "modinfo hiển thị thông tin chi tiết về một kernel module: tác giả, license, tham số, version, filename. Dùng để kiểm tra module trước khi load.",
      "vi": "modinfo hiển thị thông tin chi tiết về một kernel module: tác giả, license, tham số, version, filename. Dùng để kiểm tra module trước khi load.\n🔑 Keywords: modinfo | module information | parameters | license | filename"
    },
    "questionVi": "Lệnh con apt-get nào sau đây cài đặt phiên bản mới nhất của tất cả các gói hiện được cài đặt?",
    "optionsVi": [
      "auto-update",
      "dist-upgrade",
      "full-upgrade",
      "install",
      "update"
    ]
  },
  {
    "id": 33,
    "topicId": 1,
    "question": "Which command uninstalls a package but keeps its configuration files in case the package is re-installed?",
    "options": [
      "dpkg -s pkgname",
      "dpkg -L pkgname",
      "dpkg -P pkgname",
      "dpkg -v pkgname",
      "dpkg -r pkgname"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "DKMS (Dynamic Kernel Module Support) tự động biên dịch lại kernel module của bên thứ ba khi kernel được cập nhật. Thường dùng cho driver như VirtualBox, NVIDIA.",
      "vi": "DKMS (Dynamic Kernel Module Support) tự động biên dịch lại kernel module của bên thứ ba khi kernel được cập nhật. Thường dùng cho driver như VirtualBox, NVIDIA.\n🔑 Keywords: DKMS | Dynamic Kernel Module Support | third-party drivers | kernel update"
    },
    "questionVi": "Lệnh nào gỡ cài đặt một gói nhưng vẫn giữ các tập tin cấu hình của nó trong trường hợp gói được cài đặt lại?",
    "optionsVi": [
      "dpkg -s pkgname",
      "dpkg -L pkgname",
      "dpkg -P pkgname",
      "dpkg -v pkgname",
      "dpkg -r pkgname"
    ]
  },
  {
    "id": 34,
    "topicId": 1,
    "question": "Which of the following commands lists the dependencies of the RPM package file foo.rpm?",
    "options": [
      "rpm -qpR foo.rpm",
      "rpm -dep foo",
      "rpm -ld foo.rpm",
      "rpm -R foo.rpm",
      "rpm -pD foo"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Trong /proc/sys/kernel/ có file 'hostname' chứa hostname hiện tại. Đây là giao diện kernel để xem/đặt các tham số hệ thống tại runtime.",
      "vi": "Trong /proc/sys/kernel/ có file 'hostname' chứa hostname hiện tại. Đây là giao diện kernel để xem/đặt các tham số hệ thống tại runtime.\n🔑 Keywords: /proc/sys/kernel/hostname | sysctl | kernel parameters | runtime"
    },
    "questionVi": "Lệnh nào sau đây liệt kê các phần phụ thuộc của tệp gói RPM foo.rpm?",
    "optionsVi": [
      "vòng/phút -qpR foo.rpm",
      "vòng/phút -dep foo",
      "vòng/phút -ld foo.rpm",
      "vòng/phút -R foo.rpm",
      "vòng/phút -pD foo"
    ]
  },
  {
    "id": 35,
    "topicId": 1,
    "question": "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
    "options": [
      "9",
      "15",
      "19",
      "49",
      "99"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "uname -r hiển thị phiên bản kernel đang chạy (running kernel version). Hữu ích để biết đang dùng kernel nào, nhất là khi có nhiều kernel được cài.",
      "vi": "uname -r hiển thị phiên bản kernel đang chạy (running kernel version). Hữu ích để biết đang dùng kernel nào, nhất là khi có nhiều kernel được cài.\n🔑 Keywords: uname -r | kernel version | running kernel | uname"
    },
    "questionVi": "Giá trị độ tốt tối đa mà người dùng thông thường có thể gán cho một quy trình bằng lệnh Nice khi thực hiện một quy trình mới là bao nhiêu?",
    "optionsVi": [
      "9",
      "15",
      "19",
      "49",
      "99"
    ]
  },
  {
    "id": 36,
    "topicId": 1,
    "question": "Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)",
    "options": [
      "find /tmp -user root -print",
      "find -path /tmp -uid root",
      "find /tmp -uid root -print",
      "find /tmp -user root",
      "find -path /tmp -user root -print"
    ],
    "correct": [
      0,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/proc/cpuinfo chứa thông tin chi tiết về CPU: model, số core, flags, tốc độ. Mỗi logical CPU có một entry riêng trong file này.",
      "vi": "/proc/cpuinfo chứa thông tin chi tiết về CPU: model, số core, flags, tốc độ. Mỗi logical CPU có một entry riêng trong file này.\n🔑 Keywords: /proc/cpuinfo | CPU information | processor info | cores"
    },
    "questionVi": "Lệnh nào sau đây liệt kê tất cả các tệp và thư mục trong thư mục /tmp/ và các thư mục con của nó do người dùng root sở hữu? (Chọn hai.)",
    "optionsVi": [
      "tìm /tmp -user root -print",
      "tìm -path /tmp -uid gốc",
      "tìm /tmp -uid root -print",
      "tìm /tmp -người dùng gốc",
      "tìm -path /tmp -user root -print"
    ]
  },
  {
    "id": 37,
    "topicId": 1,
    "question": "Which of the following are valid stream redirection operators within Bash? (Choose two.)",
    "options": [
      "<",
      "#>",
      "%>",
      ">>>",
      "2>&1"
    ],
    "correct": [
      0,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "free hiển thị thông tin RAM: total, used, free, buffers/cache. '-m' hiển thị theo MB. Thông tin lấy từ /proc/meminfo.",
      "vi": "free hiển thị thông tin RAM: total, used, free, buffers/cache. '-m' hiển thị theo MB. Thông tin lấy từ /proc/meminfo.\n🔑 Keywords: free | RAM | /proc/meminfo | memory usage | buffers cache"
    },
    "questionVi": "Toán tử nào sau đây là toán tử chuyển hướng luồng hợp lệ trong Bash? (Chọn hai.)",
    "optionsVi": [
      "<",
      "#>",
      "%>",
      ">>>",
      "2>&1"
    ]
  },
  {
    "id": 38,
    "topicId": 1,
    "question": "Which of the following vi commands deletes two lines, the current and the following line?",
    "options": [
      "d2",
      "2d",
      "2dd",
      "dd2",
      "de12"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "lspci liệt kê tất cả thiết bị PCI/PCIe kết nối với hệ thống. Dùng để nhận diện card mạng, GPU, USB controller. Thông tin lấy từ /proc/bus/pci/ hoặc /sys/bus/pci/.",
      "vi": "lspci liệt kê tất cả thiết bị PCI/PCIe kết nối với hệ thống. Dùng để nhận diện card mạng, GPU, USB controller. Thông tin lấy từ /proc/bus/pci/ hoặc /sys/bus/pci/.\n🔑 Keywords: lspci | PCI devices | hardware detection | PCI bus"
    },
    "questionVi": "Lệnh vi nào sau đây xóa hai dòng, dòng hiện tại và dòng tiếp theo?",
    "optionsVi": [
      "d2",
      "2d",
      "2dd",
      "dd2",
      "de12"
    ]
  },
  {
    "id": 39,
    "topicId": 1,
    "question": "The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run even when the user running the program logs out?",
    "options": [
      "job -b dmaint",
      "dbmaint &>/dev/pts/null",
      "nohup dbmaint &",
      "bg dbmaint",
      "wait dbmaint"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "lsusb liệt kê tất cả thiết bị USB. '-v' để xem chi tiết, '-t' để xem dưới dạng cây. Thông tin lấy từ /sys/bus/usb/.",
      "vi": "lsusb liệt kê tất cả thiết bị USB. '-v' để xem chi tiết, '-t' để xem dưới dạng cây. Thông tin lấy từ /sys/bus/usb/.\n🔑 Keywords: lsusb | USB devices | USB bus | hardware detection"
    },
    "questionVi": "Lệnh dbmaint & được sử dụng để chạy dbmaint ở chế độ nền. Tuy nhiên, dbmaint bị chấm dứt sau khi đăng xuất khỏi hệ thống. Lệnh gọi dbmaint thay thế nào cho phép dbmaint tiếp tục chạy ngay cả khi người dùng đang chạy chương trình đăng xuất?",
    "optionsVi": [
      "công việc -b dmaint",
      "dbmaint &>/dev/pts/null",
      "Nohup dbmaint &",
      "bg dbmaint",
      "chờ đã"
    ]
  },
  {
    "id": 40,
    "topicId": 1,
    "question": "From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.sh without starting a subshell?(Choose two.)",
    "options": [
      "source /usr/local/bin/runme.sh",
      "/usr/local/bin/runme.sh",
      "/bin/bash /usr/local/bin/runme.sh",
      ". /usr/local/bin/runme.sh",
      "run /usr/local/bin/runme.sh"
    ],
    "correct": [
      0,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "dd là lệnh sao chép và chuyển đổi dữ liệu ở cấp block. 'if=' = input file, 'of=' = output file, 'bs=' = block size. Dùng để backup/restore disk, tạo ISO.",
      "vi": "dd là lệnh sao chép và chuyển đổi dữ liệu ở cấp block. 'if=' = input file, 'of=' = output file, 'bs=' = block size. Dùng để backup/restore disk, tạo ISO.\n🔑 Keywords: dd | block copy | if= | of= | bs= | disk image"
    },
    "questionVi": "Từ shell Bash, lệnh nào sau đây thực hiện trực tiếp các lệnh từ tệp /usr/local/bin/runme.sh mà không bắt đầu shell con?(Chọn hai.)",
    "optionsVi": [
      "nguồn /usr/local/bin/runme.sh",
      "/usr/local/bin/runme.sh",
      "/bin/bash /usr/local/bin/runme.sh",
      ". /usr/local/bin/runme.sh",
      "chạy /usr/local/bin/runme.sh"
    ]
  },
  {
    "id": 41,
    "topicId": 1,
    "question": "Which program runs a command in specific intervals and refreshes the display of the program's output? (Specify ONLY the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "watch",
    "explanation": {
      "en": "fdisk là tool phân vùng đĩa MBR/DOS. Dùng để tạo, xóa, thay đổi loại partition. Với GPT disk nên dùng gdisk hoặc parted thay thế.",
      "vi": "fdisk là tool phân vùng đĩa MBR/DOS. Dùng để tạo, xóa, thay đổi loại partition. Với GPT disk nên dùng gdisk hoặc parted thay thế.\n🔑 Keywords: fdisk | partition | MBR | DOS partition table | gdisk for GPT"
    },
    "questionVi": "Chương trình nào chạy lệnh trong những khoảng thời gian cụ thể và làm mới màn hình hiển thị đầu ra của chương trình? (CHỈ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 42,
    "topicId": 1,
    "question": "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (uppercase)",
      "U (uppercase)",
      "u (lowercase)"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "parted hỗ trợ cả MBR và GPT, có thể chạy non-interactively (script mode). Hỗ trợ resize partition. Là tool hiện đại hơn fdisk.",
      "vi": "parted hỗ trợ cả MBR và GPT, có thể chạy non-interactively (script mode). Hỗ trợ resize partition. Là tool hiện đại hơn fdisk.\n🔑 Keywords: parted | GPT | MBR | resize partition | non-interactive"
    },
    "questionVi": "Ngay sau khi xóa 3 dòng văn bản trong vi và di chuyển con trỏ sang dòng khác, lệnh ký tự đơn nào sẽ chèn nội dung vừa xóa xuống dưới dòng hiện tại?",
    "optionsVi": [
      "tôi (chữ thường)",
      "p (chữ thường)",
      "P (chữ hoa)",
      "U (chữ hoa)",
      "bạn (chữ thường)"
    ]
  },
  {
    "id": 43,
    "topicId": 1,
    "question": "Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?",
    "options": [
      "tr -d '\\r' < userlist.txt > newlist.txt",
      "tr -c '\\n\\r' '' userlist.txt",
      "tr '\\r\\n' '' newlist.txt",
      "tr '\\r' '\\n' userlist.txt newlist.txt",
      "tr -s '/^M/^J/' userlist.txt newlist.txt"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "mkfs.ext4 tạo filesystem ext4 trên partition. Các tùy chọn quan trọng: -L (label), -m (reserved blocks %), -b (block size). Tương đương mkfs -t ext4.",
      "vi": "mkfs.ext4 tạo filesystem ext4 trên partition. Các tùy chọn quan trọng: -L (label), -m (reserved blocks %), -b (block size). Tương đương mkfs -t ext4.\n🔑 Keywords: mkfs.ext4 | create filesystem | ext4 | -L label | -m reserved"
    },
    "questionVi": "Lệnh nào sau đây thay đổi tất cả các ngắt dòng CR-LF trong tệp văn bản userlist.txt thành các ngắt dòng LF tiêu chuẩn của Linux và lưu kết quả trong newlist.txt?",
    "optionsVi": [
      "tr -d '\\r' < userlist.txt > newlist.txt",
      "tr -c '\\n\\r' '' userlist.txt",
      "tr '\\r\\n' '' newlist.txt",
      "tr '\\r' '\\n' userlist.txt newlist.txt",
      "tr -s '/^M/^J/' userlist.txt newlist.txt"
    ]
  },
  {
    "id": 44,
    "topicId": 1,
    "question": "Given the following input stream:txt1.txtatxt.txttxtB.txtWhich of the following regular expressions turns this input stream into the following output stream? txt1.bak.txt atxt.bak.txt txtB.bak.txt",
    "options": [
      "s/^.txt/.bak/",
      "s/txt/bak.txt/",
      "s/txt$/bak.txt/",
      "s/^txt$/.bak^/",
      "s/[.txt]/.bak$1/"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "e2fsck kiểm tra và sửa lỗi filesystem ext2/ext3/ext4. PHẢI unmount filesystem trước khi fsck. Dùng '-p' để tự sửa lỗi an toàn, '-y' để tự trả lời yes.",
      "vi": "e2fsck kiểm tra và sửa lỗi filesystem ext2/ext3/ext4. PHẢI unmount filesystem trước khi fsck. Dùng '-p' để tự sửa lỗi an toàn, '-y' để tự trả lời yes.\n🔑 Keywords: e2fsck | filesystem check | unmount first | -p auto-fix | ext2/3/4"
    },
    "questionVi": "Cho luồng đầu vào sau:txt1.txtatxt.txttxtB.txtBiểu thức chính quy nào sau đây biến luồng đầu vào này thành luồng đầu ra sau? txt1.bak.txt atxt.bak.txt txtB.bak.txt",
    "optionsVi": [
      "s/^.txt/.bak/",
      "s/txt/bak.txt/",
      "s/txt$/bak.txt/",
      "s/^txt$/.bak^/",
      "s/[.txt]/.bak$1/"
    ]
  },
  {
    "id": 45,
    "topicId": 1,
    "question": "Which command must be entered before exiting vi to save the current file as filea.txt?",
    "options": [
      "%s filea.txt",
      "%w filea.txt",
      ":save filea.txt",
      ":w filea.txt",
      ":s filea.txt"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "xfs_repair sửa lỗi XFS filesystem. Cần unmount trước. Khác e2fsck, XFS dùng tool riêng. 'xfs_check' đã deprecated, thay bằng xfs_repair -n (dry-run).",
      "vi": "xfs_repair sửa lỗi XFS filesystem. Cần unmount trước. Khác e2fsck, XFS dùng tool riêng. 'xfs_check' đã deprecated, thay bằng xfs_repair -n (dry-run).\n🔑 Keywords: xfs_repair | XFS | filesystem repair | unmount required"
    },
    "questionVi": "Lệnh nào phải được nhập trước khi thoát vi để lưu file hiện tại dưới dạng filea.txt?",
    "optionsVi": [
      "%s filea.txt",
      "%w filea.txt",
      ":lưu filea.txt",
      ":w filea.txt",
      ":s filea.txt"
    ]
  },
  {
    "id": 46,
    "topicId": 1,
    "question": "Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the keyboard?",
    "options": [
      "SIGTERM",
      "SIGCONT",
      "SIGSTOP",
      "SIGKILL",
      "SIGINT"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Swap partition cần 'mkswap' để khởi tạo, rồi 'swapon' để kích hoạt. Để tự động mount khi boot, thêm vào /etc/fstab với type 'swap'.",
      "vi": "Swap partition cần 'mkswap' để khởi tạo, rồi 'swapon' để kích hoạt. Để tự động mount khi boot, thêm vào /etc/fstab với type 'swap'.\n🔑 Keywords: mkswap | swapon | swap partition | /etc/fstab | virtual memory"
    },
    "questionVi": "Tín hiệu nào sau đây được gửi tới một tiến trình khi nhấn tổ hợp phím Ctrl+C trên bàn phím?",
    "optionsVi": [
      "SIGTERM",
      "SIGCONT",
      "SIGSTOP",
      "SIGKILL",
      "SIGINT"
    ]
  },
  {
    "id": 47,
    "topicId": 1,
    "question": "Which of the following commands displays the output of the foo command on the screen and also writes it to a file called /tmp/foodata?",
    "options": [
      "foo | less /tmp/foodata",
      "foo | cp /tmp/foodata",
      "foo > /tmp/foodata",
      "foo | tee /tmp/foodata",
      "foo > stdout >> /tmp/foodata"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "LVM (Logical Volume Manager) cho phép tạo, resize logical volume linh hoạt. Chuỗi: PV (Physical Volume) → VG (Volume Group) → LV (Logical Volume).",
      "vi": "LVM (Logical Volume Manager) cho phép tạo, resize logical volume linh hoạt. Chuỗi: PV (Physical Volume) → VG (Volume Group) → LV (Logical Volume).\n🔑 Keywords: LVM | Physical Volume | Volume Group | Logical Volume | pvcreate vgcreate lvcreate"
    },
    "questionVi": "Lệnh nào sau đây hiển thị đầu ra của lệnh foo trên màn hình và cũng ghi nó vào một tệp có tên /tmp/foodata?",
    "optionsVi": [
      "foo | ít /tmp/foodata",
      "foo | cp /tmp/foodata",
      "foo > /tmp/foodata",
      "foo | tee /tmp/foodata",
      "foo > thiết bị xuất chuẩn >> /tmp/foodata"
    ]
  },
  {
    "id": 48,
    "topicId": 1,
    "question": "What output will be displayed when the user fred executes the following command? echo 'fred $USER'",
    "options": [
      "fred fred",
      "fred /home/fred/",
      "'fred $USER'",
      "fred $USER",
      "'fred fred'"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "blkid hiển thị UUID, TYPE (filesystem type), LABEL của các block device. Dùng UUID trong /etc/fstab thay vì /dev/sdX để ổn định khi tên thiết bị thay đổi.",
      "vi": "blkid hiển thị UUID, TYPE (filesystem type), LABEL của các block device. Dùng UUID trong /etc/fstab thay vì /dev/sdX để ổn định khi tên thiết bị thay đổi.\n🔑 Keywords: blkid | UUID | filesystem type | /etc/fstab | block device"
    },
    "questionVi": "Kết quả nào sẽ được hiển thị khi người dùng fred thực hiện lệnh sau? echo 'fred $USER'",
    "optionsVi": [
      "Fred Fred",
      "fred /home/fred/",
      "'fred $USER'",
      "fred $USER",
      "'fred fred'"
    ]
  },
  {
    "id": 49,
    "topicId": 1,
    "question": "Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?",
    "options": [
      "lsattr foo",
      "apropos foo",
      "locate foo",
      "whatis foo",
      "which foo"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Cấu trúc /etc/fstab: device | mount_point | fs_type | options | dump | pass. Trường 'pass': 0=không fsck, 1=root fs (fsck đầu tiên), 2=các fs khác.",
      "vi": "Cấu trúc /etc/fstab: device | mount_point | fs_type | options | dump | pass. Trường 'pass': 0=không fsck, 1=root fs (fsck đầu tiên), 2=các fs khác.\n🔑 Keywords: /etc/fstab | dump | pass | fsck order | mount options"
    },
    "questionVi": "Lệnh nào sau đây hiển thị đường dẫn đến tệp thực thi sẽ được thực thi khi lệnh foo được gọi?",
    "optionsVi": [
      "lsattr foo",
      "đề nghị như vậy",
      "xác định vị trí foo",
      "foo là gì",
      "foo nào"
    ]
  },
  {
    "id": 50,
    "topicId": 1,
    "question": "When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?",
    "options": [
      "-rep-space",
      "-printnul",
      "-nospace",
      "-ignore-space",
      "-print0"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "mount -a mount tất cả filesystem trong /etc/fstab chưa được mount (trừ những có 'noauto'). Dùng sau khi sửa /etc/fstab để kiểm tra không cần reboot.",
      "vi": "mount -a mount tất cả filesystem trong /etc/fstab chưa được mount (trừ những có 'noauto'). Dùng sau khi sửa /etc/fstab để kiểm tra không cần reboot.\n🔑 Keywords: mount -a | /etc/fstab | mount all | noauto option"
    },
    "questionVi": "Khi chuyển hướng đầu ra của find sang lệnh xargs, tùy chọn tìm nào hữu ích nếu tên tệp chứa dấu cách?",
    "optionsVi": [
      "-rep-space",
      "-printnul",
      "-nospace",
      "-ignore-space",
      "-print0"
    ]
  },
  {
    "id": 51,
    "topicId": 1,
    "question": "Which of the following commands can be used to determine how long the system has been running? (Choose two.)",
    "options": [
      "uptime",
      "up",
      "time --up",
      "uname -u",
      "top"
    ],
    "correct": [
      0,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "df -h hiển thị dung lượng filesystem dạng human-readable (KB, MB, GB). df -i hiển thị thông tin inode. Không nhầm df với du (du đo dung lượng thư mục/file).",
      "vi": "df -h hiển thị dung lượng filesystem dạng human-readable (KB, MB, GB). df -i hiển thị thông tin inode. Không nhầm df với du (du đo dung lượng thư mục/file).\n🔑 Keywords: df -h | human-readable | filesystem usage | df vs du"
    },
    "questionVi": "Lệnh nào sau đây có thể được sử dụng để xác định hệ thống đã chạy được bao lâu? (Chọn hai.)",
    "optionsVi": [
      "uptime",
      "up",
      "hết giờ rồi",
      "tên -u",
      "top"
    ]
  },
  {
    "id": 52,
    "topicId": 1,
    "question": "What is true regarding the commandls > filesif files does not exist?",
    "options": [
      "The output of ls is printed to the terminal",
      "files is created and contains the output of ls",
      "An error message is shown and ls is not executed",
      "The command files is executed and receives the output of ls",
      "Any output of ls is discarded"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "du -sh <thư mục> tính tổng dung lượng của một thư mục (-s=summary, -h=human-readable). 'du -ah' liệt kê dung lượng từng file/thư mục con.",
      "vi": "du -sh <thư mục> tính tổng dung lượng của một thư mục (-s=summary, -h=human-readable). 'du -ah' liệt kê dung lượng từng file/thư mục con.\n🔑 Keywords: du -sh | directory size | disk usage | -s summary | -h human-readable"
    },
    "questionVi": "Điều gì đúng về các tập tin commandls > filesif không tồn tại?",
    "optionsVi": [
      "Đầu ra của ls được in tới thiết bị đầu cuối",
      "tập tin được tạo và chứa đầu ra của ls",
      "Một thông báo lỗi được hiển thị và ls không được thực thi",
      "Các tệp lệnh được thực thi và nhận đầu ra của ls",
      "Mọi đầu ra của ls đều bị loại bỏ"
    ]
  },
  {
    "id": 53,
    "topicId": 1,
    "question": "Which of the following files, located in a user's home directory, contains the Bash history?",
    "options": [
      ".bashrc_history",
      ".bash_histfile",
      ".history",
      ".bash_history",
      ".history_bash"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "find là lệnh tìm kiếm file mạnh nhất. Cú pháp: find <path> [options]. '-name' tìm tên, '-type f' tìm file, '-mtime -7' = sửa trong 7 ngày qua, '-exec' chạy lệnh.",
      "vi": "find là lệnh tìm kiếm file mạnh nhất. Cú pháp: find <path> [options]. '-name' tìm tên, '-type f' tìm file, '-mtime -7' = sửa trong 7 ngày qua, '-exec' chạy lệnh.\n🔑 Keywords: find | -name | -type | -mtime | -exec | file search"
    },
    "questionVi": "Tệp nào sau đây, nằm trong thư mục chính của người dùng, chứa lịch sử Bash?",
    "optionsVi": [
      ".bashrc_history",
      ".bash_histfile",
      ".history",
      ".bash_history",
      ".history_bash"
    ]
  },
  {
    "id": 54,
    "topicId": 1,
    "question": "Which wildcards will match the following filenames? (Choose two.) ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[Ss][02]"
    ],
    "correct": [
      1,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "locate tìm file nhanh bằng cách tra cơ sở dữ liệu (do updatedb tạo). Nhanh hơn find nhưng database có thể lỗi thời. Dùng 'updatedb' để cập nhật.",
      "vi": "locate tìm file nhanh bằng cách tra cơ sở dữ liệu (do updatedb tạo). Nhanh hơn find nhưng database có thể lỗi thời. Dùng 'updatedb' để cập nhật.\n🔑 Keywords: locate | database | fast search | updatedb | mlocate"
    },
    "questionVi": "Ký tự đại diện nào sẽ khớp với tên tệp sau? (Chọn hai.) ttyS0 ttyS1 ttyS2",
    "optionsVi": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[Ss][02]"
    ]
  },
  {
    "id": 55,
    "topicId": 1,
    "question": "Which of the following commands redirects the output of ls to standard error?",
    "options": [
      "ls >-1",
      "ls <",
      "ls >&2",
      "ls >>2",
      "ls |error"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "which tìm đường dẫn tuyệt đối của lệnh trong PATH. whereis tìm binary, source và man page. type xác định loại (alias, function, builtin, file).",
      "vi": "which tìm đường dẫn tuyệt đối của lệnh trong PATH. whereis tìm binary, source và man page. type xác định loại (alias, function, builtin, file).\n🔑 Keywords: which | whereis | type | PATH | command location"
    },
    "questionVi": "Lệnh nào sau đây chuyển hướng đầu ra của ls thành lỗi tiêu chuẩn?",
    "optionsVi": [
      "ls >-1",
      "ls <",
      "ls >&2",
      "ls>>2",
      "ls |lỗi"
    ]
  },
  {
    "id": 56,
    "topicId": 1,
    "question": "Which of the following commands displays the contents of a gzip compressed tar archive?",
    "options": [
      "gzip archive.tgz | tar xvf -",
      "tar -fzt archive.tgz",
      "gzip -d archive.tgz | tar tvf -",
      "tar cf archive.tgz",
      "tar ztf archive.tgz"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "tar -czf archive.tar.gz /path/ tạo archive nén gzip. -x để giải nén, -t để liệt kê, -v để verbose. Nhớ: c=create, x=extract, z=gzip, j=bzip2, J=xz.",
      "vi": "tar -czf archive.tar.gz /path/ tạo archive nén gzip. -x để giải nén, -t để liệt kê, -v để verbose. Nhớ: c=create, x=extract, z=gzip, j=bzip2, J=xz.\n🔑 Keywords: tar | -czf | -xzf | gzip | bzip2 | archive | c x z j J"
    },
    "questionVi": "Lệnh nào sau đây hiển thị nội dung của kho lưu trữ tar nén gzip?",
    "optionsVi": [
      "kho lưu trữ gzip.tgz | tar xvf -",
      "tar -fzt archive.tgz",
      "gzip -d archive.tgz | tar tvf -",
      "tar cf archive.tgz",
      "tar ztf archive.tgz"
    ]
  },
  {
    "id": 57,
    "topicId": 1,
    "question": "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
    "options": [
      "fmt -f 1,4 /etc/passwd",
      "cut -d : -f 1,4 /etc/passwd",
      "sort -t : -k 1,4 /etc/passwd",
      "paste -f 1,4 /etc/passwd",
      "split -c 1,4 /etc/passwd"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "gzip/gunzip nén/giải nén file .gz. bzip2/bunzip2 nén tốt hơn nhưng chậm hơn (.bz2). xz nén tốt nhất nhưng chậm nhất (.xz). compress/uncompress dùng định dạng .Z cũ.",
      "vi": "gzip/gunzip nén/giải nén file .gz. bzip2/bunzip2 nén tốt hơn nhưng chậm hơn (.bz2). xz nén tốt nhất nhưng chậm nhất (.xz). compress/uncompress dùng định dạng .Z cũ.\n🔑 Keywords: gzip | bzip2 | xz | .gz .bz2 .xz | compression ratio"
    },
    "questionVi": "Lệnh nào sau đây in danh sách tên người dùng (cột đầu tiên) và nhóm chính của chúng (cột thứ tư) từ tệp /etc/passwd?",
    "optionsVi": [
      "fmt -f 1,4 /etc/passwd",
      "cắt -d : -f 1,4 /etc/passwd",
      "sắp xếp -t : -k 1,4 /etc/passwd",
      "dán -f 1,4 /etc/passwd",
      "chia -c 1,4 /etc/passwd"
    ]
  },
  {
    "id": 58,
    "topicId": 1,
    "question": "Which of the following regular expressions represents a single upper-case letter?",
    "options": [
      ":UPPER:",
      "[A-Z]",
      "!a-z",
      "%C",
      "{AZ}"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Redirects: > ghi đè (overwrite), >> nối thêm (append), < đọc từ file. Pipes: | kết nối stdout của lệnh này với stdin của lệnh kia. 2> redirect stderr.",
      "vi": "Redirects: > ghi đè (overwrite), >> nối thêm (append), < đọc từ file. Pipes: | kết nối stdout của lệnh này với stdin của lệnh kia. 2> redirect stderr.\n🔑 Keywords: > | >> | < | | | redirect | pipe | stdin stdout stderr"
    },
    "questionVi": "Biểu thức chính quy nào sau đây đại diện cho một chữ cái viết hoa?",
    "optionsVi": [
      ":UPPER:",
      "[A-Z]",
      "!a-z",
      "%C",
      "{AZ}"
    ]
  },
  {
    "id": 59,
    "topicId": 1,
    "question": "Which command is used to start another command with a given nice level? (Specify ONLY the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "nice",
    "explanation": {
      "en": "Biến shell: định nghĩa bằng VAR=value (không dấu cách). export VAR để biến thành environment variable truyền cho process con. unset VAR để xóa biến.",
      "vi": "Biến shell: định nghĩa bằng VAR=value (không dấu cách). export VAR để biến thành environment variable truyền cho process con. unset VAR để xóa biến.\n🔑 Keywords: shell variable | export | environment variable | VAR=value | unset"
    },
    "questionVi": "Lệnh nào được sử dụng để bắt đầu một lệnh khác với mức độ tốt nhất định? (CHỈ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 60,
    "topicId": 1,
    "question": "Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters out all log entries in the time period between 8:00 am and 8:59 am?",
    "options": [
      "grep -E ':08:[09]+:[09]+' loga.log",
      "grep -E ':08:[00]+' loga.log",
      "grep -E loga.log ':08:[0-9]+:[0-9]+'",
      "grep loga.log ':08:[0-9]:[0-9]'",
      "grep -E ':08:[0-9]+:[0-9]+' loga.log"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Bash shebang: dòng đầu script phải là #!/bin/bash (hoặc #!/usr/bin/env bash). chmod +x script.sh để cấp quyền thực thi. Chạy: ./script.sh hoặc bash script.sh.",
      "vi": "Bash shebang: dòng đầu script phải là #!/bin/bash (hoặc #!/usr/bin/env bash). chmod +x script.sh để cấp quyền thực thi. Chạy: ./script.sh hoặc bash script.sh.\n🔑 Keywords: shebang | #!/bin/bash | chmod +x | executable | bash script"
    },
    "questionVi": "Cho một tệp nhật ký loga.log có dấu thời gian có định dạng DD/MM/YYYY:hh:mm:ss, lệnh nào lọc ra tất cả các mục nhật ký trong khoảng thời gian từ 8:00 sáng đến 8:59 sáng?",
    "optionsVi": [
      "grep -E ':08:[09]+:[09]+' loga.log",
      "grep -E ':08:[00]+' loga.log",
      "grep -E loga.log ':08:[0-9]+:[0-9]+'",
      "grep loga.log ':08:[0-9]:[0-9]'",
      "grep -E ':08:[0-9]+:[0-9]+' loga.log"
    ]
  },
  {
    "id": 61,
    "topicId": 1,
    "question": "Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition? (Choose two.)",
    "options": [
      "LABEL",
      "ID",
      "FIND",
      "NAME",
      "UUID"
    ],
    "correct": [
      0,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "if/elif/else/fi là cú pháp điều kiện bash. Dấu cách bắt buộc trong [ condition ]. 'test' tương đương [[ ]]. -eq so sánh số, = so sánh chuỗi, -f kiểm tra file.",
      "vi": "if/elif/else/fi là cú pháp điều kiện bash. Dấu cách bắt buộc trong [ condition ]. 'test' tương đương [[ ]]. -eq so sánh số, = so sánh chuỗi, -f kiểm tra file.\n🔑 Keywords: if elif else fi | [ ] | test | -eq | -f | -d | bash conditionals"
    },
    "questionVi": "Thay vì cung cấp một thiết bị rõ ràng trong /etc/fstab để gắn kết, những tùy chọn nào khác có thể được sử dụng để xác định phân vùng dự định? (Chọn hai.)",
    "optionsVi": [
      "LABEL",
      "ID",
      "FIND",
      "NAME",
      "UUID"
    ]
  },
  {
    "id": 62,
    "topicId": 1,
    "question": "A yum repository can declare sets of related packages. Which yum command installs all packages belonging to the group admintools?",
    "options": [
      "yum pkgsel --install admintools",
      "yum install admintools/*",
      "yum groupinstall admintools",
      "yum taskinstall admintools",
      "yum collection install admintools"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Vòng lặp for: 'for var in list; do ... done'. Vòng lặp while: 'while [ condition ]; do ... done'. break thoát vòng lặp, continue bỏ qua iteration hiện tại.",
      "vi": "Vòng lặp for: 'for var in list; do ... done'. Vòng lặp while: 'while [ condition ]; do ... done'. break thoát vòng lặp, continue bỏ qua iteration hiện tại.\n🔑 Keywords: for loop | while loop | do done | break | continue | bash loops"
    },
    "questionVi": "Kho lưu trữ yum có thể khai báo các tập hợp các gói liên quan. Lệnh yum nào cài đặt tất cả các gói thuộc nhóm admintools?",
    "optionsVi": [
      "yum pkgsel --cài đặt công cụ quản trị",
      "yum cài đặt admintools/*",
      "yum nhóm cài đặt công cụ quản trị",
      "yum taskinstall admintools",
      "bộ sưu tập yum cài đặt công cụ quản trị"
    ]
  },
  {
    "id": 63,
    "topicId": 1,
    "question": "What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "/etc/yum.conf",
    "explanation": {
      "en": "Hàm trong bash: 'function_name() { commands; }' hoặc 'function name { commands; }'. Gọi hàm chỉ cần viết tên. $1,$2... là tham số truyền vào hàm.",
      "vi": "Hàm trong bash: 'function_name() { commands; }' hoặc 'function name { commands; }'. Gọi hàm chỉ cần viết tên. $1,$2... là tham số truyền vào hàm.\n🔑 Keywords: bash function | function() | $1 $2 | parameters | local variable"
    },
    "questionVi": "Thư mục nào chứa các tập tin cấu hình cho kho yum bổ sung? (Chỉ định đường dẫn đầy đủ đến thư mục.)",
    "optionsVi": []
  },
  {
    "id": 64,
    "topicId": 1,
    "question": "Which of the following commands installs the GRUB boot files into the currently active file systems and the boot loader into the first partition of the first disk?",
    "options": [
      "grub-install /dev/sda",
      "grub-install /dev/sda1",
      "grub-install current /dev/sda0",
      "grub-install /dev/sda0",
      "grub-install current /dev/sda1"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "cut cắt phần của mỗi dòng. '-d:' chỉ định delimiter, '-f1' lấy field 1. Ví dụ: cut -d: -f1 /etc/passwd lấy tên user. sort sắp xếp, uniq loại bỏ dòng trùng.",
      "vi": "cut cắt phần của mỗi dòng. '-d:' chỉ định delimiter, '-f1' lấy field 1. Ví dụ: cut -d: -f1 /etc/passwd lấy tên user. sort sắp xếp, uniq loại bỏ dòng trùng.\n🔑 Keywords: cut -d -f | delimiter | field | sort | uniq | text processing"
    },
    "questionVi": "Lệnh nào sau đây cài đặt các tệp khởi động GRUB vào các hệ thống tệp hiện đang hoạt động và bộ tải khởi động vào phân vùng đầu tiên của đĩa đầu tiên?",
    "optionsVi": [
      "cài đặt grub /dev/sda",
      "cài đặt grub /dev/sda1",
      "cài đặt grub hiện tại/dev/sda0",
      "cài đặt grub /dev/sda0",
      "cài đặt grub hiện tại/dev/sda1"
    ]
  },
  {
    "id": 65,
    "topicId": 1,
    "question": "Which of the following files are found in the /boot/ file system? (Choose two.)",
    "options": [
      "Linux kernel images",
      "Bash shell binaries",
      "systemd target and service units",
      "Initial ramdisk images",
      "fsck binaries"
    ],
    "correct": [
      0,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "sed là stream editor. 's/old/new/g' thay thế toàn bộ occurrences, 's/old/new/' chỉ thay thế đầu tiên. '-i' sửa file tại chỗ (in-place). '/pattern/d' xóa dòng.",
      "vi": "sed là stream editor. 's/old/new/g' thay thế toàn bộ occurrences, 's/old/new/' chỉ thay thế đầu tiên. '-i' sửa file tại chỗ (in-place). '/pattern/d' xóa dòng.\n🔑 Keywords: sed | s/old/new/g | stream editor | -i | in-place | substitution"
    },
    "questionVi": "Tệp nào sau đây được tìm thấy trong hệ thống tệp /boot/? (Chọn hai.)",
    "optionsVi": [
      "Hình ảnh hạt nhân Linux",
      "Bash shell nhị phân",
      "đơn vị mục tiêu và dịch vụ systemd",
      "Hình ảnh đĩa RAM ban đầu",
      "nhị phân fsck"
    ]
  },
  {
    "id": 66,
    "topicId": 1,
    "question": "Which file defines the network locations from where the Debian package manager downloads software packages?",
    "options": [
      "/etc/dpkg/dpkg.cfg",
      "/etc/apt/apt.conf.d",
      "/etc/apt/apt.conf",
      "/etc/dpkg/dselect.cfg",
      "/etc/apt/sources.list"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "awk xử lý text theo cột. '$1' là cột 1, '$NF' là cột cuối, 'FS' là field separator. Ví dụ: awk -F: '{print $1}' /etc/passwd in cột 1 với ':' là separator.",
      "vi": "awk xử lý text theo cột. '$1' là cột 1, '$NF' là cột cuối, 'FS' là field separator. Ví dụ: awk -F: '{print $1}' /etc/passwd in cột 1 với ':' là separator.\n🔑 Keywords: awk | $1 $NF | FS field separator | -F: | pattern {action}"
    },
    "questionVi": "Tệp nào xác định vị trí mạng nơi trình quản lý gói Debian tải xuống các gói phần mềm?",
    "optionsVi": [
      "/etc/dpkg/dpkg.cfg",
      "/etc/apt/apt.conf.d",
      "/etc/apt/apt.conf",
      "/etc/dpkg/dselect.cfg",
      "/etc/apt/sources.list"
    ]
  },
  {
    "id": 67,
    "topicId": 1,
    "question": "When removing a package on a system using dpkg package management, which dpkg option ensures configuration files are removed as well?",
    "options": [
      "--clean",
      "--purge",
      "--vacuum",
      "--remove",
      "--declare"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "grep tìm kiếm pattern trong file/stdin. '-i' không phân biệt hoa thường, '-r' đệ quy, '-v' đảo ngược (in dòng KHÔNG match), '-n' số dòng, '-E' extended regex.",
      "vi": "grep tìm kiếm pattern trong file/stdin. '-i' không phân biệt hoa thường, '-r' đệ quy, '-v' đảo ngược (in dòng KHÔNG match), '-n' số dòng, '-E' extended regex.\n🔑 Keywords: grep | -i | -r recursive | -v invert | -n line number | -E regex"
    },
    "questionVi": "Khi xóa một gói trên hệ thống bằng cách sử dụng quản lý gói dpkg, tùy chọn dpkg nào đảm bảo các tệp cấu hình cũng bị xóa?",
    "optionsVi": [
      "--clean",
      "--purge",
      "--vacuum",
      "--remove",
      "--declare"
    ]
  },
  {
    "id": 68,
    "topicId": 1,
    "question": "Which of the following statements are correct when comparing Linux containers with traditional virtual machines (e.g. LXC vs. KVM)? (Choose three.)",
    "options": [
      "Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.",
      "Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.",
      "Containers are completely decoupled from the host system's physical hardware and can only use emulated virtual hardware devices.",
      "The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.",
      "Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Regular expressions: '.' = bất kỳ ký tự, '*' = 0 hoặc nhiều, '+' = 1 hoặc nhiều, '^' = đầu dòng, '$' = cuối dòng, '[abc]' = ký tự trong tập, '\\d' = digit.",
      "vi": "Regular expressions: '.' = bất kỳ ký tự, '*' = 0 hoặc nhiều, '+' = 1 hoặc nhiều, '^' = đầu dòng, '$' = cuối dòng, '[abc]' = ký tự trong tập, '\\d' = digit.\n🔑 Keywords: regex | . * + ^ $ | character class [] | anchors | quantifiers"
    },
    "questionVi": "Câu nào sau đây đúng khi so sánh bộ chứa Linux với máy ảo truyền thống (ví dụ: LXC so với KVM)? (Chọn ba.)",
    "optionsVi": [
      "Các thùng chứa là một phương pháp ảo hóa nhẹ trong đó kernel kiểm soát việc cách ly quy trình và quản lý tài nguyên.",
      "Máy ảo hóa hoàn toàn có thể chạy bất kỳ hệ điều hành nào cho kiến ​​trúc phần cứng cụ thể trong máy ảo.",
      "Các vùng chứa được tách hoàn toàn khỏi phần cứng vật lý của hệ thống máy chủ và chỉ có thể sử dụng các thiết bị phần cứng ảo được mô phỏng.",
      "Môi trường khách cho các máy ảo hóa hoàn toàn được tạo bởi bộ ảo hóa cung cấp các thiết bị phần cứng ảo và mô phỏng.",
      "Các bộ chứa trên cùng một máy chủ có thể sử dụng các hệ điều hành khác nhau, vì bộ ảo hóa bộ chứa tạo ra việc thực thi hạt nhân riêng biệt."
    ]
  },
  {
    "id": 69,
    "topicId": 1,
    "question": "The installation of a local Debian package failed due to unsatisfied dependencies. Which of the following commands installs missing dependencies and completes the interrupted package installation?",
    "options": [
      "dpkg --fix --all",
      "apt-get autoinstall",
      "dpkg-reconfigure --all",
      "apt-get all",
      "apt-get install -f"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Quản lý tiến trình: ps aux hoặc ps -ef liệt kê tất cả process. top/htop theo dõi real-time. kill -9 PID buộc kết thúc. Ctrl+Z suspend, 'bg' chạy background, 'fg' foreground.",
      "vi": "Quản lý tiến trình: ps aux hoặc ps -ef liệt kê tất cả process. top/htop theo dõi real-time. kill -9 PID buộc kết thúc. Ctrl+Z suspend, 'bg' chạy background, 'fg' foreground.\n🔑 Keywords: ps aux | ps -ef | top htop | kill -9 | bg fg | Ctrl+Z"
    },
    "questionVi": "Việc cài đặt gói Debian cục bộ không thành công do các phần phụ thuộc không được thỏa mãn. Lệnh nào sau đây cài đặt các phần phụ thuộc bị thiếu và hoàn tất quá trình cài đặt gói bị gián đoạn?",
    "optionsVi": [
      "dpkg --fix --all",
      "tự động cài đặt apt-get",
      "dpkg-cấu hình lại --all",
      "apt-get tất cả",
      "cài đặt apt-get -f"
    ]
  },
  {
    "id": 70,
    "topicId": 1,
    "question": "Which of the following commands lists all currently installed packages when using RPM package management?",
    "options": [
      "yum --query --all",
      "yum --list --installed",
      "rpm --query --list",
      "rpm --list --installed",
      "rpm --query --all"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "nice/renice điều chỉnh process priority. Nice value: -20 (ưu tiên cao nhất) đến +19 (thấp nhất). nice -n 10 command chạy với priority thấp. renice áp dụng cho process đang chạy.",
      "vi": "nice/renice điều chỉnh process priority. Nice value: -20 (ưu tiên cao nhất) đến +19 (thấp nhất). nice -n 10 command chạy với priority thấp. renice áp dụng cho process đang chạy.\n🔑 Keywords: nice | renice | priority | nice value -20 to +19 | CPU scheduling"
    },
    "questionVi": "Lệnh nào sau đây liệt kê tất cả các gói hiện được cài đặt khi sử dụng quản lý gói RPM?",
    "optionsVi": [
      "ngon --truy vấn --tất cả",
      "yum --list --đã cài đặt",
      "vòng/phút --truy vấn --list",
      "vòng/phút --list --đã cài đặt",
      "vòng/phút --truy vấn --tất cả"
    ]
  },
  {
    "id": 71,
    "topicId": 1,
    "question": "Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)",
    "options": [
      "menuentry",
      "uefi",
      "pxe-ifconfig",
      "insmod",
      "kpartx"
    ],
    "correct": [
      0,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Job control: Ctrl+Z đưa job vào background (suspended), 'bg %1' tiếp tục chạy background, 'fg %1' đưa về foreground, 'jobs' liệt kê các job. & ở cuối lệnh chạy ngay background.",
      "vi": "Job control: Ctrl+Z đưa job vào background (suspended), 'bg %1' tiếp tục chạy background, 'fg %1' đưa về foreground, 'jobs' liệt kê các job. & ở cuối lệnh chạy ngay background.\n🔑 Keywords: job control | Ctrl+Z | bg fg | jobs | & | background foreground"
    },
    "questionVi": "Lệnh nào sau đây hợp lệ trong tệp cấu hình GRUB 2? (Chọn hai.)",
    "optionsVi": [
      "menuentry",
      "uefi",
      "pxe-ifconfig",
      "insmod",
      "kpartx"
    ]
  },
  {
    "id": 72,
    "topicId": 1,
    "question": "What is the purpose of the ldd command?",
    "options": [
      "It lists which shared libraries a binary needs to run.",
      "It installs and updates installed shared libraries.",
      "It turns a dynamically linked binary into a static binary.",
      "It defines which version of a library should be used by default.",
      "It runs a binary with an alternate library search path."
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "nohup lệnh & cho phép lệnh tiếp tục chạy khi bạn logout. Kết hợp với & để chạy background. Output mặc định vào nohup.out. Không bị SIGHUP khi terminal đóng.",
      "vi": "nohup lệnh & cho phép lệnh tiếp tục chạy khi bạn logout. Kết hợp với & để chạy background. Output mặc định vào nohup.out. Không bị SIGHUP khi terminal đóng.\n🔑 Keywords: nohup | SIGHUP | logout | persistent process | nohup.out"
    },
    "questionVi": "Mục đích của lệnh ldd là gì?",
    "optionsVi": [
      "Nó liệt kê những thư viện dùng chung mà tệp nhị phân cần chạy.",
      "Nó cài đặt và cập nhật các thư viện chia sẻ đã cài đặt.",
      "Nó biến một nhị phân được liên kết động thành một nhị phân tĩnh.",
      "Nó xác định phiên bản nào của thư viện sẽ được sử dụng theo mặc định.",
      "Nó chạy tệp nhị phân với đường dẫn tìm kiếm thư viện thay thế."
    ]
  },
  {
    "id": 73,
    "topicId": 1,
    "question": "What can the Logical Volume Manager (LVM) be used for? (Choose three.)",
    "options": [
      "To create snapshots.",
      "To dynamically change the size of logical volumes.",
      "To dynamically create or delete logical volumes.",
      "To create RAID 9 arrays.",
      "To encrypt logical volumes."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Signals: SIGTERM(15)=yêu cầu kết thúc nhẹ nhàng, SIGKILL(9)=buộc kết thúc ngay, SIGHUP(1)=reload config, SIGSTOP(19)=tạm dừng, SIGCONT(18)=tiếp tục. kill gửi signal.",
      "vi": "Signals: SIGTERM(15)=yêu cầu kết thúc nhẹ nhàng, SIGKILL(9)=buộc kết thúc ngay, SIGHUP(1)=reload config, SIGSTOP(19)=tạm dừng, SIGCONT(18)=tiếp tục. kill gửi signal.\n🔑 Keywords: SIGTERM 15 | SIGKILL 9 | SIGHUP 1 | kill | signals | killall"
    },
    "questionVi": "Trình quản lý khối logic (LVM) có thể được sử dụng để làm gì? (Chọn ba.)",
    "optionsVi": [
      "Để tạo ảnh chụp nhanh.",
      "Để tự động thay đổi kích thước của khối hợp lý.",
      "Để tự động tạo hoặc xóa các khối hợp lý.",
      "Để tạo mảng RAID 9.",
      "Để mã hóa khối lượng logic."
    ]
  },
  {
    "id": 74,
    "topicId": 1,
    "question": "What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)",
    "options": [
      "MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.",
      "By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.",
      "By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.",
      "MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.",
      "Both GPT and MBR support up to four primary partitions, each with up to 4096 TB."
    ],
    "correct": [
      1,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "cron là scheduler chạy lệnh định kỳ. Cú pháp crontab: min hour day month weekday command (5 trường thời gian). crontab -e sửa, -l liệt kê, -r xóa crontab của user.",
      "vi": "cron là scheduler chạy lệnh định kỳ. Cú pháp crontab: min hour day month weekday command (5 trường thời gian). crontab -e sửa, -l liệt kê, -r xóa crontab của user.\n🔑 Keywords: cron | crontab -e | 5 time fields | min hour day month weekday | scheduler"
    },
    "questionVi": "Sự khác biệt chính giữa bảng phân vùng GPT và MBR về số lượng và kích thước tối đa của phân vùng là gì? (Chọn hai.)",
    "optionsVi": [
      "MBR có thể xử lý kích thước phân vùng lên tới 4 TB, trong khi GPT hỗ trợ kích thước phân vùng lên tới 128 ZB.",
      "Theo mặc định, GPT có thể quản lý tối đa 128 phân vùng trong khi MBR chỉ hỗ trợ 4 phân vùng chính.",
      "Theo mặc định, GPT có thể quản lý tối đa 64 phân vùng trong khi MBR chỉ hỗ trợ 16 phân vùng chính.",
      "MBR có thể xử lý kích thước phân vùng lên tới 2,2 TB, trong khi GPT hỗ trợ kích thước phân vùng lên tới 9,4 ZB.",
      "Cả GPT và MBR đều hỗ trợ tối đa bốn phân vùng chính, mỗi phân vùng có dung lượng lên tới 4096 TB."
    ]
  },
  {
    "id": 75,
    "topicId": 1,
    "question": "A backup software heavily uses hard links between files which have not been changed in between two backup runs. Which benefits are realized due to these hard links? (Choose two.)",
    "options": [
      "The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.",
      "The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.",
      "The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation.",
      "The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.",
      "The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data."
    ],
    "correct": [
      3,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "at chạy lệnh MỘT LẦN vào thời điểm cụ thể. 'at now + 1 hour', 'at 14:30'. atq liệt kê jobs, atrm xóa. Cron dùng cho lệnh lặp lại, at dùng cho lệnh chạy một lần.",
      "vi": "at chạy lệnh MỘT LẦN vào thời điểm cụ thể. 'at now + 1 hour', 'at 14:30'. atq liệt kê jobs, atrm xóa. Cron dùng cho lệnh lặp lại, at dùng cho lệnh chạy một lần.\n🔑 Keywords: at | one-time job | atq | atrm | at now + 1 hour | at vs cron"
    },
    "questionVi": "Phần mềm sao lưu sử dụng nhiều liên kết cứng giữa các tệp chưa được thay đổi giữa hai lần chạy sao lưu. Những lợi ích nào được nhận ra nhờ các liên kết cứng này? (Chọn hai.)",
    "optionsVi": [
      "Các bản sao lưu cũ có thể được chuyển sang phương tiện sao lưu chậm, chẳng hạn như băng, trong khi vẫn đóng vai trò là mục tiêu liên kết cứng trong các bản sao lưu mới.",
      "Quá trình sao lưu chạy nhanh hơn vì các liên kết cứng hoạt động không đồng bộ, trì hoãn hoạt động sao chép đến một thời điểm muộn hơn.",
      "Bản sao lưu được đảm bảo không bị tính phí vì không thể sửa đổi tệp liên kết cứng sau khi tạo.",
      "Bản sao lưu tiêu tốn ít dung lượng hơn vì các liên kết cứng trỏ đến cùng một dữ liệu trên đĩa thay vì lưu trữ các bản sao dự phòng.",
      "Quá trình sao lưu chạy nhanh hơn vì thay vì sao chép dữ liệu của từng tệp, các liên kết cứng chỉ thay đổi dữ liệu meta hệ thống tệp."
    ]
  },
  {
    "id": 76,
    "topicId": 1,
    "question": "Which file from the /proc/ file system contains a list of all currently mounted devices? (Specify the full name of the file, including path.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "/proc/mounts",
    "explanation": {
      "en": "anacron chạy các cron job bị bỏ lỡ (khi máy tắt) khi khởi động lại. Cấu hình trong /etc/anacrontab. Khác cron: không cần thời điểm cụ thể mà dùng khoảng cách ngày.",
      "vi": "anacron chạy các cron job bị bỏ lỡ (khi máy tắt) khi khởi động lại. Cấu hình trong /etc/anacrontab. Khác cron: không cần thời điểm cụ thể mà dùng khoảng cách ngày.\n🔑 Keywords: anacron | missed jobs | /etc/anacrontab | daily weekly monthly | delay"
    },
    "questionVi": "Tệp nào trong hệ thống tệp /proc/ chứa danh sách tất cả các thiết bị hiện được gắn? (Chỉ định tên đầy đủ của tệp, bao gồm cả đường dẫn.)",
    "optionsVi": []
  },
  {
    "id": 77,
    "topicId": 1,
    "question": "How many fields are in a syntactically correct line of /etc/fstab?",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "systemd timer là thay thế hiện đại cho cron. File .timer cùng .service. 'systemctl list-timers' liệt kê timers. OnCalendar= chỉ định lịch, OnBootSec= sau khi boot.",
      "vi": "systemd timer là thay thế hiện đại cho cron. File .timer cùng .service. 'systemctl list-timers' liệt kê timers. OnCalendar= chỉ định lịch, OnBootSec= sau khi boot.\n🔑 Keywords: systemd timer | .timer unit | .service unit | OnCalendar | systemctl list-timers"
    },
    "questionVi": "Có bao nhiêu trường trong một dòng đúng cú pháp của /etc/fstab?",
    "optionsVi": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ]
  },
  {
    "id": 78,
    "topicId": 1,
    "question": "Running chmod 640 filea.txt as a regular user doesn't update filea.txt's permission. What might be a reason why chmod cannot modify the permissions? (Choose two.)",
    "options": [
      "filea.txt is owned by another user and a regular user cannot change the permissions of another user's file.",
      "filea.txt is a symbolic link whose permissions are a fixed value which cannot be charged.",
      "filea.txt has the sticky bit set and a regular user cannot remove this permission.",
      "filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.",
      "filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file."
    ],
    "correct": [
      0,
      1
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Các lệnh quản lý package Debian/Ubuntu: dpkg (low-level), apt/apt-get (high-level với dependency), aptitude. apt install, apt remove (giữ config), apt purge (xóa cả config).",
      "vi": "Các lệnh quản lý package Debian/Ubuntu: dpkg (low-level), apt/apt-get (high-level với dependency), aptitude. apt install, apt remove (giữ config), apt purge (xóa cả config).\n🔑 Keywords: dpkg | apt | apt-get | apt install | apt remove | apt purge | Debian Ubuntu"
    },
    "questionVi": "Chạy chmod 640 filea.txt với tư cách người dùng thông thường sẽ không cập nhật quyền của filea.txt. Lý do có thể khiến chmod không thể sửa đổi quyền là gì? (Chọn hai.)",
    "optionsVi": [
      "filea.txt thuộc sở hữu của người dùng khác và người dùng thông thường không thể thay đổi quyền đối với tệp của người dùng khác.",
      "filea.txt là một liên kết tượng trưng có quyền là một giá trị cố định không thể tính phí.",
      "filea.txt có tập bit dính và người dùng thông thường không thể xóa quyền này.",
      "filea.txt là một liên kết cứng có quyền được kế thừa từ mục tiêu và không thể đặt trực tiếp.",
      "filea.txt có tập bit SetUID áp đặt hạn chế rằng chỉ người dùng root mới có thể thực hiện thay đổi đối với tệp."
    ]
  },
  {
    "id": 79,
    "topicId": 1,
    "question": "Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new filesystem instead of generating them as needed? (Choose two.)",
    "options": [
      "JFS",
      "ext3",
      "XFS",
      "ext2",
      "procfs"
    ],
    "correct": [
      1,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "dpkg -i cài .deb package, dpkg -l liệt kê packages đã cài, dpkg -r remove package, dpkg -L liệt kê files của package, dpkg -S tìm package chứa file.",
      "vi": "dpkg -i cài .deb package, dpkg -l liệt kê packages đã cài, dpkg -r remove package, dpkg -L liệt kê files của package, dpkg -S tìm package chứa file.\n🔑 Keywords: dpkg -i install | dpkg -l list | dpkg -r remove | dpkg -L files | dpkg -S search"
    },
    "questionVi": "Hệ thống tệp Linux nào sau đây phân bổ trước một số nút cố định khi tạo hệ thống tệp mới thay vì tạo chúng khi cần? (Chọn hai.)",
    "optionsVi": [
      "JFS",
      "ext3",
      "XFS",
      "ext2",
      "procfs"
    ]
  },
  {
    "id": 80,
    "topicId": 1,
    "question": "Which of the following commands sets the SetUID permission on the executable /bin/foo?",
    "options": [
      "chmod 4755 /bin/foo",
      "chmod 1755 /bin/foo",
      "chmod u-s /bin/foo",
      "chmod 755+s /bin/foo",
      "chmod 2755 /bin/foo"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "rpm (Red Hat Package Manager): -i install, -U upgrade, -e erase/remove, -q query, -V verify. rpm -qa liệt kê tất cả, rpm -ql <pkg> liệt kê files, rpm -qf <file> tìm package.",
      "vi": "rpm (Red Hat Package Manager): -i install, -U upgrade, -e erase/remove, -q query, -V verify. rpm -qa liệt kê tất cả, rpm -ql <pkg> liệt kê files, rpm -qf <file> tìm package.\n🔑 Keywords: rpm | -i -U -e | -q query | -qa all | -ql files | -qf find | Red Hat"
    },
    "questionVi": "Lệnh nào sau đây đặt quyền SetUID trên tệp thực thi /bin/foo?",
    "optionsVi": [
      "chmod 4755/bin/foo",
      "chmod 1755/bin/foo",
      "chmod u-s /bin/foo",
      "chmod 755+s /bin/foo",
      "chmod 2755/bin/foo"
    ]
  },
  {
    "id": 81,
    "topicId": 1,
    "question": "Which of the following commands can be used to display the inode number of a given file? (Choose two.)",
    "options": [
      "inode",
      "ln",
      "ls",
      "cp",
      "stat"
    ],
    "correct": [
      2,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "yum (CentOS/RHEL) và dnf (Fedora/RHEL8+) là package managers cao cấp tự giải quyết dependency. 'yum install', 'yum update', 'yum search', 'yum info', 'yum list installed'.",
      "vi": "yum (CentOS/RHEL) và dnf (Fedora/RHEL8+) là package managers cao cấp tự giải quyết dependency. 'yum install', 'yum update', 'yum search', 'yum info', 'yum list installed'.\n🔑 Keywords: yum | dnf | dependency resolution | yum install update search | RPM-based"
    },
    "questionVi": "Lệnh nào sau đây có thể được sử dụng để hiển thị số inode của một tệp nhất định? (Chọn hai.)",
    "optionsVi": [
      "inode",
      "ln",
      "ls",
      "cp",
      "stat"
    ]
  },
  {
    "id": 82,
    "topicId": 1,
    "question": "Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?",
    "options": [
      "0017",
      "0640",
      "0038",
      "0227",
      "0027"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "zypper là package manager của SUSE/openSUSE (RPM-based). Lệnh: zypper install (in), zypper remove (rm), zypper update (up), zypper search (se), zypper repos (lr).",
      "vi": "zypper là package manager của SUSE/openSUSE (RPM-based). Lệnh: zypper install (in), zypper remove (rm), zypper update (up), zypper search (se), zypper repos (lr).\n🔑 Keywords: zypper | SUSE openSUSE | zypper install remove update search | RPM"
    },
    "questionVi": "Cài đặt nào sau đây cho umask đảm bảo rằng các tệp mới có quyền mặc định -rw-r----?",
    "optionsVi": [
      "0017",
      "0640",
      "0038",
      "0227",
      "0027"
    ]
  },
  {
    "id": 83,
    "topicId": 1,
    "question": "After a power outage, the XFS file system of /dev/sda3 is inconsistent. How can the existing file system errors be fixed?",
    "options": [
      "By using mount -f to force a mount of the file system",
      "By running xfsck on the file system",
      "By mounting the file system with the option xfs_repair",
      "By running xfsadmin repair on the file system",
      "By running xfs_repair on the file system"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/etc/apt/sources.list và các file trong /etc/apt/sources.list.d/ chứa danh sách repository của apt. Format: 'deb [url] [distribution] [components]'.",
      "vi": "/etc/apt/sources.list và các file trong /etc/apt/sources.list.d/ chứa danh sách repository của apt. Format: 'deb [url] [distribution] [components]'.\n🔑 Keywords: /etc/apt/sources.list | repository | deb | apt update | sources.list.d"
    },
    "questionVi": "Sau khi mất điện, hệ thống tệp XFS của /dev/sda3 không nhất quán. Làm cách nào để sửa các lỗi hệ thống tập tin hiện có?",
    "optionsVi": [
      "Bằng cách sử dụng mount -f để buộc gắn kết hệ thống tập tin",
      "Bằng cách chạy xfsck trên hệ thống tập tin",
      "Bằng cách gắn hệ thống tệp với tùy chọn xfs_repair",
      "Bằng cách chạy xfsadmin repair trên hệ thống tập tin",
      "Bằng cách chạy xfs_repair trên hệ thống tệp"
    ]
  },
  {
    "id": 84,
    "topicId": 1,
    "question": "Which of the following properties of an existing file changes when a hard link pointing to that file is created?",
    "options": [
      "File size",
      "Link count",
      "Modify timestamp",
      "Inode number",
      "Permissions"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "apt-cache search tìm kiếm trong repository, apt-cache show hiển thị thông tin package, apt-cache depends hiển thị dependency. Chỉ đọc cache, không thay đổi hệ thống.",
      "vi": "apt-cache search tìm kiếm trong repository, apt-cache show hiển thị thông tin package, apt-cache depends hiển thị dependency. Chỉ đọc cache, không thay đổi hệ thống.\n🔑 Keywords: apt-cache search | apt-cache show | apt-cache depends | package info"
    },
    "questionVi": "Thuộc tính nào sau đây của tệp hiện có thay đổi khi liên kết cứng trỏ đến tệp đó được tạo?",
    "optionsVi": [
      "Kích thước tệp",
      "Số lượng liên kết",
      "Sửa đổi dấu thời gian",
      "số nút",
      "Permissions"
    ]
  },
  {
    "id": 85,
    "topicId": 1,
    "question": "Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by the system administrator be placed in order to be made available to all users on the system? (Specify the full path to the directory.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "/usr/local/bin/",
    "explanation": {
      "en": "Shared libraries (.so files) trong Linux. ldconfig cập nhật cache đường dẫn thư viện. /etc/ld.so.conf chứa thư mục tìm kiếm. LD_LIBRARY_PATH để chỉ định tạm thời.",
      "vi": "Shared libraries (.so files) trong Linux. ldconfig cập nhật cache đường dẫn thư viện. /etc/ld.so.conf chứa thư mục tìm kiếm. LD_LIBRARY_PATH để chỉ định tạm thời.\n🔑 Keywords: shared library | .so | ldconfig | /etc/ld.so.conf | LD_LIBRARY_PATH"
    },
    "questionVi": "Theo Tiêu chuẩn phân cấp hệ thống tập tin (FHS), các tệp nhị phân đã được quản trị viên hệ thống biên dịch nên đặt ở đâu để có sẵn cho tất cả người dùng trên hệ thống? (Chỉ định đường dẫn đầy đủ đến thư mục.)",
    "optionsVi": []
  },
  {
    "id": 86,
    "topicId": 1,
    "question": "Which of the following commands show how the shell handles a specific command?",
    "options": [
      "where",
      "type",
      "stat",
      "case",
      "fileinfo"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ldd hiển thị shared libraries mà một binary phụ thuộc vào. Hữu ích để debug 'library not found' errors. ldd không nên dùng với file untrusted (security risk).",
      "vi": "ldd hiển thị shared libraries mà một binary phụ thuộc vào. Hữu ích để debug 'library not found' errors. ldd không nên dùng với file untrusted (security risk).\n🔑 Keywords: ldd | shared library dependencies | library not found | binary dependencies"
    },
    "questionVi": "Lệnh nào sau đây cho biết cách shell xử lý một lệnh cụ thể?",
    "optionsVi": [
      "where",
      "type",
      "stat",
      "case",
      "fileinfo"
    ]
  },
  {
    "id": 87,
    "topicId": 1,
    "question": "When in Normal mode in vi, which character can be used to begin a reverse search of the text?",
    "options": [
      "r",
      "/",
      "F",
      "?",
      "s"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "make là build automation tool. Đọc Makefile để biết cách build. 'make' build target mặc định, 'make install' cài vào hệ thống, 'make clean' xóa file tạm. ./configure trước make.",
      "vi": "make là build automation tool. Đọc Makefile để biết cách build. 'make' build target mặc định, 'make install' cài vào hệ thống, 'make clean' xóa file tạm. ./configure trước make.\n🔑 Keywords: make | Makefile | make install | make clean | ./configure | build from source"
    },
    "questionVi": "Khi ở chế độ Bình thường trong vi, ký tự nào có thể được sử dụng để bắt đầu tìm kiếm ngược văn bản?",
    "optionsVi": [
      "r",
      "/",
      "F",
      "?",
      "s"
    ]
  },
  {
    "id": 88,
    "topicId": 1,
    "question": "Which of the following commands displays the manual page command from section 1?",
    "options": [
      "man command(1)",
      "man command@1",
      "man 1 command",
      "man 1.command",
      "man -s 1 command"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Trình tự compile từ source: ./configure (kiểm tra dependencies, tạo Makefile) → make (biên dịch) → make install (cài vào /usr/local/ mặc định). Cần gcc và build-essential.",
      "vi": "Trình tự compile từ source: ./configure (kiểm tra dependencies, tạo Makefile) → make (biên dịch) → make install (cài vào /usr/local/ mặc định). Cần gcc và build-essential.\n🔑 Keywords: ./configure | make | make install | source compilation | /usr/local/ | gcc"
    },
    "questionVi": "Lệnh nào sau đây hiển thị lệnh trang thủ công từ phần 1?",
    "optionsVi": [
      "lệnh người đàn ông(1)",
      "người đàn ông lệnh@1",
      "người đàn ông 1 lệnh",
      "người đàn ông 1.command",
      "người đàn ông -s 1 lệnh"
    ]
  },
  {
    "id": 89,
    "topicId": 1,
    "question": "Which of the following commands creates or, in case it already exists, overwrites a file called data with the output of ls?",
    "options": [
      "ls 3> data",
      "ls >& data",
      "ls > data",
      "ls >> data",
      "ls >>> data"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Trong bash, '\"$var\"' (double quotes) giữ nguyên giá trị biến nhưng cho phép variable expansion. '$var' không có quotes có thể bị word splitting. '$?' là exit code lệnh cuối.",
      "vi": "Trong bash, '\"$var\"' (double quotes) giữ nguyên giá trị biến nhưng cho phép variable expansion. '$var' không có quotes có thể bị word splitting. '$?' là exit code lệnh cuối.\n🔑 Keywords: double quotes | variable expansion | word splitting | $? | exit code"
    },
    "questionVi": "Lệnh nào sau đây tạo ra hoặc, trong trường hợp nó đã tồn tại, sẽ ghi đè lên một tệp có tên data với đầu ra là ls?",
    "optionsVi": [
      "ls 3> dữ liệu",
      "ls >& dữ liệu",
      "ls > dữ liệu",
      "ls >> dữ liệu",
      "ls >>> dữ liệu"
    ]
  },
  {
    "id": 90,
    "topicId": 1,
    "question": "Which of the following commands is used to change options and positional parameters within a running Bash shell?",
    "options": [
      "history",
      "setsh",
      "bashconf",
      "set",
      "envsetup"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Aliases được định nghĩa bằng 'alias name=command'. Lưu trong ~/.bashrc để persistence. 'alias' (không tham số) liệt kê tất cả aliases. 'unalias' để xóa.",
      "vi": "Aliases được định nghĩa bằng 'alias name=command'. Lưu trong ~/.bashrc để persistence. 'alias' (không tham số) liệt kê tất cả aliases. 'unalias' để xóa.\n🔑 Keywords: alias | ~/.bashrc | unalias | command shortcut | persistent alias"
    },
    "questionVi": "Lệnh nào sau đây được sử dụng để thay đổi các tùy chọn và tham số vị trí trong shell Bash đang chạy?",
    "optionsVi": [
      "history",
      "setsh",
      "bashconf",
      "set",
      "envsetup"
    ]
  },
  {
    "id": 91,
    "topicId": 1,
    "question": "Which of the following commands display the IDs of all processes owned by root? (Choose two.)",
    "options": [
      "pgrep -c root",
      "pgrep -u root",
      "pgrep -f root",
      "pgrep -U 0",
      "pgrep -c 0"
    ],
    "correct": [
      1,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Bash history: ~/.bash_history lưu lịch sử lệnh. 'history' liệt kê, '!!' chạy lệnh cuối, '!n' chạy lệnh số n, Ctrl+R tìm kiếm ngược. HISTSIZE kiểm soát số lệnh lưu.",
      "vi": "Bash history: ~/.bash_history lưu lịch sử lệnh. 'history' liệt kê, '!!' chạy lệnh cuối, '!n' chạy lệnh số n, Ctrl+R tìm kiếm ngược. HISTSIZE kiểm soát số lệnh lưu.\n🔑 Keywords: history | ~/.bash_history | !! | Ctrl+R | HISTSIZE | HISTFILESIZE"
    },
    "questionVi": "Lệnh nào sau đây hiển thị ID của tất cả các tiến trình do root sở hữu? (Chọn hai.)",
    "optionsVi": [
      "pgrep -c gốc",
      "pgrep -u gốc",
      "gốc pgrep -f",
      "pgrep -U 0",
      "pgrep -c 0"
    ]
  },
  {
    "id": 92,
    "topicId": 1,
    "question": "Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose two.)",
    "options": [
      "Ctrl XX",
      "Ctrl :W",
      "Esc zz",
      "Esc :wq",
      "Esc ZZ"
    ],
    "correct": [
      3,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "PS1 là biến điều khiển prompt của bash. Ký tự đặc biệt: \\u (username), \\h (hostname), \\w (working directory), \\$ (# nếu root). Lưu vào ~/.bashrc.",
      "vi": "PS1 là biến điều khiển prompt của bash. Ký tự đặc biệt: \\u (username), \\h (hostname), \\w (working directory), \\$ (# nếu root). Lưu vào ~/.bashrc.\n🔑 Keywords: PS1 | prompt | \\u \\h \\w | ~/.bashrc | bash prompt customization"
    },
    "questionVi": "Trình tự nào sau đây trong trình soạn thảo vi lưu tài liệu đã mở và thoát khỏi trình soạn thảo? (Chọn hai.)",
    "optionsVi": [
      "Ctrl XX",
      "Ctrl :W",
      "Esc zz",
      "Esc :wq",
      "Esc ZZ"
    ]
  },
  {
    "id": 93,
    "topicId": 1,
    "question": "What is the effect of the -v option for the grep command?",
    "options": [
      "It enables color to highlight matching parts.",
      "It shows the command's version information.",
      "It only outputs non-matching lines.",
      "It changes the output order showing the last matching line first.",
      "It outputs all lines and prefixes matching lines with a+."
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/etc/profile chạy khi login shell bắt đầu. ~/.bash_profile hoặc ~/.profile cho user-specific. ~/.bashrc chạy cho non-login interactive shell. /etc/bash.bashrc cho tất cả users.",
      "vi": "/etc/profile chạy khi login shell bắt đầu. ~/.bash_profile hoặc ~/.profile cho user-specific. ~/.bashrc chạy cho non-login interactive shell. /etc/bash.bashrc cho tất cả users.\n🔑 Keywords: /etc/profile | ~/.bash_profile | ~/.bashrc | login shell | interactive shell"
    },
    "questionVi": "Tác dụng của tùy chọn -v đối với lệnh grep là gì?",
    "optionsVi": [
      "Nó cho phép màu sắc làm nổi bật các phần phù hợp.",
      "Nó hiển thị thông tin phiên bản của lệnh.",
      "Nó chỉ xuất ra các dòng không khớp.",
      "Nó thay đổi thứ tự đầu ra hiển thị dòng khớp cuối cùng trước tiên.",
      "Nó xuất ra tất cả các dòng và tiền tố phù hợp với các dòng có a+."
    ]
  },
  {
    "id": 94,
    "topicId": 1,
    "question": "Which of the following tools can show the complete path of an executable file that the current shell would execute when starting a command without specifying its complete path? (Choose two.)",
    "options": [
      "find",
      "pwd",
      "which",
      "locate",
      "type"
    ],
    "correct": [
      2,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "source hoặc . (dot) thực thi script trong shell hiện tại (không tạo subshell). Dùng để áp dụng thay đổi từ .bashrc ngay mà không cần logout. '. ~/.bashrc' tương đương 'source ~/.bashrc'.",
      "vi": "source hoặc . (dot) thực thi script trong shell hiện tại (không tạo subshell). Dùng để áp dụng thay đổi từ .bashrc ngay mà không cần logout. '. ~/.bashrc' tương đương 'source ~/.bashrc'.\n🔑 Keywords: source | dot command | . | current shell | no subshell | . ~/.bashrc"
    },
    "questionVi": "Công cụ nào sau đây có thể hiển thị đường dẫn đầy đủ của tệp thực thi mà shell hiện tại sẽ thực thi khi bắt đầu lệnh mà không chỉ định đường dẫn đầy đủ của nó? (Chọn hai.)",
    "optionsVi": [
      "find",
      "pwd",
      "which",
      "locate",
      "type"
    ]
  },
  {
    "id": 95,
    "topicId": 1,
    "question": "Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the keyboard?",
    "options": [
      "SIGTERM",
      "SIGCONT",
      "SIGSTOP",
      "SIGKILL",
      "SIGINT"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "X Window System: X server quản lý display hardware, X client là ứng dụng. DISPLAY variable (ví dụ: :0) xác định display. Xorg là implementation phổ biến của X.",
      "vi": "X Window System: X server quản lý display hardware, X client là ứng dụng. DISPLAY variable (ví dụ: :0) xác định display. Xorg là implementation phổ biến của X.\n🔑 Keywords: X Window | X server | X client | DISPLAY | Xorg | :0"
    },
    "questionVi": "Tín hiệu nào sau đây được gửi tới một tiến trình khi nhấn tổ hợp phím Ctrl+Z trên bàn phím?",
    "optionsVi": [
      "SIGTERM",
      "SIGCONT",
      "SIGSTOP",
      "SIGKILL",
      "SIGINT"
    ]
  },
  {
    "id": 96,
    "topicId": 1,
    "question": "What is the output when the regular expression s/[ABC] [abc]/xx/ is applied to the following string?ABCabc -",
    "options": [
      "ABxxbc",
      "xxCxxc",
      "xxxxxx",
      "ABCabc",
      "Axxaxx"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Display Manager (DM) là màn hình đăng nhập đồ họa. Các DM phổ biến: GDM (GNOME), KDM/SDDM (KDE), LightDM, XDM. DM khởi động X server và cho phép chọn desktop environment.",
      "vi": "Display Manager (DM) là màn hình đăng nhập đồ họa. Các DM phổ biến: GDM (GNOME), KDM/SDDM (KDE), LightDM, XDM. DM khởi động X server và cho phép chọn desktop environment.\n🔑 Keywords: Display Manager | GDM | SDDM | LightDM | login screen | X server"
    },
    "questionVi": "Kết quả đầu ra khi áp dụng biểu thức chính quy s/[ABC] [abc]/xx/ cho chuỗi sau là gì? ABCabc -",
    "optionsVi": [
      "ABxxbc",
      "xxCxxc",
      "xxxxxx",
      "ABCabc",
      "Axxaxx"
    ]
  },
  {
    "id": 97,
    "topicId": 1,
    "question": "Which of the following commands print the current working directory when using a Bash shell? (Choose two.)",
    "options": [
      "echo \"${PWD}\"",
      "echo \"${WD}\"",
      "printwd",
      "pwd",
      "echo \"${pwd}\""
    ],
    "correct": [
      0,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Desktop Environments phổ biến: GNOME, KDE/Plasma, XFCE (nhẹ), LXDE/LXQt (rất nhẹ), Cinnamon (Mint), MATE. Window managers: Openbox, i3, Fluxbox.",
      "vi": "Desktop Environments phổ biến: GNOME, KDE/Plasma, XFCE (nhẹ), LXDE/LXQt (rất nhẹ), Cinnamon (Mint), MATE. Window managers: Openbox, i3, Fluxbox.\n🔑 Keywords: GNOME | KDE Plasma | XFCE | LXDE | desktop environment | window manager"
    },
    "questionVi": "Lệnh nào sau đây in thư mục làm việc hiện tại khi sử dụng shell Bash? (Chọn hai.)",
    "optionsVi": [
      "echo \"${PWD}\"",
      "tiếng vang \"${WD}\"",
      "printwd",
      "pwd",
      "tiếng vang \"${pwd}\""
    ]
  },
  {
    "id": 98,
    "topicId": 1,
    "question": "Which of the following commands outputs test to the shell?",
    "options": [
      "cat testEOT -",
      "cat <|EOTtestEOT -",
      "cat !testEOT -",
      "cat &testEOT -",
      "cat <testEOT -"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "~/.Xauthority chứa MIT-MAGIC-COOKIE authentication cho X session. xauth dùng để quản lý. Khi SSH với X forwarding (-X), cookie được chia sẻ để cho phép kết nối.",
      "vi": "~/.Xauthority chứa MIT-MAGIC-COOKIE authentication cho X session. xauth dùng để quản lý. Khi SSH với X forwarding (-X), cookie được chia sẻ để cho phép kết nối.\n🔑 Keywords: ~/.Xauthority | MIT-MAGIC-COOKIE | xauth | X forwarding | SSH -X"
    },
    "questionVi": "Lệnh nào sau đây xuất kết quả kiểm tra ra shell?",
    "optionsVi": [
      "kiểm tra mèoEOT -",
      "mèo <|EOTtestEOT -",
      "mèo !testEOT -",
      "mèo &kiểm traEOT -",
      "mèo <testEOT -"
    ]
  },
  {
    "id": 99,
    "topicId": 1,
    "question": "What is the default nice level when a process is started using the nice command?",
    "options": [
      "-10",
      "0",
      "10",
      "15",
      "20"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "CUPS (Common Unix Printing System) quản lý in ấn trong Linux. Web interface tại http://localhost:631. Lệnh: lpr in file, lpq xem queue, lprm xóa job, lpstat xem trạng thái.",
      "vi": "CUPS (Common Unix Printing System) quản lý in ấn trong Linux. Web interface tại http://localhost:631. Lệnh: lpr in file, lpq xem queue, lprm xóa job, lpstat xem trạng thái.\n🔑 Keywords: CUPS | printing | http://localhost:631 | lpr | lpq | lprm | lpstat"
    },
    "questionVi": "Mức Nice mặc định khi một tiến trình được bắt đầu bằng lệnh Nice là gì?",
    "optionsVi": [
      "-10",
      "0",
      "10",
      "15",
      "20"
    ]
  },
  {
    "id": 100,
    "topicId": 1,
    "question": "A user accidentally created the subdirectory \\dir in his home directory. Which of the following commands will remote that directory?",
    "options": [
      "rmdir ~/\\\\dir",
      "rmdir \"~/\\dir\"",
      "rmdir ~/'dir'",
      "rmdir ~/\\dir",
      "rmdir '~/\\dir'"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "lp là lệnh in file. '-d printer_name' chỉ định máy in, '-n N' số bản in. lpr tương tự nhưng cú pháp BSD. Cả hai gửi job đến CUPS daemon.",
      "vi": "lp là lệnh in file. '-d printer_name' chỉ định máy in, '-n N' số bản in. lpr tương tự nhưng cú pháp BSD. Cả hai gửi job đến CUPS daemon.\n🔑 Keywords: lp | lpr | -d printer | -n copies | CUPS | print job"
    },
    "questionVi": "Một người dùng vô tình tạo thư mục con \\dir trong thư mục chính của mình. Lệnh nào sau đây sẽ điều khiển thư mục đó?",
    "optionsVi": [
      "rmdir ~/\\\\dir",
      "rmdir \"~/\\dir\"",
      "rmdir ~/'dir'",
      "rmdir ~/\\dir",
      "rmdir '~/\\dir'"
    ]
  },
  {
    "id": 101,
    "topicId": 1,
    "question": "Which of the following commands can perform searches on file contents using regular expressions?",
    "options": [
      "find",
      "locate",
      "grep",
      "reggrep",
      "pgrep"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/etc/passwd: format là username:password:UID:GID:GECOS:home:shell. Password thực thường là 'x' (stored in /etc/shadow). /etc/shadow chứa hashed password + expiry.",
      "vi": "/etc/passwd: format là username:password:UID:GID:GECOS:home:shell. Password thực thường là 'x' (stored in /etc/shadow). /etc/shadow chứa hashed password + expiry.\n🔑 Keywords: /etc/passwd | /etc/shadow | UID GID | home | shell | x placeholder"
    },
    "questionVi": "Lệnh nào sau đây có thể thực hiện tìm kiếm nội dung tệp bằng biểu thức chính quy?",
    "optionsVi": [
      "find",
      "locate",
      "grep",
      "reggrep",
      "pgrep"
    ]
  },
  {
    "id": 102,
    "topicId": 1,
    "question": "In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?",
    "options": [
      "-maxdepth",
      "-dirmax",
      "-maxlevels",
      "-s",
      "-n"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "useradd tạo user mới. Các tùy chọn quan trọng: -m tạo home dir, -s chỉ định shell, -G thêm vào groups, -u chỉ định UID. usermod sửa user hiện có, userdel xóa.",
      "vi": "useradd tạo user mới. Các tùy chọn quan trọng: -m tạo home dir, -s chỉ định shell, -G thêm vào groups, -u chỉ định UID. usermod sửa user hiện có, userdel xóa.\n🔑 Keywords: useradd | -m home | -s shell | -G groups | -u UID | usermod | userdel"
    },
    "questionVi": "Trong cấu trúc thư mục lồng nhau, tùy chọn dòng lệnh find nào sẽ được sử dụng để hạn chế lệnh tìm kiếm một số thư mục con cụ thể?",
    "optionsVi": [
      "-maxdepth",
      "-dirmax",
      "-maxlevels",
      "-s",
      "-n"
    ]
  },
  {
    "id": 103,
    "topicId": 1,
    "question": "Which of the following commands determines a file's format by using a definition database file which contains information about all common file types?",
    "options": [
      "type",
      "file",
      "magic",
      "pmagic",
      "hash"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "passwd thay đổi password. 'passwd username' (root thay cho user khác), 'passwd' (user đổi của mình). '-l' lock, '-u' unlock, '-e' expire ngay (buộc đổi lần sau login).",
      "vi": "passwd thay đổi password. 'passwd username' (root thay cho user khác), 'passwd' (user đổi của mình). '-l' lock, '-u' unlock, '-e' expire ngay (buộc đổi lần sau login).\n🔑 Keywords: passwd | change password | -l lock | -u unlock | -e expire | password management"
    },
    "questionVi": "Lệnh nào sau đây xác định định dạng của tệp bằng cách sử dụng tệp cơ sở dữ liệu định nghĩa chứa thông tin về tất cả các loại tệp phổ biến?",
    "optionsVi": [
      "type",
      "file",
      "magic",
      "pmagic",
      "hash"
    ]
  },
  {
    "id": 104,
    "topicId": 1,
    "question": "Which of the following commands generates a list of user names from /etc/passwd along with their login shell?",
    "options": [
      "column -s : 1,7 /etc/passwd",
      "chop -c 1,7 /etc/passwd",
      "colrm 1,7 /etc/passwd",
      "sort -t: -k1,7 /etc/passwd",
      "cut -d: -f1,7 /etc/passwd"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "groupadd tạo group mới, groupmod sửa, groupdel xóa. /etc/group: format là groupname:password:GID:members. 'usermod -aG groupname username' thêm user vào group.",
      "vi": "groupadd tạo group mới, groupmod sửa, groupdel xóa. /etc/group: format là groupname:password:GID:members. 'usermod -aG groupname username' thêm user vào group.\n🔑 Keywords: groupadd groupmod groupdel | /etc/group | GID | usermod -aG | group membership"
    },
    "questionVi": "Lệnh nào sau đây tạo danh sách tên người dùng từ /etc/passwd cùng với shell đăng nhập của họ?",
    "optionsVi": [
      "cột -s : 1,7 /etc/passwd",
      "chặt -c 1,7 /etc/passwd",
      "colrm 1,7 /etc/passwd",
      "sắp xếp -t: -k1,7 /etc/passwd",
      "cắt -d: -f1,7 /etc/passwd"
    ]
  },
  {
    "id": 105,
    "topicId": 1,
    "question": "If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present in the current directory after running gunzip texts.tgz?",
    "options": [
      "Only a.txt, b.txt, and texts.tgz",
      "Only texts.tar and texts.tgz",
      "Only a.txt.gz and b.txt.gz",
      "Only a.txt and b.txt",
      "Only texts.tar"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "su (switch user): 'su -' hoặc 'su - username' chạy login shell (đầy đủ environment). 'su username' không có '-' chỉ switch user nhưng giữ environment hiện tại.",
      "vi": "su (switch user): 'su -' hoặc 'su - username' chạy login shell (đầy đủ environment). 'su username' không có '-' chỉ switch user nhưng giữ environment hiện tại.\n🔑 Keywords: su | su - | switch user | login shell | environment"
    },
    "questionVi": "Nếu kho lưu trữ tar nén gzip text.tgz chứa các tệp a.txt và b.txt, thì tệp nào sẽ có trong thư mục hiện tại sau khi chạy gunzip text.tgz?",
    "optionsVi": [
      "Chỉ a.txt, b.txt và text.tgz",
      "Chỉ có text.tar và text.tgz",
      "Chỉ a.txt.gz và b.txt.gz",
      "Chỉ a.txt và b.txt",
      "Chỉ có văn bản.tar"
    ]
  },
  {
    "id": 106,
    "topicId": 1,
    "question": "In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?",
    "options": [
      "By using the command :repeat followed by the number and the command",
      "By specifying the number right in front of a command such as 41 or 2yj.",
      "By selecting all affected lines using the shit and cursor keys before applying the command.",
      "By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times.",
      "By specifying the number after a command such as 14 or yj2 followed by escape."
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "sudo cho phép user thực thi lệnh với quyền root/user khác. Cấu hình trong /etc/sudoers (dùng visudo để sửa). 'sudo -i' mở root shell, 'sudo -u user command' chạy với user khác.",
      "vi": "sudo cho phép user thực thi lệnh với quyền root/user khác. Cấu hình trong /etc/sudoers (dùng visudo để sửa). 'sudo -i' mở root shell, 'sudo -u user command' chạy với user khác.\n🔑 Keywords: sudo | /etc/sudoers | visudo | sudo -i | sudoers | privilege escalation"
    },
    "questionVi": "Trong trình soạn thảo vi, làm thế nào các lệnh như di chuyển con trỏ hoặc sao chép dòng vào bộ đệm có thể được đưa ra nhiều lần hoặc áp dụng cho nhiều hàng?",
    "optionsVi": [
      "Bằng cách sử dụng lệnh :repeat theo sau là số và lệnh",
      "Bằng cách chỉ định số ngay trước lệnh, chẳng hạn như 41 hoặc 2yj.",
      "Bằng cách chọn tất cả các dòng bị ảnh hưởng bằng cách sử dụng phím shit và con trỏ trước khi áp dụng lệnh.",
      "Bằng cách đưa ra một lệnh như :set lặp lại=4 với việc lặp lại mỗi lệnh tiếp theo 4 lần.",
      "Bằng cách chỉ định số sau một lệnh như 14 hoặc yj2, sau đó là phím thoát."
    ]
  },
  {
    "id": 107,
    "topicId": 1,
    "question": "Which of the following statements is correct for a command ending with an & character?",
    "options": [
      "The command's output is redirected to /dev/null.",
      "The command is run in background of the current shell.",
      "The command's output is executed by the shell.",
      "The command is run as a direct child of the init process.",
      "The command's input is read from /dev/null."
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "SSH: ssh user@host kết nối. ssh-keygen tạo key pair (-t rsa/ed25519). ssh-copy-id copy public key lên server. Private key ở ~/.ssh/id_rsa, public key ở ~/.ssh/id_rsa.pub.",
      "vi": "SSH: ssh user@host kết nối. ssh-keygen tạo key pair (-t rsa/ed25519). ssh-copy-id copy public key lên server. Private key ở ~/.ssh/id_rsa, public key ở ~/.ssh/id_rsa.pub.\n🔑 Keywords: ssh | ssh-keygen | ssh-copy-id | ~/.ssh/ | public private key | authorized_keys"
    },
    "questionVi": "Câu lệnh nào sau đây đúng với lệnh kết thúc bằng ký tự &?",
    "optionsVi": [
      "Đầu ra của lệnh được chuyển hướng đến/dev/null.",
      "Lệnh được chạy trong nền của shell hiện tại.",
      "Đầu ra của lệnh được thực thi bởi shell.",
      "Lệnh được chạy như một phần tử con trực tiếp của tiến trình init.",
      "Đầu vào của lệnh được đọc từ /dev/null."
    ]
  },
  {
    "id": 108,
    "topicId": 1,
    "question": "Which of the following commands reads a file and creates separate chunks of a given size from the file's contents?",
    "options": [
      "ar",
      "cat",
      "break",
      "split",
      "parted"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/etc/ssh/sshd_config cấu hình SSH server. Quan trọng: Port, PermitRootLogin (no khuyến nghị), PasswordAuthentication, PubkeyAuthentication, AllowUsers/AllowGroups.",
      "vi": "/etc/ssh/sshd_config cấu hình SSH server. Quan trọng: Port, PermitRootLogin (no khuyến nghị), PasswordAuthentication, PubkeyAuthentication, AllowUsers/AllowGroups.\n🔑 Keywords: /etc/ssh/sshd_config | PermitRootLogin no | PasswordAuthentication | PubkeyAuthentication | Port"
    },
    "questionVi": "Lệnh nào sau đây đọc một tệp và tạo các đoạn riêng biệt có kích thước nhất định từ nội dung của tệp?",
    "optionsVi": [
      "ar",
      "cat",
      "break",
      "split",
      "parted"
    ]
  },
  {
    "id": 109,
    "topicId": 1,
    "question": "What is the purpose of the xargs command?",
    "options": [
      "It passes arguments to an X server.",
      "It repeats the execution of a command using different parameters for each invocation.",
      "It reads standard input and builds up commands to execute.",
      "It asks a question, graphically, and returns the answer to the shell.",
      "It allows specifying long options (like --help) for commands that normally only accept short options (like -h)"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "~/.ssh/authorized_keys chứa public keys được phép đăng nhập không cần password. ~/.ssh/known_hosts lưu fingerprint của các host đã kết nối. ~/.ssh/config cấu hình SSH client.",
      "vi": "~/.ssh/authorized_keys chứa public keys được phép đăng nhập không cần password. ~/.ssh/known_hosts lưu fingerprint của các host đã kết nối. ~/.ssh/config cấu hình SSH client.\n🔑 Keywords: authorized_keys | known_hosts | ~/.ssh/config | SSH keys | fingerprint"
    },
    "questionVi": "Mục đích của lệnh xargs là gì?",
    "optionsVi": [
      "Nó chuyển đối số đến máy chủ X.",
      "Nó lặp lại việc thực thi một lệnh bằng cách sử dụng các tham số khác nhau cho mỗi lệnh gọi.",
      "Nó đọc đầu vào tiêu chuẩn và xây dựng các lệnh để thực thi.",
      "Nó đặt một câu hỏi bằng đồ họa và trả về câu trả lời cho shell.",
      "Nó cho phép chỉ định các tùy chọn dài (như --help) cho các lệnh thường chỉ chấp nhận các tùy chọn ngắn (như -h)"
    ]
  },
  {
    "id": 110,
    "topicId": 1,
    "question": "Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "jobs",
    "explanation": {
      "en": "SCP (Secure Copy) copy file qua SSH. 'scp file user@host:/path/' copy lên server. 'scp user@host:/path/file .' copy xuống. '-r' đệ quy cho thư mục. SFTP là alternative.",
      "vi": "SCP (Secure Copy) copy file qua SSH. 'scp file user@host:/path/' copy lên server. 'scp user@host:/path/file .' copy xuống. '-r' đệ quy cho thư mục. SFTP là alternative.\n🔑 Keywords: scp | secure copy | -r recursive | sftp | SSH file transfer"
    },
    "questionVi": "Lệnh nào hiển thị danh sách tất cả các tác vụ nền đang chạy trong shell hiện tại? (CHỈ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 111,
    "topicId": 1,
    "question": "Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "renice",
    "explanation": {
      "en": "netstat (hoặc ss thay thế hiện đại hơn) hiển thị kết nối TCP/UDP, routing table, interface statistics. 'netstat -tulpn' = TCP+UDP+listening+PID+numeric. ss -tulpn tương đương.",
      "vi": "netstat (hoặc ss thay thế hiện đại hơn) hiển thị kết nối TCP/UDP, routing table, interface statistics. 'netstat -tulpn' = TCP+UDP+listening+PID+numeric. ss -tulpn tương đương.\n🔑 Keywords: netstat | ss | -tulpn | TCP UDP | listening ports | routing table | statistics"
    },
    "questionVi": "Lệnh nào được sử dụng để thay đổi mức độ ưu tiên của một tiến trình đang chạy? (CHỈ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 112,
    "topicId": 1,
    "question": "In Bash, inserting 1>&2 after a command redirects...",
    "options": [
      "...standard error to standard input.",
      "...standard output to standard error.",
      "...standard input to standard error.",
      "...standard error to standard output.",
      "...standard output to standard input."
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ip command (thay thế ifconfig): 'ip addr' xem địa chỉ IP, 'ip route' xem routing table, 'ip link' quản lý interfaces. 'ip addr add 192.168.1.1/24 dev eth0' thêm IP.",
      "vi": "ip command (thay thế ifconfig): 'ip addr' xem địa chỉ IP, 'ip route' xem routing table, 'ip link' quản lý interfaces. 'ip addr add 192.168.1.1/24 dev eth0' thêm IP.\n🔑 Keywords: ip addr | ip route | ip link | ifconfig deprecated | ip command | network interface"
    },
    "questionVi": "Trong Bash, chèn 1>&2 sau lệnh chuyển hướng...",
    "optionsVi": [
      "...lỗi tiêu chuẩn đối với đầu vào tiêu chuẩn.",
      "... đầu ra tiêu chuẩn thành lỗi tiêu chuẩn.",
      "...đầu vào tiêu chuẩn tới lỗi tiêu chuẩn.",
      "...lỗi tiêu chuẩn đối với đầu ra tiêu chuẩn.",
      "...đầu ra tiêu chuẩn thành đầu vào tiêu chuẩn."
    ]
  },
  {
    "id": 113,
    "topicId": 1,
    "question": "When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to investigate the problem. Which of the following methods helps to identify the root cause of the problem?",
    "options": [
      "Using the dmesg command from the rescue CD's shell to view the original system's boot logs.",
      "Investigating the file /proc/kmsg on the computer's hard disk for possible errors.",
      "Investigating the file /var/log on the computer's hard disk for possible errors.",
      "Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.",
      "Rebooting again from the hard drive since the system successfully booted from the rescue CD."
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ping kiểm tra kết nối ICMP. '-c N' giới hạn số gói. traceroute/tracepath theo dõi đường đi gói tin. '-I' dùng ICMP, '-T' dùng TCP (bypass firewall). mtr kết hợp cả hai.",
      "vi": "ping kiểm tra kết nối ICMP. '-c N' giới hạn số gói. traceroute/tracepath theo dõi đường đi gói tin. '-I' dùng ICMP, '-T' dùng TCP (bypass firewall). mtr kết hợp cả hai.\n🔑 Keywords: ping | -c | traceroute | tracepath | mtr | ICMP | network connectivity"
    },
    "questionVi": "Khi khởi động từ đĩa cứng, máy tính tải thành công nhân Linux và initramfs nhưng bị treo trong các tác vụ khởi động tiếp theo. Hệ thống được khởi động bằng đĩa CD cứu hộ dựa trên Linux để điều tra sự cố. Phương pháp nào sau đây giúp xác định nguyên nhân gốc rễ của vấn đề?",
    "optionsVi": [
      "Sử dụng lệnh dmesg từ vỏ đĩa CD cứu hộ để xem nhật ký khởi động của hệ thống gốc.",
      "Đang điều tra tệp /proc/kmsg trên đĩa cứng của máy tính để tìm các lỗi có thể xảy ra.",
      "Đang điều tra tệp /var/log trên đĩa cứng của máy tính để tìm các lỗi có thể xảy ra.",
      "Sử dụng chroot để chuyển sang hệ thống tập tin trên đĩa cứng và sử dụng dmesg để xem nhật ký.",
      "Khởi động lại từ ổ cứng kể từ khi hệ thống khởi động thành công từ đĩa CD cứu hộ."
    ]
  },
  {
    "id": 114,
    "topicId": 1,
    "question": "Where is the bootloader stored on the hard disk of a UEFI system?",
    "options": [
      "In the EFI Boot Record (EBR).",
      "In the Master Boot Record (MBR).",
      "On the EFI System Partition (ESP).",
      "On the partition labeled boot.",
      "On the partition number 127."
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "DNS lookup: dig (chi tiết), nslookup (interactive), host (đơn giản). 'dig @8.8.8.8 example.com A' tra A record. /etc/resolv.conf chứa DNS servers. /etc/hosts override DNS.",
      "vi": "DNS lookup: dig (chi tiết), nslookup (interactive), host (đơn giản). 'dig @8.8.8.8 example.com A' tra A record. /etc/resolv.conf chứa DNS servers. /etc/hosts override DNS.\n🔑 Keywords: dig | nslookup | host | DNS lookup | /etc/resolv.conf | /etc/hosts | A record"
    },
    "questionVi": "Bộ tải khởi động được lưu trữ ở đâu trên đĩa cứng của hệ thống UEFI?",
    "optionsVi": [
      "Trong Bản ghi khởi động EFI (EBR).",
      "Trong Bản ghi khởi động chính (MBR).",
      "Trên phân vùng hệ thống EFI (ESP).",
      "Trên phân vùng có nhãn boot.",
      "Trên phân vùng số 127."
    ]
  },
  {
    "id": 115,
    "topicId": 1,
    "question": "What is the correct way to set the default systemd boot target to multi-user?",
    "options": [
      "systemctl isolate multi-user.target",
      "systemctl set-runlevel multi-user.target",
      "systemctl set-boot multi-user.target",
      "systemctl set-default multi-user.target",
      "systemctl boot -p multi-user.target"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/etc/hostname chứa hostname của máy. 'hostnamectl set-hostname newhostname' (systemd). 'hostname' hiển thị/đặt tạm thời. /etc/hosts map hostname thành IP.",
      "vi": "/etc/hostname chứa hostname của máy. 'hostnamectl set-hostname newhostname' (systemd). 'hostname' hiển thị/đặt tạm thời. /etc/hosts map hostname thành IP.\n🔑 Keywords: /etc/hostname | hostnamectl | hostname command | /etc/hosts | FQDN"
    },
    "questionVi": "Cách chính xác để đặt mục tiêu khởi động systemd mặc định thành nhiều người dùng là gì?",
    "optionsVi": [
      "systemctl cô lập nhiều người dùng.target",
      "systemctl set-runlevel multi-user.target",
      "systemctl set-boot multi-user.target",
      "systemctl set-default multi-user.target",
      "systemctl boot -p multi-user.target"
    ]
  },
  {
    "id": 116,
    "topicId": 1,
    "question": "Which of the following statements are correct about the initial RAM disk involved in the boot process of Linux? (Choose two.)",
    "options": [
      "An initramfs is a compressed file system archive, which can be unpacked to examine its contents.",
      "An initramfs file contains the MBR, the bootloader and the Linux kernel.",
      "After a successful boot, the initramfs contents are available in /run/initramfs/.",
      "The kernel uses the initramfs temporarily before accessing the real root file system.",
      "An initramfs does not depend on a specific kernel version and is not changed after the initial installation."
    ],
    "correct": [
      0,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/etc/nsswitch.conf kiểm soát thứ tự tra cứu name resolution: files (local /etc/hosts) trước hay DNS trước. Quan trọng cho 'hosts: files dns' hoặc 'hosts: dns files'.",
      "vi": "/etc/nsswitch.conf kiểm soát thứ tự tra cứu name resolution: files (local /etc/hosts) trước hay DNS trước. Quan trọng cho 'hosts: files dns' hoặc 'hosts: dns files'.\n🔑 Keywords: /etc/nsswitch.conf | name resolution order | files dns | NSS | name service"
    },
    "questionVi": "Câu nào sau đây đúng về đĩa RAM ban đầu tham gia vào quá trình khởi động của Linux? (Chọn hai.)",
    "optionsVi": [
      "Initramfs là một kho lưu trữ hệ thống tệp nén, có thể được giải nén để kiểm tra nội dung của nó.",
      "Tệp initramfs chứa MBR, bộ tải khởi động và nhân Linux.",
      "Sau khi khởi động thành công, nội dung initramfs sẽ có trong /run/initramfs/.",
      "Kernel sử dụng initramfs tạm thời trước khi truy cập vào hệ thống tập tin gốc thực sự.",
      "Initramfs không phụ thuộc vào phiên bản kernel cụ thể và không bị thay đổi sau lần cài đặt đầu tiên."
    ]
  },
  {
    "id": 117,
    "topicId": 1,
    "question": "Which of the following commands loads a kernel module along with any required dependency modules?",
    "options": [
      "depmod",
      "modprobe",
      "module_install",
      "insmod",
      "loadmod"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "iptables quản lý firewall Linux. Chains: INPUT, OUTPUT, FORWARD. 'iptables -A INPUT -p tcp --dport 22 -j ACCEPT' cho phép SSH. '-j DROP' từ chối, '-j REJECT' từ chối + thông báo.",
      "vi": "iptables quản lý firewall Linux. Chains: INPUT, OUTPUT, FORWARD. 'iptables -A INPUT -p tcp --dport 22 -j ACCEPT' cho phép SSH. '-j DROP' từ chối, '-j REJECT' từ chối + thông báo.\n🔑 Keywords: iptables | INPUT OUTPUT FORWARD | -j ACCEPT DROP REJECT | firewall | chains rules"
    },
    "questionVi": "Lệnh nào sau đây tải mô-đun hạt nhân cùng với bất kỳ mô-đun phụ thuộc cần thiết nào?",
    "optionsVi": [
      "depmod",
      "modprobe",
      "module_install",
      "insmod",
      "loadmod"
    ]
  },
  {
    "id": 118,
    "topicId": 1,
    "question": "What information can the lspci command display about the system hardware? (Choose three.)",
    "options": [
      "System battery type",
      "Device IRQ settings",
      "PCI bus speed",
      "Ethernet MAC address",
      "Device vendor identification"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "firewalld (Red Hat/CentOS) là frontend cho iptables/nftables. Dùng zones (public, home, work, trusted). 'firewall-cmd --add-service=ssh --permanent' rồi '--reload'.",
      "vi": "firewalld (Red Hat/CentOS) là frontend cho iptables/nftables. Dùng zones (public, home, work, trusted). 'firewall-cmd --add-service=ssh --permanent' rồi '--reload'.\n🔑 Keywords: firewalld | zones | firewall-cmd | --add-service | --permanent --reload | RHEL CentOS"
    },
    "questionVi": "Lệnh lspci có thể hiển thị thông tin gì về phần cứng hệ thống? (Chọn ba.)",
    "optionsVi": [
      "Loại pin hệ thống",
      "Cài đặt IRQ của thiết bị",
      "Tốc độ bus PCI",
      "Địa chỉ MAC Ethernet",
      "Nhận dạng nhà cung cấp thiết bị"
    ]
  },
  {
    "id": 119,
    "topicId": 1,
    "question": "Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "/etc/inittab",
    "explanation": {
      "en": "ufw (Uncomplicated Firewall) là frontend đơn giản cho iptables trên Ubuntu/Debian. 'ufw enable', 'ufw allow 22', 'ufw deny 23', 'ufw status'. Dễ dùng hơn iptables trực tiếp.",
      "vi": "ufw (Uncomplicated Firewall) là frontend đơn giản cho iptables trên Ubuntu/Debian. 'ufw enable', 'ufw allow 22', 'ufw deny 23', 'ufw status'. Dễ dùng hơn iptables trực tiếp.\n🔑 Keywords: ufw | uncomplicated firewall | ufw allow deny enable status | Ubuntu | iptables frontend"
    },
    "questionVi": "Tệp cấu hình init System V nào thường được sử dụng để đặt mức chạy mặc định? (Chỉ định tên đầy đủ của tệp, bao gồm cả đường dẫn.)",
    "optionsVi": []
  },
  {
    "id": 120,
    "topicId": 1,
    "question": "Given the following two symbolic links in a System V init configuration:/etc/rc1.d/K01apache2/etc/rc2.d/S02apache2When are the scripts executed that are referenced by these links? (Choose two.)",
    "options": [
      "S02apache2 is run when runlevel 2 is entered.",
      "S02apache2 is run when runlevel 2 is left.",
      "K01apache2 is never run because K indicates a deactivated service.",
      "Both S02apache2 and K01apache2 are run during a system shutdown.",
      "K01apache2 is run when runlevel 1 is entered."
    ],
    "correct": [
      0,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Network Manager (nmcli, nmtui) là service quản lý kết nối mạng. nmcli con show liệt kê kết nối, nmcli dev status trạng thái thiết bị. nmtui là giao diện text interactive.",
      "vi": "Network Manager (nmcli, nmtui) là service quản lý kết nối mạng. nmcli con show liệt kê kết nối, nmcli dev status trạng thái thiết bị. nmtui là giao diện text interactive.\n🔑 Keywords: NetworkManager | nmcli | nmtui | network connections | nmcli con show"
    },
    "questionVi": "Cho hai liên kết tượng trưng sau đây trong cấu hình init của Hệ thống V:/etc/rc1.d/K01apache2/etc/rc2.d/S02apache2Khi nào các tập lệnh được thực thi được tham chiếu bởi các liên kết này? (Chọn hai.)",
    "optionsVi": [
      "S02apache2 được chạy khi nhập runlevel 2.",
      "S02apache2 được chạy khi còn lại runlevel 2.",
      "K01apache2 không bao giờ chạy vì K biểu thị dịch vụ đã ngừng hoạt động.",
      "Cả S02apache2 và K01apache2 đều chạy trong khi tắt hệ thống.",
      "K01apache2 được chạy khi nhập runlevel 1."
    ]
  },
  {
    "id": 121,
    "topicId": 2,
    "question": "Which command is used to set the hostname of the local system? (Specify only the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "hostname",
    "explanation": {
      "en": "Để cấu hình mạng tĩnh trên Debian/Ubuntu: sửa /etc/network/interfaces. Trên RHEL/CentOS: sửa /etc/sysconfig/network-scripts/ifcfg-eth0. Hoặc dùng NetworkManager.",
      "vi": "Để cấu hình mạng tĩnh trên Debian/Ubuntu: sửa /etc/network/interfaces. Trên RHEL/CentOS: sửa /etc/sysconfig/network-scripts/ifcfg-eth0. Hoặc dùng NetworkManager.\n🔑 Keywords: /etc/network/interfaces | /etc/sysconfig/network-scripts/ | static IP | network configuration"
    },
    "questionVi": "Lệnh nào được sử dụng để đặt tên máy chủ của hệ thống cục bộ? (Chỉ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 122,
    "topicId": 2,
    "question": "Which of the following is a valid IPv6 address?",
    "options": [
      "2001:db8:0g21::1",
      "2001::db8:4581::1",
      "2001:db8:3241::1",
      "2001%db8%9990%%1",
      "2001.db8.819f..1"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "DHCP client tự động lấy IP. dhclient <interface> để request DHCP lease. dhclient -r để release. NetworkManager tự quản lý DHCP. /var/lib/dhcp/ lưu lease files.",
      "vi": "DHCP client tự động lấy IP. dhclient <interface> để request DHCP lease. dhclient -r để release. NetworkManager tự quản lý DHCP. /var/lib/dhcp/ lưu lease files.\n🔑 Keywords: DHCP | dhclient | dhclient -r | lease | automatic IP | NetworkManager"
    },
    "questionVi": "Địa chỉ nào sau đây là địa chỉ IPv6 hợp lệ?",
    "optionsVi": [
      "2001:db8:0g21::1",
      "2001::db8:4581::1",
      "2001:db8:3241::1",
      "2001%db8%9990%%1",
      "2001.db8.819f..1"
    ]
  },
  {
    "id": 123,
    "topicId": 2,
    "question": "What command, depending on its options, can display the open TCP connections, the routing tables, as well as network interface statistics? (Specify only the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "netstat",
    "explanation": {
      "en": "nmcli là command-line interface cho NetworkManager. Ví dụ quan trọng: 'nmcli con add type ethernet', 'nmcli con up <name>', 'nmcli device wifi list', 'nmcli con modify'.",
      "vi": "nmcli là command-line interface cho NetworkManager. Ví dụ quan trọng: 'nmcli con add type ethernet', 'nmcli con up <name>', 'nmcli device wifi list', 'nmcli con modify'.\n🔑 Keywords: nmcli | con add | con up | device wifi list | NetworkManager CLI"
    },
    "questionVi": "Lệnh nào, tùy thuộc vào các tùy chọn của nó, có thể hiển thị các kết nối TCP đang mở, bảng định tuyến cũng như số liệu thống kê giao diện mạng? (Chỉ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 124,
    "topicId": 2,
    "question": "Which command included in NetworkManager is a curses application which provides easy acces to the NetworkManager on the command line? (Specify only the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "nmtui",
    "explanation": {
      "en": "Routing: 'ip route add default via 192.168.1.1' thêm default gateway. 'ip route add 10.0.0.0/8 via 192.168.1.254' thêm static route. /etc/iproute2/rt_tables cho named tables.",
      "vi": "Routing: 'ip route add default via 192.168.1.1' thêm default gateway. 'ip route add 10.0.0.0/8 via 192.168.1.254' thêm static route. /etc/iproute2/rt_tables cho named tables.\n🔑 Keywords: ip route add | default gateway | static route | via | routing table"
    },
    "questionVi": "Lệnh nào có trong NetworkManager là một ứng dụng đáng nguyền rủa cung cấp khả năng truy cập dễ dàng vào NetworkManager trên dòng lệnh? (Chỉ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 125,
    "topicId": 2,
    "question": "Which if the following tools, used for DNS debugging, reports not only the response from the name sever but also details about the query?",
    "options": [
      "dnsq",
      "hostname",
      "dig",
      "dnslookup",
      "zoneinfo"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Syslog: rsyslog và syslog-ng là các syslog daemon phổ biến. /etc/rsyslog.conf cấu hình. Log files trong /var/log/: syslog/messages (chung), auth.log (authentication), kern.log (kernel).",
      "vi": "Syslog: rsyslog và syslog-ng là các syslog daemon phổ biến. /etc/rsyslog.conf cấu hình. Log files trong /var/log/: syslog/messages (chung), auth.log (authentication), kern.log (kernel).\n🔑 Keywords: rsyslog | syslog-ng | /etc/rsyslog.conf | /var/log/ | syslog messages auth kern"
    },
    "questionVi": "Điều gì sẽ xảy ra nếu các công cụ sau đây, được sử dụng để gỡ lỗi DNS, không chỉ báo cáo phản hồi từ máy chủ tên mà còn báo cáo chi tiết về truy vấn?",
    "optionsVi": [
      "dnsq",
      "hostname",
      "dig",
      "dnslookup",
      "zoneinfo"
    ]
  },
  {
    "id": 126,
    "topicId": 2,
    "question": "Which of the following statements is valid in the file /etc/nsswitch.conf?",
    "options": [
      "multi on",
      "192.168.168.4 dns-server",
      "namespaces: net mount procs",
      "include /etc/nsswitch.d/",
      "hosts: files dns"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "journalctl là lệnh đọc systemd journal. 'journalctl -u servicename' log của service, '-f' follow (real-time), '--since today', '-p err' chỉ errors, '-b' từ lần boot này.",
      "vi": "journalctl là lệnh đọc systemd journal. 'journalctl -u servicename' log của service, '-f' follow (real-time), '--since today', '-p err' chỉ errors, '-b' từ lần boot này.\n🔑 Keywords: journalctl | -u service | -f follow | --since | -p priority | -b boot | systemd journal"
    },
    "questionVi": "Câu lệnh nào sau đây hợp lệ trong tệp /etc/nsswitch.conf?",
    "optionsVi": [
      "đa trên",
      "máy chủ dns 192.168.168.4",
      "không gian tên: net mount procs",
      "bao gồm /etc/nsswitch.d/",
      "máy chủ: tập tin dns"
    ]
  },
  {
    "id": 127,
    "topicId": 2,
    "question": "Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
    "options": [
      "tcp",
      "ethernet",
      "wifi",
      "ipv6",
      "bridge"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "logrotate tự động xoay vòng (rotate) log files. Cấu hình trong /etc/logrotate.conf và /etc/logrotate.d/. Options: daily/weekly/monthly, rotate N, compress, missingok, notifempty.",
      "vi": "logrotate tự động xoay vòng (rotate) log files. Cấu hình trong /etc/logrotate.conf và /etc/logrotate.d/. Options: daily/weekly/monthly, rotate N, compress, missingok, notifempty.\n🔑 Keywords: logrotate | /etc/logrotate.conf | /etc/logrotate.d/ | rotate | compress | daily weekly"
    },
    "questionVi": "Loại kết nối nào sau đây, như được thấy trong chương trình kết nối nmcli, có thể tồn tại trong NetworkManager? (Chọn ba.)",
    "optionsVi": [
      "tcp",
      "ethernet",
      "wifi",
      "ipv6",
      "bridge"
    ]
  },
  {
    "id": 128,
    "topicId": 2,
    "question": "On a Linux workstation, the route command takes a long time before printing out the routing table. Which of the following errors does that indicate?",
    "options": [
      "The local routing information may be corrupted and must be re-validated using a routing protocol.",
      "One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.",
      "There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.",
      "The Linux Kernel Routing Daemon (LKRD) is not running and should be started using its init script or systemd unit.",
      "DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "NTP (Network Time Protocol) đồng bộ thời gian. ntpd là daemon truyền thống. chrony (chronyd) là implementation hiện đại, nhanh hơn. timedatectl (systemd) để quản lý thời gian.",
      "vi": "NTP (Network Time Protocol) đồng bộ thời gian. ntpd là daemon truyền thống. chrony (chronyd) là implementation hiện đại, nhanh hơn. timedatectl (systemd) để quản lý thời gian.\n🔑 Keywords: NTP | ntpd | chrony chronyd | timedatectl | time synchronization | ntpdate"
    },
    "questionVi": "Trên máy trạm Linux, lệnh định tuyến mất nhiều thời gian trước khi in ra bảng định tuyến. Điều đó cho thấy lỗi nào sau đây?",
    "optionsVi": [
      "Thông tin định tuyến cục bộ có thể bị hỏng và phải được xác thực lại bằng giao thức định tuyến.",
      "Một trong các bộ định tuyến trong bảng định tuyến không khả dụng, điều này khiến cơ chế phát hiện lỗi bộ định tuyến tự động (ARF-D) phải chờ thời gian chờ.",
      "Có thể vô tình có nhiều bộ định tuyến mặc định, trong trường hợp đó, việc lựa chọn bộ định tuyến mặc định phải được thực hiện trên mạng để chọn một bộ định tuyến làm mặc định.",
      "Daemon định tuyến hạt nhân Linux (LKRD) hiện không chạy và nên được bắt đầu bằng cách sử dụng tập lệnh init hoặc đơn vị systemd của nó.",
      "Độ phân giải DNS có thể không hoạt động vì tuyến đường theo mặc định cố gắng phân giải tên của bộ định tuyến và đích đến và có thể hết thời gian chờ."
    ]
  },
  {
    "id": 129,
    "topicId": 2,
    "question": "What is true about the Hop Limit field in the IPv6 header?",
    "options": [
      "The field is not changed during the transport of a package.",
      "The field is transmitted within a hop-by-hop extension header.",
      "Each router forwarding the packet increases the field's value.",
      "Each router forwarding the packet decreases the field's value.",
      "For multicast packages, the field's value is always 1."
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "timedatectl (systemd) quản lý thời gian: 'timedatectl status', 'timedatectl set-timezone Asia/Ho_Chi_Minh', 'timedatectl set-ntp true'. date dùng để xem/đặt ngày giờ thủ công.",
      "vi": "timedatectl (systemd) quản lý thời gian: 'timedatectl status', 'timedatectl set-timezone Asia/Ho_Chi_Minh', 'timedatectl set-ntp true'. date dùng để xem/đặt ngày giờ thủ công.\n🔑 Keywords: timedatectl | set-timezone | set-ntp | date command | timezone | Asia/Ho_Chi_Minh"
    },
    "questionVi": "Điều gì đúng về trường Hop Limit trong tiêu đề IPv6?",
    "optionsVi": [
      "Trường này không bị thay đổi trong quá trình vận chuyển gói hàng.",
      "Trường này được truyền trong tiêu đề mở rộng từng bước nhảy.",
      "Mỗi bộ định tuyến chuyển tiếp gói sẽ làm tăng giá trị của trường.",
      "Mỗi bộ định tuyến chuyển tiếp gói sẽ làm giảm giá trị của trường.",
      "Đối với các gói multicast, giá trị của trường luôn là 1."
    ]
  },
  {
    "id": 130,
    "topicId": 2,
    "question": "Which of the following nmcli subcommands exist? (Choose two.)",
    "options": [
      "nmcli ethernet",
      "nmcli device",
      "nmcli wifi",
      "nmcli address",
      "nmcli connection"
    ],
    "correct": [
      1,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "SMTP/email: Postfix, Sendmail, Exim là MTAs (Mail Transfer Agent). MUA (Mail User Agent): mutt, Thunderbird. MDA (Mail Delivery Agent): procmail, dovecot. Port 25 SMTP, 587 submission.",
      "vi": "SMTP/email: Postfix, Sendmail, Exim là MTAs (Mail Transfer Agent). MUA (Mail User Agent): mutt, Thunderbird. MDA (Mail Delivery Agent): procmail, dovecot. Port 25 SMTP, 587 submission.\n🔑 Keywords: MTA | MUA | MDA | Postfix | SMTP port 25 587 | email server"
    },
    "questionVi": "Lệnh con nmcli nào sau đây tồn tại? (Chọn hai.)",
    "optionsVi": [
      "ethernet nmcli",
      "thiết bị nmcli",
      "wifi nmcli",
      "địa chỉ nmcli",
      "kết nối nmcli"
    ]
  },
  {
    "id": 131,
    "topicId": 2,
    "question": "Which of the following changes may occur as a consequence of using the command ip? (Choose three.)",
    "options": [
      "Network interfaces may become active or inactive.",
      "New name servers may be added to the resolver configuration.",
      "The system's host name may change.",
      "IP addresses may change.",
      "The routing table may change."
    ],
    "correct": [
      0,
      3,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "mailq hiển thị mail queue của MTA. 'sendmail -q' để flush queue. maillog (/var/log/mail.log hoặc /var/log/maillog) là log của mail server. newaliases cập nhật /etc/aliases.",
      "vi": "mailq hiển thị mail queue của MTA. 'sendmail -q' để flush queue. maillog (/var/log/mail.log hoặc /var/log/maillog) là log của mail server. newaliases cập nhật /etc/aliases.\n🔑 Keywords: mailq | mail queue | sendmail -q | maillog | /etc/aliases | newaliases"
    },
    "questionVi": "Những thay đổi nào sau đây có thể xảy ra do sử dụng lệnh ip? (Chọn ba.)",
    "optionsVi": [
      "Giao diện mạng có thể hoạt động hoặc không hoạt động.",
      "Máy chủ tên mới có thể được thêm vào cấu hình trình phân giải.",
      "Tên máy chủ của hệ thống có thể thay đổi.",
      "Địa chỉ IP có thể thay đổi.",
      "Bảng định tuyến có thể thay đổi."
    ]
  },
  {
    "id": 132,
    "topicId": 2,
    "question": "How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?",
    "options": [
      "6",
      "14",
      "30",
      "62",
      "126"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/etc/aliases map địa chỉ email đến mailbox hoặc lệnh. Sau khi sửa phải chạy 'newaliases' (hoặc sendmail -bi) để rebuild alias database. Ví dụ: 'root: admin@example.com'.",
      "vi": "/etc/aliases map địa chỉ email đến mailbox hoặc lệnh. Sau khi sửa phải chạy 'newaliases' (hoặc sendmail -bi) để rebuild alias database. Ví dụ: 'root: admin@example.com'.\n🔑 Keywords: /etc/aliases | newaliases | alias database | email forwarding | sendmail -bi"
    },
    "questionVi": "Có thể sử dụng bao nhiêu địa chỉ IP cho các máy chủ duy nhất bên trong mạng con IPv4 192.168.2.128/26?",
    "optionsVi": [
      "6",
      "14",
      "30",
      "62",
      "126"
    ]
  },
  {
    "id": 133,
    "topicId": 2,
    "question": "Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)",
    "options": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.255.0.0/16",
      "172.16.0.0/12",
      "192.168.0.0/16"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Các file cấu hình printer: CUPS dùng /etc/cups/. 'lpadmin -p printername -E -v socket://host:9100 -m model' thêm máy in. 'cupsd' là CUPS daemon.",
      "vi": "Các file cấu hình printer: CUPS dùng /etc/cups/. 'lpadmin -p printername -E -v socket://host:9100 -m model' thêm máy in. 'cupsd' là CUPS daemon.\n🔑 Keywords: /etc/cups/ | lpadmin | cupsd | CUPS configuration | IPP protocol"
    },
    "questionVi": "Mạng IPv4 nào sau đây được IANA dành riêng để gán địa chỉ riêng và định tuyến riêng? (Chọn ba.)",
    "optionsVi": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.255.0.0/16",
      "172.16.0.0/12",
      "192.168.0.0/16"
    ]
  },
  {
    "id": 134,
    "topicId": 2,
    "question": "Which of the following commands configure network interfaces based on the system's existing distribution-specific configuration files? (Choose two.)",
    "options": [
      "ifconf",
      "ifdown",
      "ifpause",
      "ifstart",
      "ifup"
    ],
    "correct": [
      1,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Internationalization (i18n): locale xác định ngôn ngữ, bộ ký tự, định dạng số/ngày. 'locale' xem locale hiện tại. /etc/locale.conf (systemd). LANG, LC_ALL là các biến quan trọng.",
      "vi": "Internationalization (i18n): locale xác định ngôn ngữ, bộ ký tự, định dạng số/ngày. 'locale' xem locale hiện tại. /etc/locale.conf (systemd). LANG, LC_ALL là các biến quan trọng.\n🔑 Keywords: locale | LANG | LC_ALL | /etc/locale.conf | i18n internationalization | UTF-8"
    },
    "questionVi": "Lệnh nào sau đây định cấu hình giao diện mạng dựa trên các tệp cấu hình dành riêng cho phân phối hiện có của hệ thống? (Chọn hai.)",
    "optionsVi": [
      "ifconf",
      "ifdown",
      "ifpause",
      "ifstart",
      "ifup"
    ]
  },
  {
    "id": 135,
    "topicId": 2,
    "question": "Which of the following statements is true if the UID of a regular user is identical to the GID of a group?",
    "options": [
      "UID have precedence over GIDs, therefore the user is available while the group doesn't.",
      "The user as well as the group are not available to avoid ambiguity due to the ID conflict.",
      "UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.",
      "The user is the only member of the group, even if the group configuration contains other members.",
      "GIDs have precedence over UIDs, therefore the group is available while the user isn't."
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "iconv chuyển đổi encoding của file. 'iconv -f UTF-8 -t ISO-8859-1 file'. file -i xác định encoding. chardet (Python) nhận diện encoding. UTF-8 là chuẩn hiện đại.",
      "vi": "iconv chuyển đổi encoding của file. 'iconv -f UTF-8 -t ISO-8859-1 file'. file -i xác định encoding. chardet (Python) nhận diện encoding. UTF-8 là chuẩn hiện đại.\n🔑 Keywords: iconv | encoding conversion | UTF-8 | ISO-8859-1 | character encoding | file -i"
    },
    "questionVi": "Câu nào sau đây đúng nếu UID của người dùng thông thường giống với GID của một nhóm?",
    "optionsVi": [
      "UID được ưu tiên hơn GID, do đó người dùng có sẵn trong khi nhóm thì không.",
      "Người dùng cũng như nhóm không có mặt để tránh sự mơ hồ do xung đột ID.",
      "UID và GID độc lập với nhau, do đó người dùng cũng như nhóm vẫn có sẵn.",
      "Người dùng là thành viên duy nhất của nhóm, ngay cả khi cấu hình nhóm có chứa các thành viên khác.",
      "GID được ưu tiên hơn UID, do đó nhóm có sẵn trong khi người dùng thì không."
    ]
  },
  {
    "id": 136,
    "topicId": 2,
    "question": "Which of the following information is stored in /etc/shadow for each user?",
    "options": [
      "The timestamp of the user's last login",
      "The user's private SSH keys",
      "The hashed password of the user",
      "The numerical user ID (UID)",
      "The path to the user's home directory"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "tzselect và timedatectl set-timezone thay đổi timezone. /etc/localtime là symlink đến timezone file trong /usr/share/zoneinfo/. TZ environment variable override tạm thời.",
      "vi": "tzselect và timedatectl set-timezone thay đổi timezone. /etc/localtime là symlink đến timezone file trong /usr/share/zoneinfo/. TZ environment variable override tạm thời.\n🔑 Keywords: timezone | tzselect | /etc/localtime | /usr/share/zoneinfo/ | TZ variable"
    },
    "questionVi": "Thông tin nào sau đây được lưu trữ trong /etc/shadow cho mỗi người dùng?",
    "optionsVi": [
      "Dấu thời gian đăng nhập lần cuối của người dùng",
      "Khóa SSH riêng tư của người dùng",
      "Mật khẩu băm của người dùng",
      "ID người dùng dạng số (UID)",
      "Đường dẫn đến thư mục chính của người dùng"
    ]
  },
  {
    "id": 137,
    "topicId": 2,
    "question": "Which of the following commands shows all active systemd timers?",
    "options": [
      "systemctl-timer show",
      "timectl list",
      "systemctl ג€\"t",
      "systemctl list-timers",
      "timeq"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Accessibility: orca là screen reader cho GNOME. brltty hỗ trợ braille display. GOK (GNOME Onscreen Keyboard). Magnifier tích hợp trong GNOME/KDE. atspi là accessibility infrastructure.",
      "vi": "Accessibility: orca là screen reader cho GNOME. brltty hỗ trợ braille display. GOK (GNOME Onscreen Keyboard). Magnifier tích hợp trong GNOME/KDE. atspi là accessibility infrastructure.\n🔑 Keywords: orca | screen reader | brltty | braille | accessibility | GOK | AT-SPI"
    },
    "questionVi": "Lệnh nào sau đây hiển thị tất cả các bộ định thời systemd đang hoạt động?",
    "optionsVi": [
      "chương trình hẹn giờ systemctl",
      "danh sách thời gian",
      "systemctl ג€\"t",
      "bộ tính giờ danh sách systemctl",
      "timeq"
    ]
  },
  {
    "id": 138,
    "topicId": 2,
    "question": "Which of the following tasks can the date command accomplish? (Choose two.)",
    "options": [
      "Set the system's date and time.",
      "Set the system's date but not the time.",
      "Calculate the time span between two dates.",
      "Print a calendar for a month or a year.",
      "Display time in a specific format."
    ],
    "correct": [
      0,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "chsh thay đổi login shell của user. 'chsh -s /bin/zsh' đổi sang zsh. Shell phải có trong /etc/shells. chfn thay đổi GECOS field (tên đầy đủ, phone...) trong /etc/passwd.",
      "vi": "chsh thay đổi login shell của user. 'chsh -s /bin/zsh' đổi sang zsh. Shell phải có trong /etc/shells. chfn thay đổi GECOS field (tên đầy đủ, phone...) trong /etc/passwd.\n🔑 Keywords: chsh | change shell | /etc/shells | chfn | GECOS | login shell"
    },
    "questionVi": "Lệnh date có thể thực hiện những nhiệm vụ nào sau đây? (Chọn hai.)",
    "optionsVi": [
      "Đặt ngày và giờ của hệ thống.",
      "Đặt ngày của hệ thống nhưng không đặt thời gian.",
      "Tính khoảng thời gian giữa hai ngày.",
      "In lịch trong một tháng hoặc một năm.",
      "Hiển thị thời gian ở một định dạng cụ thể."
    ]
  },
  {
    "id": 139,
    "topicId": 2,
    "question": "Which file, if present, must contain all users that are allowed to use the cron scheduling system? (Specify the full name of the file, including path.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "crontab",
    "explanation": {
      "en": "id hiển thị UID, GID và các group của user. 'id username' cho user cụ thể. whoami in username hiện tại. groups in các group của user. logname in login name gốc.",
      "vi": "id hiển thị UID, GID và các group của user. 'id username' cho user cụ thể. whoami in username hiện tại. groups in các group của user. logname in login name gốc.\n🔑 Keywords: id | UID GID | whoami | groups | logname | current user info"
    },
    "questionVi": "Tệp nào, nếu có, phải chứa tất cả người dùng được phép sử dụng hệ thống lập lịch cron? (Chỉ định tên đầy đủ của tệp, bao gồm cả đường dẫn.)",
    "optionsVi": []
  },
  {
    "id": 140,
    "topicId": 2,
    "question": "What can be specified with useradd? (Choose two.)",
    "options": [
      "Commands the user can run using sudo.",
      "The absolute path to the user's home directory.",
      "Which printers are available for the new user.",
      "The SSH keys used to login to the new account.",
      "The numeric user ID (UID) of the user."
    ],
    "correct": [
      1,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "w hiển thị user đang login + hoạt động của họ. who hiển thị ai đang login. last hiển thị lịch sử login (/var/log/wtmp). lastb hiển thị login thất bại (/var/log/btmp).",
      "vi": "w hiển thị user đang login + hoạt động của họ. who hiển thị ai đang login. last hiển thị lịch sử login (/var/log/wtmp). lastb hiển thị login thất bại (/var/log/btmp).\n🔑 Keywords: w | who | last | lastb | /var/log/wtmp | /var/log/btmp | login history"
    },
    "questionVi": "Những gì có thể được chỉ định với useradd? (Chọn hai.)",
    "optionsVi": [
      "Các lệnh người dùng có thể chạy bằng sudo.",
      "Đường dẫn tuyệt đối đến thư mục chính của người dùng.",
      "Những máy in nào có sẵn cho người dùng mới.",
      "Các khóa SSH được sử dụng để đăng nhập vào tài khoản mới.",
      "ID người dùng dạng số (UID) của người dùng."
    ]
  },
  {
    "id": 141,
    "topicId": 2,
    "question": "Which of the following files assigns a user to its primary group?",
    "options": [
      "/etc/pgroup",
      "/etc/shadow",
      "/etc/passwd",
      "/etc/group",
      "/etc/gshadow"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "PAM (Pluggable Authentication Modules) là framework xác thực linh hoạt. Cấu hình trong /etc/pam.d/. Các module: pam_unix (password), pam_ldap (LDAP), pam_tally2 (lockout).",
      "vi": "PAM (Pluggable Authentication Modules) là framework xác thực linh hoạt. Cấu hình trong /etc/pam.d/. Các module: pam_unix (password), pam_ldap (LDAP), pam_tally2 (lockout).\n🔑 Keywords: PAM | Pluggable Authentication | /etc/pam.d/ | pam_unix | authentication modules"
    },
    "questionVi": "Tệp nào sau đây chỉ định người dùng vào nhóm chính của nó?",
    "optionsVi": [
      "/etc/pgroup",
      "/etc/shadow",
      "/etc/passwd",
      "/etc/group",
      "/etc/gshadow"
    ]
  },
  {
    "id": 142,
    "topicId": 2,
    "question": "Which of the following steps prevents a user from obtaining an interactive login session?",
    "options": [
      "Setting the UID for the user to 0.",
      "Running the command chsh -s /bin/false with the user name.",
      "Removing the user from the group staff.",
      "Adding the user to /etc/noaccess.",
      "Creating a .nologin file in the user's home directory."
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ulimit giới hạn tài nguyên cho shell/process. '-n' số file descriptors, '-u' max processes, '-v' virtual memory, '-c' core file size. /etc/security/limits.conf cho persistent settings.",
      "vi": "ulimit giới hạn tài nguyên cho shell/process. '-n' số file descriptors, '-u' max processes, '-v' virtual memory, '-c' core file size. /etc/security/limits.conf cho persistent settings.\n🔑 Keywords: ulimit | -n file descriptors | -u processes | /etc/security/limits.conf | resource limits"
    },
    "questionVi": "Bước nào sau đây ngăn người dùng có được phiên đăng nhập tương tác?",
    "optionsVi": [
      "Đặt UID cho người dùng thành 0.",
      "Chạy lệnh chsh -s /bin/false với tên người dùng.",
      "Xóa người dùng khỏi nhóm nhân viên.",
      "Thêm người dùng vào /etc/noaccess.",
      "Tạo tệp .nologin trong thư mục chính của người dùng."
    ]
  },
  {
    "id": 143,
    "topicId": 2,
    "question": "Which command included in systemd supports selecting messages from the systemd journal by criteria such as time or unit name? (Specify only the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "journalctl",
    "explanation": {
      "en": "GnuPG (gpg): 'gpg --gen-key' tạo key pair, 'gpg --encrypt -r recipient file' mã hóa, 'gpg --decrypt file' giải mã, 'gpg --sign file' ký, 'gpg --verify' xác minh chữ ký.",
      "vi": "GnuPG (gpg): 'gpg --gen-key' tạo key pair, 'gpg --encrypt -r recipient file' mã hóa, 'gpg --decrypt file' giải mã, 'gpg --sign file' ký, 'gpg --verify' xác minh chữ ký.\n🔑 Keywords: gpg | --gen-key | --encrypt | --decrypt | --sign | --verify | GPG key management"
    },
    "questionVi": "Lệnh nào có trong systemd hỗ trợ chọn tin nhắn từ nhật ký systemd theo tiêu chí như thời gian hoặc tên đơn vị? (Chỉ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 144,
    "topicId": 2,
    "question": "Which of the following statements about systemd-journald are true? (Choose three.)",
    "options": [
      "It is incompatible with syslog and cannot be installed on a system using regular syslog.",
      "It only processes messages of systemd and not messages of any other tools.",
      "It can pass log messages to syslog for further processing.",
      "It maintains metadata such as _UID or _PID for each message.",
      "It supports syslog facilities such as kern, user, and auth."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "OpenSSL tạo certificates và keys. 'openssl genrsa -out key.pem 2048' tạo RSA key, 'openssl req -new -x509' tạo self-signed cert. Dùng cho HTTPS, SSL/TLS.",
      "vi": "OpenSSL tạo certificates và keys. 'openssl genrsa -out key.pem 2048' tạo RSA key, 'openssl req -new -x509' tạo self-signed cert. Dùng cho HTTPS, SSL/TLS.\n🔑 Keywords: openssl | genrsa | x509 | self-signed certificate | SSL TLS | PKI"
    },
    "questionVi": "Câu nào sau đây về systemd-journald là đúng? (Chọn ba.)",
    "optionsVi": [
      "Nó không tương thích với syslog và không thể cài đặt trên hệ thống sử dụng syslog thông thường.",
      "Nó chỉ xử lý tin nhắn của systemd chứ không phải tin nhắn của bất kỳ công cụ nào khác.",
      "Nó có thể chuyển thông điệp tường trình tới nhật ký hệ thống để xử lý thêm.",
      "Nó duy trì siêu dữ liệu như _UID hoặc _PID cho mỗi tin nhắn.",
      "Nó hỗ trợ các tiện ích nhật ký hệ thống như kern, người dùng và auth."
    ]
  },
  {
    "id": 145,
    "topicId": 2,
    "question": "Which command must be run after adding a new email alias to the configuration in order to make this change effective? (Specify the command without any path but including all required parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "newaliases",
    "explanation": {
      "en": "chmod thay đổi permissions. Symbolic: 'chmod u+x', 'chmod g-w', 'chmod o=r'. Numeric: 4=read, 2=write, 1=execute. chmod 755 = rwxr-xr-x. Hiểu bit SUID(4), SGID(2), Sticky(1).",
      "vi": "chmod thay đổi permissions. Symbolic: 'chmod u+x', 'chmod g-w', 'chmod o=r'. Numeric: 4=read, 2=write, 1=execute. chmod 755 = rwxr-xr-x. Hiểu bit SUID(4), SGID(2), Sticky(1).\n🔑 Keywords: chmod | permissions | symbolic numeric | 4=r 2=w 1=x | SUID SGID sticky | 755 644"
    },
    "questionVi": "Lệnh nào phải được chạy sau khi thêm bí danh email mới vào cấu hình để thay đổi này có hiệu lực? (Chỉ định lệnh không có bất kỳ đường dẫn nào nhưng bao gồm tất cả các tham số bắt buộc.)",
    "optionsVi": []
  },
  {
    "id": 146,
    "topicId": 2,
    "question": "Which option in the chrony configuration file changes the initial interval of polls to a NTP server in order to speed up the initial synchronization?",
    "options": [
      "iburst",
      "quickstart",
      "fast",
      "fsync",
      "flood"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "SUID (Set User ID) bit trên executable: process chạy với quyền owner của file, không phải user chạy. Ví dụ: /usr/bin/passwd có SUID root để đọc/ghi /etc/shadow.",
      "vi": "SUID (Set User ID) bit trên executable: process chạy với quyền owner của file, không phải user chạy. Ví dụ: /usr/bin/passwd có SUID root để đọc/ghi /etc/shadow.\n🔑 Keywords: SUID | Set User ID | 4xxx | s in owner execute | /usr/bin/passwd | privilege"
    },
    "questionVi": "Tùy chọn nào trong tệp cấu hình đồng bộ sẽ thay đổi khoảng thời gian thăm dò ban đầu thành máy chủ NTP để tăng tốc độ đồng bộ hóa ban đầu?",
    "optionsVi": [
      "iburst",
      "quickstart",
      "fast",
      "fsync",
      "flood"
    ]
  },
  {
    "id": 147,
    "topicId": 2,
    "question": "Which of the following commands is used to rotate, compress, and mail system logs?",
    "options": [
      "logrotate",
      "striplog",
      "syslogd --rotate",
      "rotatelog",
      "logger"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Sticky bit trên thư mục: chỉ owner của file (hoặc root) mới xóa được file trong thư mục đó, dù người khác có write permission. Ví dụ: /tmp có sticky bit (1777 = drwxrwxrwt).",
      "vi": "Sticky bit trên thư mục: chỉ owner của file (hoặc root) mới xóa được file trong thư mục đó, dù người khác có write permission. Ví dụ: /tmp có sticky bit (1777 = drwxrwxrwt).\n🔑 Keywords: sticky bit | 1777 | t in others execute | /tmp | delete protection | shared directory"
    },
    "questionVi": "Lệnh nào sau đây được sử dụng để xoay, nén và gửi nhật ký hệ thống?",
    "optionsVi": [
      "logrotate",
      "striplog",
      "syslogd --xoay",
      "rotatelog",
      "logger"
    ]
  },
  {
    "id": 148,
    "topicId": 2,
    "question": "Why is the correct configuration of a system's time zone important?",
    "options": [
      "Because the timezone is included in checksum calculations and timezone changes invalidate existing checksums.",
      "Because the time zone is saved as part of the modification times of files and cannot be changed after a file is created.",
      "Because the environment variables LANG and LC_MESSAGES are, by default, set according to the time zone.",
      "Because NTP chooses servers nearby based on the configured time zone.",
      "Because the conversion of Unix timestamps to local time relies on the time zone configuration."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ACL (Access Control List) cung cấp quyền truy cập chi tiết hơn chmod. 'setfacl -m u:username:rwx file' thêm ACL. 'getfacl file' xem ACL. Mount với 'acl' option.",
      "vi": "ACL (Access Control List) cung cấp quyền truy cập chi tiết hơn chmod. 'setfacl -m u:username:rwx file' thêm ACL. 'getfacl file' xem ACL. Mount với 'acl' option.\n🔑 Keywords: ACL | setfacl -m u: | getfacl | fine-grained permissions | acl mount option"
    },
    "questionVi": "Tại sao việc cấu hình đúng múi giờ của hệ thống lại quan trọng?",
    "optionsVi": [
      "Bởi vì múi giờ được bao gồm trong tính toán tổng kiểm tra và những thay đổi về múi giờ sẽ làm mất hiệu lực tổng kiểm tra hiện có.",
      "Bởi vì múi giờ được lưu như một phần thời gian sửa đổi của tệp và không thể thay đổi sau khi tệp được tạo.",
      "Bởi vì các biến môi trường LANG và LC_MESSAGES theo mặc định được đặt theo múi giờ.",
      "Vì NTP chọn các máy chủ lân cận dựa trên múi giờ đã định cấu hình.",
      "Bởi vì việc chuyển đổi dấu thời gian Unix sang giờ địa phương phụ thuộc vào cấu hình múi giờ."
    ]
  },
  {
    "id": 149,
    "topicId": 2,
    "question": "Which command, available with all sendmail-compatible MTAs, is used to list the contents of the MTA's mail queue? (Specify only the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "mailq",
    "explanation": {
      "en": "umask xác định quyền MẶC ĐỊNH khi tạo file/thư mục mới. umask 022: file mới = 644 (666-022), thư mục mới = 755 (777-022). 'umask' xem giá trị hiện tại, 'umask 027' đặt.",
      "vi": "umask xác định quyền MẶC ĐỊNH khi tạo file/thư mục mới. umask 022: file mới = 644 (666-022), thư mục mới = 755 (777-022). 'umask' xem giá trị hiện tại, 'umask 027' đặt.\n🔑 Keywords: umask | default permissions | 022 | file 644 directory 755 | permission mask"
    },
    "questionVi": "Lệnh nào, có sẵn với tất cả các MTA tương thích với sendmail, được sử dụng để liệt kê nội dung hàng đợi thư của MTA? (Chỉ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 150,
    "topicId": 2,
    "question": "What is the top-level directory which contains the configuration files for CUPS? (Specify the full path to the directory.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "/etc/cups/ cups-files.conf",
    "explanation": {
      "en": "File attributes (chattr/lsattr): '+i' immutable (không xóa/sửa được, kể cả root), '+a' append-only (chỉ thêm vào, không sửa/xóa). chattr +i quan trọng cho bảo mật file hệ thống.",
      "vi": "File attributes (chattr/lsattr): '+i' immutable (không xóa/sửa được, kể cả root), '+a' append-only (chỉ thêm vào, không sửa/xóa). chattr +i quan trọng cho bảo mật file hệ thống.\n🔑 Keywords: chattr | lsattr | +i immutable | +a append-only | file attributes | security"
    },
    "questionVi": "Thư mục cấp cao nhất chứa các tập tin cấu hình cho CUPS là gì? (Chỉ định đường dẫn đầy đủ đến thư mục.)",
    "optionsVi": []
  },
  {
    "id": 151,
    "topicId": 2,
    "question": "Which of the following commands lists all queued print jobs?",
    "options": [
      "lpd",
      "lpr",
      "lp",
      "lsq",
      "lpq"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Mandatory Access Control (MAC): SELinux (Red Hat) và AppArmor (Ubuntu/Debian) kiểm soát truy cập bổ sung ngoài DAC. SELinux: enforcing/permissive/disabled. 'getenforce' xem mode.",
      "vi": "Mandatory Access Control (MAC): SELinux (Red Hat) và AppArmor (Ubuntu/Debian) kiểm soát truy cập bổ sung ngoài DAC. SELinux: enforcing/permissive/disabled. 'getenforce' xem mode.\n🔑 Keywords: SELinux | AppArmor | MAC | enforcing permissive disabled | getenforce setenforce"
    },
    "questionVi": "Lệnh nào sau đây liệt kê tất cả các lệnh in được xếp hàng đợi?",
    "optionsVi": [
      "lpd",
      "lpr",
      "lp",
      "lsq",
      "lpq"
    ]
  },
  {
    "id": 152,
    "topicId": 2,
    "question": "Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog and sends all critical events to the remote server logger.example.com?",
    "options": [
      "mail.* /var/log/maillog mail,crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit syslog://logger.example.org",
      "mail /var/log/maillog mail.crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit @logger.example.org",
      "mail * /var/log/maillog mail crit @logger.example.org"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Tìm file SUID: 'find / -perm -4000 -type f 2>/dev/null'. Tìm file SGID: 'find / -perm -2000 -type f'. Kiểm tra file world-writable: 'find / -perm -o+w'. Quan trọng cho security audit.",
      "vi": "Tìm file SUID: 'find / -perm -4000 -type f 2>/dev/null'. Tìm file SGID: 'find / -perm -2000 -type f'. Kiểm tra file world-writable: 'find / -perm -o+w'. Quan trọng cho security audit.\n🔑 Keywords: find -perm -4000 SUID | find -perm -2000 SGID | -perm | security audit | world-writable"
    },
    "questionVi": "Mục nào sau đây trong /etc/syslog.conf ghi tất cả các sự kiện liên quan đến thư vào tệp /var/log/maillog và gửi tất cả các sự kiện quan trọng đến máy chủ từ xa logger.example.com?",
    "optionsVi": [
      "mail.* /var/log/maillog mail,crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit syslog://logger.example.org",
      "thư /var/log/maillog mail.crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit @logger.example.org",
      "thư * /var/log/maillog thư phê bình @logger.example.org"
    ]
  },
  {
    "id": 153,
    "topicId": 2,
    "question": "Which option in the /etc/ntp.conf file specifies an external NTP source to be queried for time information? (Specify only the option without any values or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "server",
    "explanation": {
      "en": "Các lệnh network: ifconfig (cũ, dùng ip thay), iwconfig (wireless), ethtool (NIC info/settings), ip link (network interfaces), ip addr (IP addresses), bridge (bridges).",
      "vi": "Các lệnh network: ifconfig (cũ, dùng ip thay), iwconfig (wireless), ethtool (NIC info/settings), ip link (network interfaces), ip addr (IP addresses), bridge (bridges).\n🔑 Keywords: ifconfig | ip | iwconfig | ethtool | network tools | deprecated vs modern"
    },
    "questionVi": "Tùy chọn nào trong tệp /etc/ntp.conf chỉ định nguồn NTP bên ngoài sẽ được truy vấn về thông tin thời gian? (Chỉ chỉ định tùy chọn mà không có bất kỳ giá trị hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 154,
    "topicId": 2,
    "question": "Which of the following protocols is related to the term open relay?",
    "options": [
      "SMTP",
      "POP3",
      "NTP",
      "IMAP",
      "LDAP"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Wireless: iwconfig eth0 essid 'MyWifi' key s:password. iw là tool hiện đại hơn. wpa_supplicant xử lý WPA/WPA2. nmcli device wifi connect 'SSID' password 'pass' dùng NetworkManager.",
      "vi": "Wireless: iwconfig eth0 essid 'MyWifi' key s:password. iw là tool hiện đại hơn. wpa_supplicant xử lý WPA/WPA2. nmcli device wifi connect 'SSID' password 'pass' dùng NetworkManager.\n🔑 Keywords: iwconfig | iw | wpa_supplicant | wireless | ESSID | WPA WPA2"
    },
    "questionVi": "Giao thức nào sau đây có liên quan đến thuật ngữ rơle mở?",
    "optionsVi": [
      "SMTP",
      "POP3",
      "NTP",
      "IMAP",
      "LDAP"
    ]
  },
  {
    "id": 155,
    "topicId": 2,
    "question": "Which of the following commands displays all environment and shell variables?",
    "options": [
      "getargs",
      "lsenv",
      "ls",
      "env",
      "lsshell"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "DHCP server: isc-dhcp-server (Debian/Ubuntu), dhcpd (Red Hat). Cấu hình /etc/dhcp/dhcpd.conf: subnet, range, option routers (gateway), option domain-name-servers (DNS).",
      "vi": "DHCP server: isc-dhcp-server (Debian/Ubuntu), dhcpd (Red Hat). Cấu hình /etc/dhcp/dhcpd.conf: subnet, range, option routers (gateway), option domain-name-servers (DNS).\n🔑 Keywords: dhcpd | isc-dhcp-server | /etc/dhcp/dhcpd.conf | subnet range | DHCP server"
    },
    "questionVi": "Lệnh nào sau đây hiển thị tất cả các biến môi trường và shell?",
    "optionsVi": [
      "getargs",
      "lsenv",
      "ls",
      "env",
      "lsshell"
    ]
  },
  {
    "id": 156,
    "topicId": 2,
    "question": "Which of the following comparison operators for test work on elements in the file system? (Choose two.)",
    "options": [
      "-z",
      "-eq",
      "-d",
      "-f",
      "-lt"
    ],
    "correct": [
      2,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "DNS server BIND: named daemon, cấu hình /etc/named.conf hoặc /etc/bind/named.conf. Zone files trong /var/named/ hoặc /etc/bind/. named-checkconf kiểm tra cú pháp.",
      "vi": "DNS server BIND: named daemon, cấu hình /etc/named.conf hoặc /etc/bind/named.conf. Zone files trong /var/named/ hoặc /etc/bind/. named-checkconf kiểm tra cú pháp.\n🔑 Keywords: BIND | named | /etc/named.conf | zone files | /var/named/ | DNS server"
    },
    "questionVi": "Toán tử so sánh nào sau đây dùng để kiểm tra hoạt động trên các phần tử trong hệ thống tệp? (Chọn hai.)",
    "optionsVi": [
      "-z",
      "-eq",
      "-d",
      "-f",
      "-lt"
    ]
  },
  {
    "id": 157,
    "topicId": 2,
    "question": "What information is provided by the echo $$ command?",
    "options": [
      "The process ID of the current shell.",
      "The process ID for the following command.",
      "The process ID of the last command executed.",
      "The process ID of the last command which has been placed in the background.",
      "The process ID of the echo command."
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "NFS (Network File System): mount NFS share 'mount -t nfs server:/export /mnt'. Cấu hình server: /etc/exports. exportfs -a áp dụng, showmount -e server xem exports.",
      "vi": "NFS (Network File System): mount NFS share 'mount -t nfs server:/export /mnt'. Cấu hình server: /etc/exports. exportfs -a áp dụng, showmount -e server xem exports.\n🔑 Keywords: NFS | mount -t nfs | /etc/exports | exportfs | showmount | network filesystem"
    },
    "questionVi": "Lệnh echo $$ cung cấp thông tin gì?",
    "optionsVi": [
      "ID tiến trình của shell hiện tại.",
      "ID tiến trình cho lệnh sau.",
      "ID tiến trình của lệnh cuối cùng được thực thi.",
      "ID tiến trình của lệnh cuối cùng đã được đặt ở chế độ nền.",
      "ID tiến trình của lệnh echo."
    ]
  },
  {
    "id": 158,
    "topicId": 2,
    "question": "Which command makes the shell variable named VARIABLE visible to subshells?",
    "options": [
      "export $VARIABLE",
      "env VARIABLE",
      "set $VARIABLE",
      "set VARIABLE",
      "export VARIABLE"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Samba cho phép chia sẻ file giữa Linux và Windows (SMB/CIFS). Cấu hình /etc/samba/smb.conf. smbd xử lý file sharing, nmbd xử lý name resolution. 'smbclient -L host' liệt kê shares.",
      "vi": "Samba cho phép chia sẻ file giữa Linux và Windows (SMB/CIFS). Cấu hình /etc/samba/smb.conf. smbd xử lý file sharing, nmbd xử lý name resolution. 'smbclient -L host' liệt kê shares.\n🔑 Keywords: Samba | SMB CIFS | /etc/samba/smb.conf | smbd nmbd | smbclient | Windows sharing"
    },
    "questionVi": "Lệnh nào làm cho biến shell có tên VARIABLE hiển thị với các shell con?",
    "optionsVi": [
      "xuất $BIẾN",
      "env BIẾN",
      "đặt $ BIẾN ĐỔI",
      "đặt BIẾN",
      "xuất BIẾN"
    ]
  },
  {
    "id": 159,
    "topicId": 2,
    "question": "What output is produced by the following command sequence?echo '1 2 3 4 5 6' | while read a b c; doecho result $c $b $a;done",
    "options": [
      "result: 6 5 4",
      "result: 1 2 3 4 5 6",
      "result: 3 4 5 6 2 1",
      "result: 6 5 4 3 2 1",
      "result: 3 2 1"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "OpenLDAP: slapd là LDAP server daemon. ldapsearch tìm kiếm, ldapadd thêm entries, ldapmodify sửa. /etc/ldap/slapd.conf hoặc cn=config là cấu hình. LDAP dùng port 389, LDAPS port 636.",
      "vi": "OpenLDAP: slapd là LDAP server daemon. ldapsearch tìm kiếm, ldapadd thêm entries, ldapmodify sửa. /etc/ldap/slapd.conf hoặc cn=config là cấu hình. LDAP dùng port 389, LDAPS port 636.\n🔑 Keywords: OpenLDAP | slapd | ldapsearch ldapadd | port 389 636 | LDAP directory"
    },
    "questionVi": "Kết quả nào được tạo ra bởi chuỗi lệnh sau?echo '1 2 3 4 5 6' | trong khi đọc a b c; kết quả doecho $c $b $a;xong",
    "optionsVi": [
      "kết quả: 6 5 4",
      "kết quả: 1 2 3 4 5 6",
      "kết quả: 3 4 5 6 2 1",
      "kết quả: 6 5 4 3 2 1",
      "kết quả: 3 2 1"
    ]
  },
  {
    "id": 160,
    "topicId": 2,
    "question": "Which of the following configuration files should be modified to globally set shell variables for all users?",
    "options": [
      "/etc/profile",
      "/etc/bashrc",
      "~/.bash_profile",
      "/etc/.bashrc",
      "/etc/shellenv"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Kerberos authentication: KDC (Key Distribution Center) cấp tickets. kinit lấy ticket, klist xem tickets, kdestroy xóa tickets. /etc/krb5.conf là cấu hình client.",
      "vi": "Kerberos authentication: KDC (Key Distribution Center) cấp tickets. kinit lấy ticket, klist xem tickets, kdestroy xóa tickets. /etc/krb5.conf là cấu hình client.\n🔑 Keywords: Kerberos | KDC | kinit | klist | kdestroy | ticket | /etc/krb5.conf"
    },
    "questionVi": "Tệp cấu hình nào sau đây cần được sửa đổi để đặt các biến shell toàn cục cho tất cả người dùng?",
    "optionsVi": [
      "/etc/profile",
      "/etc/bashrc",
      "~/.bash_profile",
      "/etc/.bashrc",
      "/etc/shellenv"
    ]
  },
  {
    "id": 161,
    "topicId": 2,
    "question": "What output does the command seq 10 produce?",
    "options": [
      "A continuous stream of numbers increasing in increments of 10 until the command is stopped.",
      "It creates no output because a second parameter is missing.",
      "The number 0 through 9 with one number per line.",
      "The number 10 to standard output.",
      "The numbers 1 through 10 with one number per line."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "VPN: OpenVPN (TLS-based), WireGuard (hiện đại, UDP), IPsec (strongSwan, Libreswan). SSH tunneling: 'ssh -L 8080:internal:80 jumphost' local port forwarding.",
      "vi": "VPN: OpenVPN (TLS-based), WireGuard (hiện đại, UDP), IPsec (strongSwan, Libreswan). SSH tunneling: 'ssh -L 8080:internal:80 jumphost' local port forwarding.\n🔑 Keywords: OpenVPN | WireGuard | IPsec | SSH tunnel | -L port forwarding | VPN"
    },
    "questionVi": "Lệnh seq 10 tạo ra kết quả gì?",
    "optionsVi": [
      "Một chuỗi số liên tục tăng dần theo gia số 10 cho đến khi lệnh dừng.",
      "Nó không tạo ra đầu ra vì thiếu tham số thứ hai.",
      "Số từ 0 đến 9, mỗi dòng một số.",
      "Số 10 là đầu ra tiêu chuẩn.",
      "Các số từ 1 đến 10, mỗi dòng một số."
    ]
  },
  {
    "id": 162,
    "topicId": 2,
    "question": "What command list the aliases defined in the current Bash shell? (Specify only the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "alias",
    "explanation": {
      "en": "Backup: rsync đồng bộ file hiệu quả (-a archive, -v verbose, -z compress, --delete). tar cho archive. dump/restore cho ext fs. bacula/amanda cho enterprise backup.",
      "vi": "Backup: rsync đồng bộ file hiệu quả (-a archive, -v verbose, -z compress, --delete). tar cho archive. dump/restore cho ext fs. bacula/amanda cho enterprise backup.\n🔑 Keywords: rsync | -a -v -z --delete | backup | tar | dump restore | incremental backup"
    },
    "questionVi": "Lệnh nào liệt kê các bí danh được xác định trong shell Bash hiện tại? (Chỉ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 163,
    "topicId": 2,
    "question": "Which of the following commands can be used to limit the amount of memory a user may use?",
    "options": [
      "umask",
      "usermod",
      "passwd",
      "ulimit",
      "chage"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "rsync -avz --delete /src/ user@host:/dest/ sao chép src đến dest. Dấu '/' sau src quan trọng: có '/' copy nội dung, không có '/' copy cả thư mục src vào dest.",
      "vi": "rsync -avz --delete /src/ user@host:/dest/ sao chép src đến dest. Dấu '/' sau src quan trọng: có '/' copy nội dung, không có '/' copy cả thư mục src vào dest.\n🔑 Keywords: rsync | trailing slash | -avz | --delete | sync | remote backup"
    },
    "questionVi": "Lệnh nào sau đây có thể được sử dụng để giới hạn dung lượng bộ nhớ mà người dùng có thể sử dụng?",
    "optionsVi": [
      "umask",
      "usermod",
      "passwd",
      "ulimit",
      "chage"
    ]
  },
  {
    "id": 164,
    "topicId": 2,
    "question": "What is a purpose of an SSH host key?",
    "options": [
      "It must be sent by any SSH client in addition to a user key in order to identify the client's host.",
      "It is root key by which all user SSH keys must be signed.",
      "It provides the server's identity information to connecting SSH clients.",
      "It authenticates any user that logs into a remote machine from the key's host.",
      "It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts."
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "LVM snapshot: 'lvcreate -L 1G -s -n snap /dev/vg/lv' tạo snapshot. Snapshot dùng copy-on-write. Hữu ích để backup nhất quán mà không cần unmount. lvremove để xóa snapshot.",
      "vi": "LVM snapshot: 'lvcreate -L 1G -s -n snap /dev/vg/lv' tạo snapshot. Snapshot dùng copy-on-write. Hữu ích để backup nhất quán mà không cần unmount. lvremove để xóa snapshot.\n🔑 Keywords: LVM snapshot | lvcreate -s | copy-on-write | snapshot backup | lvremove"
    },
    "questionVi": "Mục đích của khóa máy chủ SSH là gì?",
    "optionsVi": [
      "Nó phải được gửi bởi bất kỳ máy khách SSH nào ngoài khóa người dùng để xác định máy chủ của máy khách.",
      "Đây là khóa gốc mà tất cả các khóa SSH của người dùng phải được ký.",
      "Nó cung cấp thông tin nhận dạng của máy chủ để kết nối các máy khách SSH.",
      "Nó xác thực bất kỳ người dùng nào đăng nhập vào máy từ xa từ máy chủ của khóa.",
      "Nó được sử dụng bởi các dịch vụ hệ thống như cron, syslog hoặc công việc sao lưu để tự động kết nối với các máy chủ từ xa."
    ]
  },
  {
    "id": 165,
    "topicId": 2,
    "question": "What is the purpose of TCP wrapper?",
    "options": [
      "Manage and adjust bandwidth used by TCP services.",
      "Bind a network service to a TCP port.",
      "Encapsulate TCP messages in IP packets.",
      "Add SSL support to plain text TCP services.",
      "Limit access to a network service."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "RAID (Redundant Array of Independent Disks): RAID 0 (stripe, không redundancy), RAID 1 (mirror), RAID 5 (stripe+parity, 1 disk fault tolerance), RAID 6 (2 disk fault tolerance), RAID 10.",
      "vi": "RAID (Redundant Array of Independent Disks): RAID 0 (stripe, không redundancy), RAID 1 (mirror), RAID 5 (stripe+parity, 1 disk fault tolerance), RAID 6 (2 disk fault tolerance), RAID 10.\n🔑 Keywords: RAID 0 1 5 6 10 | mdadm | strip mirror parity | fault tolerance | software RAID"
    },
    "questionVi": "Mục đích của trình bao bọc TCP là gì?",
    "optionsVi": [
      "Quản lý và điều chỉnh băng thông được sử dụng bởi các dịch vụ TCP.",
      "Liên kết dịch vụ mạng với cổng TCP.",
      "Đóng gói các thông điệp TCP trong các gói IP.",
      "Thêm hỗ trợ SSL cho các dịch vụ TCP văn bản thuần túy.",
      "Giới hạn quyền truy cập vào một dịch vụ mạng."
    ]
  },
  {
    "id": 166,
    "topicId": 2,
    "question": "Given the following excerpt of the sudo configuration:jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdiskWhich of the following statements are true? (Choose three.)",
    "options": [
      "Jane can run /bin/id only after specifying her password.",
      "Jane can run /sbin/fdisk after specifying root's password.",
      "Jane can run /sbin/fdisk after specifying her password.",
      "Jane can run /bin/kill without specifying a password.",
      "Jane can run /bin/id without specifying her password."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "mdadm quản lý software RAID. 'mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc'. /proc/mdstat xem status. 'mdadm --detail /dev/md0' thông tin chi tiết.",
      "vi": "mdadm quản lý software RAID. 'mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc'. /proc/mdstat xem status. 'mdadm --detail /dev/md0' thông tin chi tiết.\n🔑 Keywords: mdadm | --create | --level | /proc/mdstat | software RAID | --detail"
    },
    "questionVi": "Cho đoạn trích sau của cấu hình sudo:jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk Khẳng định nào sau đây là đúng? (Chọn ba.)",
    "optionsVi": [
      "Jane chỉ có thể chạy /bin/id sau khi chỉ định mật khẩu của mình.",
      "Jane có thể chạy /sbin/fdisk sau khi chỉ định mật khẩu của root.",
      "Jane có thể chạy /sbin/fdisk sau khi chỉ định mật khẩu của mình.",
      "Jane có thể chạy /bin/kill mà không cần chỉ định mật khẩu.",
      "Jane có thể chạy /bin/id mà không cần chỉ định mật khẩu của mình."
    ]
  },
  {
    "id": 167,
    "topicId": 2,
    "question": "Which configuration file contains the default options for SSH clients?",
    "options": [
      "/etc/ssh/sshd_config",
      "/etc/ssh/ssh",
      "/etc/ssh/ssh_config",
      "/etc/ssh/client",
      "/etc/ssh/ssh_client"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "crontab format: * * * * * command. Mỗi * là: phút(0-59) giờ(0-23) ngày(1-31) tháng(1-12) thứ(0-7). Đặc biệt: @reboot (khi boot), @daily, @weekly, @monthly.",
      "vi": "crontab format: * * * * * command. Mỗi * là: phút(0-59) giờ(0-23) ngày(1-31) tháng(1-12) thứ(0-7). Đặc biệt: @reboot (khi boot), @daily, @weekly, @monthly.\n🔑 Keywords: crontab | * * * * * | minute hour day month weekday | @reboot @daily @weekly"
    },
    "questionVi": "Tệp cấu hình nào chứa các tùy chọn mặc định cho máy khách SSH?",
    "optionsVi": [
      "/etc/ssh/sshd_config",
      "/etc/ssh/ssh",
      "/etc/ssh/ssh_config",
      "/etc/ssh/client",
      "/etc/ssh/ssh_client"
    ]
  },
  {
    "id": 168,
    "topicId": 2,
    "question": "Depending on a system's configuration, which of the following files can be used to enable and disable network services running on this host?",
    "options": [
      "/etc/profile",
      "/etc/xinetd.conf",
      "/etc/ports",
      "/etc/services",
      "/etc/host.conf"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "at + thời gian: 'echo \"command\" | at now + 2 hours', 'at 14:30 tomorrow'. Batch mode: 'batch' chạy khi load average thấp. /var/spool/at lưu jobs. /etc/at.allow và /etc/at.deny kiểm soát truy cập.",
      "vi": "at + thời gian: 'echo \"command\" | at now + 2 hours', 'at 14:30 tomorrow'. Batch mode: 'batch' chạy khi load average thấp. /var/spool/at lưu jobs. /etc/at.allow và /etc/at.deny kiểm soát truy cập.\n🔑 Keywords: at | now + 2 hours | at 14:30 | batch | /var/spool/at | at.allow at.deny"
    },
    "questionVi": "Tùy thuộc vào cấu hình của hệ thống, tệp nào sau đây có thể được sử dụng để bật và tắt các dịch vụ mạng đang chạy trên máy chủ này?",
    "optionsVi": [
      "/etc/profile",
      "/etc/xinetd.conf",
      "/etc/ports",
      "/etc/services",
      "/etc/host.conf"
    ]
  },
  {
    "id": 169,
    "topicId": 2,
    "question": "Which of the following commands can identify the PID od a process which opened a TCP port?",
    "options": [
      "ptrace",
      "strace",
      "debug",
      "lsof",
      "nessus"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Bash arrays: arr=(a b c), truy cập ${arr[0]}, tất cả ${arr[@]}, độ dài ${#arr[@]}. Associative arrays (bash 4+): declare -A dict; dict[key]=value. Duyệt: for elem in \"${arr[@]}\".",
      "vi": "Bash arrays: arr=(a b c), truy cập ${arr[0]}, tất cả ${arr[@]}, độ dài ${#arr[@]}. Associative arrays (bash 4+): declare -A dict; dict[key]=value. Duyệt: for elem in \"${arr[@]}\".\n🔑 Keywords: bash array | arr=() | ${arr[0]} | ${arr[@]} | associative array | declare -A"
    },
    "questionVi": "Lệnh nào sau đây có thể xác định PID hoặc một quá trình đã mở cổng TCP?",
    "optionsVi": [
      "ptrace",
      "strace",
      "debug",
      "lsof",
      "nessus"
    ]
  },
  {
    "id": 170,
    "topicId": 2,
    "question": "When using X11 forwarding in SSH, what environment variable is automatically set in the remote shell in order to help applications to connect to the correct X11 server? (Specify only the environment variable without any additional commands or values.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "DISPLAY",
    "explanation": {
      "en": "Shell script debugging: 'bash -x script.sh' trace execution, 'bash -n script.sh' kiểm tra syntax, 'set -e' thoát khi có lỗi, 'set -u' lỗi nếu dùng biến chưa định nghĩa.",
      "vi": "Shell script debugging: 'bash -x script.sh' trace execution, 'bash -n script.sh' kiểm tra syntax, 'set -e' thoát khi có lỗi, 'set -u' lỗi nếu dùng biến chưa định nghĩa.\n🔑 Keywords: bash -x trace | bash -n syntax check | set -e | set -u | shell debugging"
    },
    "questionVi": "Khi sử dụng chuyển tiếp X11 trong SSH, biến môi trường nào được tự động đặt trong shell từ xa để giúp các ứng dụng kết nối với đúng máy chủ X11? (Chỉ chỉ định biến môi trường mà không có bất kỳ lệnh hoặc giá trị bổ sung nào.)",
    "optionsVi": []
  },
  {
    "id": 171,
    "topicId": 2,
    "question": "The presence of what file will temporarily prevent all users except root from logging into a system? (Specify the full name of the file, including path.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "/sbin/nologin",
    "explanation": {
      "en": "Heredoc trong bash: cat << EOF ... EOF. Cho phép nhập nhiều dòng text. Dùng trong scripts để tạo config file hoặc truyền input cho lệnh. '<<-EOF' bỏ tab thụt đầu dòng.",
      "vi": "Heredoc trong bash: cat << EOF ... EOF. Cho phép nhập nhiều dòng text. Dùng trong scripts để tạo config file hoặc truyền input cho lệnh. '<<-EOF' bỏ tab thụt đầu dòng.\n🔑 Keywords: heredoc | << EOF | multi-line input | bash heredoc | cat << EOF"
    },
    "questionVi": "Sự hiện diện của tập tin nào sẽ tạm thời ngăn chặn tất cả người dùng ngoại trừ root đăng nhập vào hệ thống? (Chỉ định tên đầy đủ của tệp, bao gồm cả đường dẫn.)",
    "optionsVi": []
  },
  {
    "id": 172,
    "topicId": 2,
    "question": "Which of the following commands preloads and manages existing SSH keys that are used for automatic authentication while logging in to order machines usingSSH?",
    "options": [
      "sshd",
      "ssh-keyring",
      "ssh-keygen",
      "ssh-pki",
      "ssh-agent"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "String manipulation trong bash: ${#var} độ dài, ${var:0:5} substring, ${var//old/new} replace all, ${var#prefix} xóa prefix ngắn nhất, ${var%suffix} xóa suffix ngắn nhất.",
      "vi": "String manipulation trong bash: ${#var} độ dài, ${var:0:5} substring, ${var//old/new} replace all, ${var#prefix} xóa prefix ngắn nhất, ${var%suffix} xóa suffix ngắn nhất.\n🔑 Keywords: ${#var} | ${var:offset:length} | ${var//old/new} | ${var#} | ${var%} | string manipulation"
    },
    "questionVi": "Lệnh nào sau đây tải trước và quản lý các khóa SSH hiện có được sử dụng để xác thực tự động khi đăng nhập vào máy đặt hàng bằng SSH?",
    "optionsVi": [
      "sshd",
      "ssh-keyring",
      "ssh-keygen",
      "ssh-pki",
      "ssh-agent"
    ]
  },
  {
    "id": 173,
    "topicId": 2,
    "question": "On a machine running several X servers, how do programs identify the different instances of the X11 server?",
    "options": [
      "By a fixed UUID that is defined in the X11 configuration file.",
      "By a display name like: 1.",
      "By the name of the user that runs the X server like x11:bob.",
      "By a device name like /dev/X11/xservers/1.",
      "By a unique IPv6 address from the fe80::/64 subnet."
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Process substitution trong bash: <(command) thay thế output của command bằng file descriptor. 'diff <(command1) <(command2)' so sánh output. '>(command)' ngược lại.",
      "vi": "Process substitution trong bash: <(command) thay thế output của command bằng file descriptor. 'diff <(command1) <(command2)' so sánh output. '>(command)' ngược lại.\n🔑 Keywords: process substitution | <(command) | >(command) | diff comparison | bash advanced"
    },
    "questionVi": "Trên một máy chạy nhiều máy chủ X, làm cách nào để các chương trình xác định các phiên bản khác nhau của máy chủ X11?",
    "optionsVi": [
      "Bằng UUID cố định được xác định trong tệp cấu hình X11.",
      "Bằng tên hiển thị như: 1.",
      "Theo tên người dùng chạy máy chủ X như x11:bob.",
      "Bằng tên thiết bị như /dev/X11/xservers/1.",
      "Bởi một địa chỉ IPv6 duy nhất từ ​​mạng con fe80::/64."
    ]
  },
  {
    "id": 174,
    "topicId": 2,
    "question": "What is the purpose of a screen reader?",
    "options": [
      "It manages virtual keyboards on touch screen displays.",
      "It reads the parameters of the attached monitors and creates an appropriate X11 configuration.",
      "It displays lines and markers to help people use speed reading techniques.",
      "It manages and displays files that contain e-books.",
      "It reads displayed text to accommodate the needs of blind or visually impaired people."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "tee lệnh đọc stdin và ghi ra cả stdout lẫn file. 'command | tee output.txt' vừa hiển thị vừa lưu file. '-a' append vào file. Hữu ích khi cần vừa xem vừa lưu log.",
      "vi": "tee lệnh đọc stdin và ghi ra cả stdout lẫn file. 'command | tee output.txt' vừa hiển thị vừa lưu file. '-a' append vào file. Hữu ích khi cần vừa xem vừa lưu log.\n🔑 Keywords: tee | stdout and file | -a append | pipe tee | log and display"
    },
    "questionVi": "Mục đích của trình đọc màn hình là gì?",
    "optionsVi": [
      "Nó quản lý bàn phím ảo trên màn hình cảm ứng.",
      "Nó đọc các thông số của màn hình đính kèm và tạo cấu hình X11 thích hợp.",
      "Nó hiển thị các dòng và điểm đánh dấu để giúp mọi người sử dụng kỹ thuật đọc tốc độ.",
      "Nó quản lý và hiển thị các tập tin có chứa sách điện tử.",
      "Nó đọc văn bản được hiển thị để đáp ứng nhu cầu của người mù hoặc khiếm thị."
    ]
  },
  {
    "id": 175,
    "topicId": 2,
    "question": "The X11 configuration file xorg.conf is grouped into section. How is the content of the section SectionName represented?",
    "options": [
      "It is placed in curly brackets as in Section SectionName {...}.",
      "It is placed between the tags and .",
      "It is placed between a line containing Section \"SectionName\" and a line containing EndSection.",
      "It is placed after the row [SectionName].",
      "It is placed after an initial unindented Section \"SectionName\" and must be indented by exactly one tab character."
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "xargs chuyển stdin thành arguments cho lệnh khác. 'find . -name \"*.log\" | xargs rm' xóa tất cả file .log. '-I {}' đặt placeholder. '-P N' chạy N lệnh song song.",
      "vi": "xargs chuyển stdin thành arguments cho lệnh khác. 'find . -name \"*.log\" | xargs rm' xóa tất cả file .log. '-I {}' đặt placeholder. '-P N' chạy N lệnh song song.\n🔑 Keywords: xargs | stdin to arguments | -I {} | -P parallel | find | xargs | bulk operations"
    },
    "questionVi": "Tệp cấu hình X11 xorg.conf được nhóm thành phần. Nội dung của phần MụcName được thể hiện như thế nào?",
    "optionsVi": [
      "Nó được đặt trong dấu ngoặc nhọn như trong Phần Tên phần {...}.",
      "Nó được đặt giữa các thẻ và .",
      "Nó được đặt giữa một dòng chứa Phần \"Tên phần\" và một dòng chứa Phần cuối.",
      "Nó được đặt sau hàng [SectionName].",
      "Nó được đặt sau phần \"SectionName\" ban đầu không được thụt lề và phải được thụt lề bằng chính xác một ký tự tab."
    ]
  },
  {
    "id": 176,
    "topicId": 2,
    "question": "Which of the following features are provided by SPICE? (Choose two.)",
    "options": [
      "Connecting local USB devices to remote applications.",
      "Accessing graphical applications on a remote host.",
      "Replacing Xorg as local X11 server.",
      "Downloading and locally installing applications from a remote machine.",
      "Uploading and running a binary program on a remote machine."
    ],
    "correct": [
      0,
      1
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "tr dịch hoặc xóa ký tự. 'tr a-z A-Z' chuyển thành chữ hoa. 'tr -d \"\\n\"' xóa newlines. 'tr -s \" \"' gộp nhiều dấu cách thành một. wc đếm dòng(-l), từ(-w), ký tự(-c).",
      "vi": "tr dịch hoặc xóa ký tự. 'tr a-z A-Z' chuyển thành chữ hoa. 'tr -d \"\\n\"' xóa newlines. 'tr -s \" \"' gộp nhiều dấu cách thành một. wc đếm dòng(-l), từ(-w), ký tự(-c).\n🔑 Keywords: tr | translate characters | tr -d delete | tr -s squeeze | wc -l -w -c"
    },
    "questionVi": "Tính năng nào sau đây được SPICE cung cấp? (Chọn hai.)",
    "optionsVi": [
      "Kết nối các thiết bị USB cục bộ với các ứng dụng từ xa.",
      "Truy cập các ứng dụng đồ họa trên máy chủ từ xa.",
      "Thay thế Xorg làm máy chủ X11 cục bộ.",
      "Tải xuống và cài đặt ứng dụng cục bộ từ máy từ xa.",
      "Tải lên và chạy chương trình nhị phân trên máy từ xa."
    ]
  },
  {
    "id": 177,
    "topicId": 2,
    "question": "What is the systemd journal stored?",
    "options": [
      "/var/jlog/ and /var/jlogd/",
      "/proc/log/ and /proc/klog/",
      "/run/log/journal/ or /var/log/journal/",
      "/var/log/syslog.bin or /var/log/syslog.jrn",
      "/etc/systemd/journal/ or /usr/lib/systemd/journal/"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "split chia file lớn thành nhiều phần nhỏ. '-l N' chia theo số dòng, '-b Nk' chia theo kích thước (kB). join kết hợp dòng từ hai file dựa trên field chung. paste ghép file theo cột.",
      "vi": "split chia file lớn thành nhiều phần nhỏ. '-l N' chia theo số dòng, '-b Nk' chia theo kích thước (kB). join kết hợp dòng từ hai file dựa trên field chung. paste ghép file theo cột.\n🔑 Keywords: split -l -b | join | paste | file splitting | file joining"
    },
    "questionVi": "Nhật ký systemd được lưu trữ là gì?",
    "optionsVi": [
      "/var/jlog/ và /var/jlogd/",
      "/proc/log/ và /proc/klog/",
      "/run/log/journal/ hoặc /var/log/journal/",
      "/var/log/syslog.bin hoặc /var/log/syslog.jrn",
      "/etc/systemd/journal/ hoặc /usr/lib/systemd/journal/"
    ]
  },
  {
    "id": 178,
    "topicId": 2,
    "question": "Which of the following is true regarding the command sendmail?",
    "options": [
      "With any MTA, the sendmail command must be run periodically by the cron daemon.",
      "When using systemd, sendmail is an alias to relayctl.",
      "The sendmail command prints the MTA's queue history of which mails have been sent successfully.",
      "It is only available when the sendmail MTA is installed.",
      "All common MTAs, including Postfix and Exim, provide a sendmail command."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "sort sắp xếp. '-n' numeric, '-r' reverse, '-k2' sort theo cột 2, '-t:' dùng ':' làm separator, '-u' unique. uniq -c đếm số lần xuất hiện. Thường dùng: sort | uniq -c | sort -rn.",
      "vi": "sort sắp xếp. '-n' numeric, '-r' reverse, '-k2' sort theo cột 2, '-t:' dùng ':' làm separator, '-u' unique. uniq -c đếm số lần xuất hiện. Thường dùng: sort | uniq -c | sort -rn.\n🔑 Keywords: sort -n -r -k -t | uniq -c | sort | uniq -c | sort -rn | frequency count"
    },
    "questionVi": "Điều nào sau đây đúng với lệnh sendmail?",
    "optionsVi": [
      "Với bất kỳ MTA nào, lệnh sendmail phải được chạy định kỳ bởi cron daemon.",
      "Khi sử dụng systemd, sendmail là bí danh của Relayctl.",
      "Lệnh sendmail in lịch sử hàng đợi của MTA trong đó các thư đã được gửi thành công.",
      "Nó chỉ khả dụng khi MTA sendmail được cài đặt.",
      "Tất cả các MTA phổ biến, bao gồm Postfix và Exim, đều cung cấp lệnh gửi thư."
    ]
  },
  {
    "id": 179,
    "topicId": 2,
    "question": "Which file inside the CUPS configuration directory contains the settings of the printers?",
    "options": [
      "cups-devices.conf",
      "snmp.conf",
      "printers.conf",
      "printcap.conf",
      "cupsd.conf"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "printf format: '%s' string, '%d' integer, '%f' float, '%05d' zero-padded. In ra màn hình giống C printf. echo -e để xử lý escape sequences (\\n, \\t). echo -n không in newline.",
      "vi": "printf format: '%s' string, '%d' integer, '%f' float, '%05d' zero-padded. In ra màn hình giống C printf. echo -e để xử lý escape sequences (\\n, \\t). echo -n không in newline.\n🔑 Keywords: printf | %s %d %f | echo -e | echo -n | formatting output"
    },
    "questionVi": "Tệp nào trong thư mục cấu hình CUPS chứa cài đặt của máy in?",
    "optionsVi": [
      "cups-devices.conf",
      "snmp.conf",
      "printers.conf",
      "printcap.conf",
      "cupsd.conf"
    ]
  },
  {
    "id": 180,
    "topicId": 2,
    "question": "Which file is processed by newaliases? (Specify the full name of the file, including path.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "/etc/mail/aliases",
    "explanation": {
      "en": "Toán tử số học bash: $((expr)). Ví dụ: $((2+3)), $((i++)), $((2**8)). let 'i+=1' tương đương. expr là lệnh ngoài (cũ hơn). bc là calculator cho số thực: 'echo \"3.14*2\" | bc'.",
      "vi": "Toán tử số học bash: $((expr)). Ví dụ: $((2+3)), $((i++)), $((2**8)). let 'i+=1' tương đương. expr là lệnh ngoài (cũ hơn). bc là calculator cho số thực: 'echo \"3.14*2\" | bc'.\n🔑 Keywords: $((expr)) | arithmetic | let | expr | bc calculator | bash math"
    },
    "questionVi": "Tập tin nào được xử lý bởi newaliases? (Chỉ định tên đầy đủ của tệp, bao gồm cả đường dẫn.)",
    "optionsVi": []
  },
  {
    "id": 181,
    "topicId": 2,
    "question": "Which of the following are syslog facilities? (Choose two.)",
    "options": [
      "local5",
      "accounting",
      "mail",
      "postmaster",
      "remote"
    ],
    "correct": [
      0,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Kiểm tra file trong bash: '-f' là file thường, '-d' thư mục, '-e' tồn tại, '-r' readable, '-w' writable, '-x' executable, '-s' kích thước > 0, '-L' symbolic link, '-z' chuỗi rỗng.",
      "vi": "Kiểm tra file trong bash: '-f' là file thường, '-d' thư mục, '-e' tồn tại, '-r' readable, '-w' writable, '-x' executable, '-s' kích thước > 0, '-L' symbolic link, '-z' chuỗi rỗng.\n🔑 Keywords: -f file | -d directory | -e exists | -r -w -x | -s non-empty | -L symlink | bash test"
    },
    "questionVi": "Những tiện ích nào sau đây là tiện ích nhật ký hệ thống? (Chọn hai.)",
    "optionsVi": [
      "local5",
      "accounting",
      "mail",
      "postmaster",
      "remote"
    ]
  },
  {
    "id": 182,
    "topicId": 2,
    "question": "Which of the following parameters are used for journalctl to limit the time frame of the output? (Choose two.)",
    "options": [
      "--since=",
      "--from=",
      "--until=",
      "--upto=",
      "--date="
    ],
    "correct": [
      0,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "case statement bash: 'case $var in pattern1) commands;; pattern2) commands;; *) default;; esac'. Hữu ích để xử lý nhiều lựa chọn. Hỗ trợ glob pattern (*,?,[ ]).",
      "vi": "case statement bash: 'case $var in pattern1) commands;; pattern2) commands;; *) default;; esac'. Hữu ích để xử lý nhiều lựa chọn. Hỗ trợ glob pattern (*,?,[ ]).\n🔑 Keywords: case esac | pattern matching | ;; | bash case statement | multiple conditions"
    },
    "questionVi": "Tham số nào sau đây được sử dụng cho tạp chí để giới hạn khung thời gian của đầu ra? (Chọn hai.)",
    "optionsVi": [
      "--since=",
      "--from=",
      "--until=",
      "--upto=",
      "--date="
    ]
  },
  {
    "id": 183,
    "topicId": 2,
    "question": "What is true regarding the file ~/.forward?",
    "options": [
      "When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.",
      "After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.",
      "Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.",
      "As ~/.forward is owned by the MTA and not writable by the user, it must be edited using the editaliases command.",
      "By default, only ~/.forward files of users in the group mailq are processed while all other user's ~/.forward files are ignored."
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Positional parameters: $0=tên script, $1-$9=tham số, $#=số tham số, $@=tất cả tham số (mỗi cái là 1 string), $*=tất cả dưới dạng 1 string. shift dịch chuyển tham số.",
      "vi": "Positional parameters: $0=tên script, $1-$9=tham số, $#=số tham số, $@=tất cả tham số (mỗi cái là 1 string), $*=tất cả dưới dạng 1 string. shift dịch chuyển tham số.\n🔑 Keywords: $0 $1 $# | $@ $* | positional parameters | shift | script arguments"
    },
    "questionVi": "Điều gì đúng về tệp ~/.forward?",
    "optionsVi": [
      "Khi được định cấu hình chính xác ~/.forward có thể được sử dụng để chuyển tiếp từng thư đến đến một hoặc nhiều người nhận khác.",
      "Sau khi chỉnh sửa ~/.forward, người dùng phải chạy các bí danh mới để thông báo cho máy chủ thư về những thay đổi.",
      "Sử dụng ~/.forward, root có thể định cấu hình bất kỳ địa chỉ email nào trong khi tất cả người dùng khác chỉ có thể định cấu hình địa chỉ của riêng họ.",
      "Vì ~/.forward được sở hữu bởi MTA và người dùng không thể ghi được nên nó phải được chỉnh sửa bằng lệnh editaliases.",
      "Theo mặc định, chỉ các tệp ~/.forward của người dùng trong nhóm mailq được xử lý trong khi tất cả các tệp ~/.forward của người dùng khác đều bị bỏ qua."
    ]
  },
  {
    "id": 184,
    "topicId": 2,
    "question": "Which of the following commands display a list of jobs in the print queue? (Choose two.)",
    "options": [
      "cups --list",
      "lprm -l",
      "lpstat",
      "lpr -q",
      "lpq"
    ],
    "correct": [
      2,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "read lệnh trong bash để nhận input từ user hoặc file. 'read -p \"Enter:\" var' với prompt. 'read -s' ẩn input (password). 'while IFS= read -r line; do ... done < file' đọc từng dòng file.",
      "vi": "read lệnh trong bash để nhận input từ user hoặc file. 'read -p \"Enter:\" var' với prompt. 'read -s' ẩn input (password). 'while IFS= read -r line; do ... done < file' đọc từng dòng file.\n🔑 Keywords: read -p prompt | read -s silent | read -r raw | while read line | user input"
    },
    "questionVi": "Lệnh nào sau đây hiển thị danh sách các công việc trong hàng đợi in? (Chọn hai.)",
    "optionsVi": [
      "cốc --danh sách",
      "lpm -l",
      "lpstat",
      "lpr -q",
      "lpq"
    ]
  },
  {
    "id": 185,
    "topicId": 2,
    "question": "On a system using systemd-journald, which of the following commands add the message Howdy to the system log? (Choose two.)",
    "options": [
      "append Howdy",
      "logger Howdy",
      "systemd-cat echo Howdy",
      "echo Howdy > /dev/journal",
      "journalctl add Howdy"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Trap signals trong bash: 'trap \"cleanup\" EXIT INT TERM' chạy function cleanup khi script thoát hoặc nhận Ctrl+C. Quan trọng để cleanup temp files. 'trap - SIGINT' reset trap.",
      "vi": "Trap signals trong bash: 'trap \"cleanup\" EXIT INT TERM' chạy function cleanup khi script thoát hoặc nhận Ctrl+C. Quan trọng để cleanup temp files. 'trap - SIGINT' reset trap.\n🔑 Keywords: trap | EXIT INT TERM | signal handling | cleanup | bash trap"
    },
    "questionVi": "Trên hệ thống sử dụng systemd-journald, lệnh nào sau đây thêm thông báo Howdy vào nhật ký hệ thống? (Chọn hai.)",
    "optionsVi": [
      "thêm vào Xin chào",
      "người khai thác gỗ Xin chào",
      "systemd-cat echo Xin chào",
      "echo Xin chào > /dev/tạp chí",
      "tạp chí thêm Xin chào"
    ]
  },
  {
    "id": 186,
    "topicId": 2,
    "question": "Which of the following options in the chrony configuration file define remote time sources? (Choose two.)",
    "options": [
      "source",
      "clock",
      "remote",
      "pool",
      "server"
    ],
    "correct": [
      3,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Subshell: lệnh trong () chạy trong subshell (không ảnh hưởng shell cha). Command substitution $() hoặc `backticks` chạy lệnh và trả về output. {} group commands trong shell hiện tại.",
      "vi": "Subshell: lệnh trong () chạy trong subshell (không ảnh hưởng shell cha). Command substitution $() hoặc `backticks` chạy lệnh và trả về output. {} group commands trong shell hiện tại.\n🔑 Keywords: subshell () | command substitution $() | backticks | {} command group | parent shell"
    },
    "questionVi": "Tùy chọn nào sau đây trong tệp cấu hình đồng bộ xác định nguồn thời gian từ xa? (Chọn hai.)",
    "optionsVi": [
      "source",
      "clock",
      "remote",
      "pool",
      "server"
    ]
  },
  {
    "id": 187,
    "topicId": 2,
    "question": "Which command is used to sync the hardware clock to the system clock? (Specify only the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "hwclock",
    "explanation": {
      "en": "Điều kiện so sánh chuỗi: [[ $a == $b ]], [[ $a != $b ]], [[ $a < $b ]], [[ -z $a ]] chuỗi rỗng, [[ -n $a ]] chuỗi không rỗng. Dùng [[ ]] thay [ ] cho chuỗi để an toàn hơn.",
      "vi": "Điều kiện so sánh chuỗi: [[ $a == $b ]], [[ $a != $b ]], [[ $a < $b ]], [[ -z $a ]] chuỗi rỗng, [[ -n $a ]] chuỗi không rỗng. Dùng [[ ]] thay [ ] cho chuỗi để an toàn hơn.\n🔑 Keywords: [[ ]] double brackets | string comparison | -z empty string | -n non-empty | == != < >"
    },
    "questionVi": "Lệnh nào được sử dụng để đồng bộ đồng hồ phần cứng với đồng hồ hệ thống? (Chỉ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 188,
    "topicId": 2,
    "question": "Which of the following situations is observed and corrected by an NTP client?",
    "options": [
      "The skew in time between the system clock and the computer's hardware clock.",
      "The physical location and the timezone configuration.",
      "Changes in the time zone of the current computer's location.",
      "Adjustment needed to support Daylight Saving Time.",
      "The skew in time between the system clock and the reference clock."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Functions với local variables: 'local varname=value' trong function để tránh ảnh hưởng global. 'return N' trả về exit code (0=success, 1-255=error). Giá trị return khác dùng echo.",
      "vi": "Functions với local variables: 'local varname=value' trong function để tránh ảnh hưởng global. 'return N' trả về exit code (0=success, 1-255=error). Giá trị return khác dùng echo.\n🔑 Keywords: local variable | return exit code | function scope | echo return value | bash function"
    },
    "questionVi": "Khách hàng NTP quan sát và khắc phục tình huống nào sau đây?",
    "optionsVi": [
      "Sự lệch thời gian giữa đồng hồ hệ thống và đồng hồ phần cứng của máy tính.",
      "Vị trí vật lý và cấu hình múi giờ.",
      "Thay đổi múi giờ của vị trí máy tính hiện tại.",
      "Cần điều chỉnh để hỗ trợ Giờ tiết kiệm ánh sáng ban ngày.",
      "Độ lệch về thời gian giữa đồng hồ hệ thống và đồng hồ tham chiếu."
    ]
  },
  {
    "id": 189,
    "topicId": 2,
    "question": "If an alias ls exists, which of the following commands updates the alias to point to the command ls -l instead of the alias's current target?",
    "options": [
      "set ls='ls -l'",
      "alias ls='ls -l'",
      "alias --force ls='ls -l'",
      "alias --update ls ls='ls -l'",
      "realias ls='ls -l'"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Disk quota: quotacheck tạo quota database, edquota sửa quota, repquota báo cáo, quota xem quota của user. /etc/fstab cần 'usrquota' và/hoặc 'grpquota' option.",
      "vi": "Disk quota: quotacheck tạo quota database, edquota sửa quota, repquota báo cáo, quota xem quota của user. /etc/fstab cần 'usrquota' và/hoặc 'grpquota' option.\n🔑 Keywords: quota | quotacheck | edquota | repquota | usrquota grpquota | /etc/fstab options"
    },
    "questionVi": "Nếu bí danh ls tồn tại, lệnh nào sau đây sẽ cập nhật bí danh để trỏ đến lệnh ls -l thay vì mục tiêu hiện tại của bí danh?",
    "optionsVi": [
      "đặt ls='ls -l'",
      "bí danh ls='ls -l'",
      "bí danh --force ls='ls -l'",
      "bí danh --update ls ls='ls -l'",
      "thực tế ls='ls -l'"
    ]
  },
  {
    "id": 190,
    "topicId": 2,
    "question": "Which of the following commands puts the output of the command date into the shell variable mydate?",
    "options": [
      "mydate=\"date\"",
      "mydate=\"exec date\"",
      "mydate=\"$((date))\"",
      "mydate=\"$(date)\"",
      "mydate=\"${date}\""
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "File locking: flock (advisory lock), lockfile. 'flock -x lockfile -c command' chạy command với exclusive lock. Quan trọng trong scripts để tránh race condition khi chạy đồng thời.",
      "vi": "File locking: flock (advisory lock), lockfile. 'flock -x lockfile -c command' chạy command với exclusive lock. Quan trọng trong scripts để tránh race condition khi chạy đồng thời.\n🔑 Keywords: flock | file locking | advisory lock | race condition | exclusive lock"
    },
    "questionVi": "Lệnh nào sau đây đưa đầu ra của lệnh date vào biến shell mydate?",
    "optionsVi": [
      "mydate=\"date\"",
      "mydate=\"ngày thực hiện\"",
      "mydate=\"$((date))\"",
      "mydate=\"$(date)\"",
      "mydate=\"${date}\""
    ]
  },
  {
    "id": 191,
    "topicId": 2,
    "question": "What information is shown by the echo $? command?",
    "options": [
      "The process ID of the echo command.",
      "The exit value of the command executed immediately before echo.",
      "The process ID which will be used for the next command.",
      "The exit value of the echo command.",
      "The process ID of the current shell."
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Systemd service management: systemctl start/stop/restart/reload/enable/disable/status. 'systemctl daemon-reload' sau khi sửa unit file. 'systemctl list-units --failed' xem service lỗi.",
      "vi": "Systemd service management: systemctl start/stop/restart/reload/enable/disable/status. 'systemctl daemon-reload' sau khi sửa unit file. 'systemctl list-units --failed' xem service lỗi.\n🔑 Keywords: systemctl start stop restart enable disable | daemon-reload | list-units --failed | service management"
    },
    "questionVi": "Thông tin gì được hiển thị bởi echo $? yêu cầu?",
    "optionsVi": [
      "ID tiến trình của lệnh echo.",
      "Giá trị thoát của lệnh được thực thi ngay trước tiếng vang.",
      "ID tiến trình sẽ được sử dụng cho lệnh tiếp theo.",
      "Giá trị thoát của lệnh echo.",
      "ID tiến trình của shell hiện tại."
    ]
  },
  {
    "id": 192,
    "topicId": 2,
    "question": "Which of the following files is not read directly by a Bash login shell?",
    "options": [
      "~/.bashrc",
      "~/.bash_profile",
      "~/.bash_login",
      "~/.profile",
      "/etc/profile"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Systemd unit files ở /etc/systemd/system/ (custom) và /lib/systemd/system/ (packages). Sections: [Unit] (description, After, Requires), [Service] (Type, ExecStart), [Install] (WantedBy).",
      "vi": "Systemd unit files ở /etc/systemd/system/ (custom) và /lib/systemd/system/ (packages). Sections: [Unit] (description, After, Requires), [Service] (Type, ExecStart), [Install] (WantedBy).\n🔑 Keywords: unit file | /etc/systemd/system/ | [Unit] [Service] [Install] | ExecStart | WantedBy"
    },
    "questionVi": "Tệp nào sau đây không được shell đăng nhập Bash đọc trực tiếp?",
    "optionsVi": [
      "~/.bashrc",
      "~/.bash_profile",
      "~/.bash_login",
      "~/.profile",
      "/etc/profile"
    ]
  },
  {
    "id": 193,
    "topicId": 2,
    "question": "What is true about the file .profile in a user's home directory?",
    "options": [
      "It must be executable.",
      "It must call the binary of the login shell.",
      "It must use a valid shell script syntax.",
      "It must start with a shebang.",
      "It must be readable for its owner only."
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "systemd targets thay thế SysV runlevels: graphical.target (runlevel 5), multi-user.target (runlevel 3), rescue.target (runlevel 1), emergency.target. 'systemctl get-default' xem default target.",
      "vi": "systemd targets thay thế SysV runlevels: graphical.target (runlevel 5), multi-user.target (runlevel 3), rescue.target (runlevel 1), emergency.target. 'systemctl get-default' xem default target.\n🔑 Keywords: systemd targets | graphical.target | multi-user.target | rescue.target | get-default set-default"
    },
    "questionVi": "Điều gì đúng về tệp .profile trong thư mục chính của người dùng?",
    "optionsVi": [
      "Nó phải có thể thực thi được.",
      "Nó phải gọi nhị phân của shell đăng nhập.",
      "Nó phải sử dụng cú pháp tập lệnh shell hợp lệ.",
      "Nó phải bắt đầu bằng một shebang.",
      "Nó phải có thể đọc được chỉ dành cho chủ sở hữu của nó."
    ]
  },
  {
    "id": 194,
    "topicId": 2,
    "question": "What is true regarding the statement beginning with #! that is found in the first line of script? (Choose two.)",
    "options": [
      "It prevents the scripts from being executed until the ! is removed.",
      "it triggers the installation of the script's interpreter.",
      "It specifies the path and the arguments of the interpreter used to run the script.",
      "It defines the character encoding of the script.",
      "It is a comment that is ignored by the script interpreter."
    ],
    "correct": [
      1,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "journald config: /etc/systemd/journald.conf. Storage=persistent để lưu log vào disk (/var/log/journal/). 'journalctl --vacuum-size=100M' để dọn journal. Log mặc định trong RAM (/run/log/journal/).",
      "vi": "journald config: /etc/systemd/journald.conf. Storage=persistent để lưu log vào disk (/var/log/journal/). 'journalctl --vacuum-size=100M' để dọn journal. Log mặc định trong RAM (/run/log/journal/).\n🔑 Keywords: journald | /etc/systemd/journald.conf | Storage=persistent | /var/log/journal/ | vacuum"
    },
    "questionVi": "Điều gì đúng đối với phát biểu bắt đầu bằng #! được tìm thấy trong dòng đầu tiên của tập lệnh? (Chọn hai.)",
    "optionsVi": [
      "Nó ngăn các tập lệnh được thực thi cho đến khi ! được gỡ bỏ.",
      "nó kích hoạt việc cài đặt trình thông dịch của tập lệnh.",
      "Nó chỉ định đường dẫn và các đối số của trình thông dịch được sử dụng để chạy tập lệnh.",
      "Nó xác định mã hóa ký tự của tập lệnh.",
      "Đó là một nhận xét bị trình thông dịch tập lệnh bỏ qua."
    ]
  },
  {
    "id": 195,
    "topicId": 2,
    "question": "What output does the command seq 1 5 20 produce?",
    "options": [
      "",
      "",
      "",
      "",
      ""
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Systemd socket activation: service chỉ khởi động khi có kết nối đến socket. .socket unit file định nghĩa socket, .service tương ứng xử lý. Hiệu quả hơn cho service ít dùng.",
      "vi": "Systemd socket activation: service chỉ khởi động khi có kết nối đến socket. .socket unit file định nghĩa socket, .service tương ứng xử lý. Hiệu quả hơn cho service ít dùng.\n🔑 Keywords: socket activation | .socket unit | on-demand | systemd socket | efficiency"
    },
    "questionVi": "Lệnh seq 1 5 20 tạo ra kết quả gì?",
    "optionsVi": [
      "",
      "",
      "",
      "",
      ""
    ]
  },
  {
    "id": 196,
    "topicId": 2,
    "question": "Which of the following commands lists all defines variables and functions within Bash?",
    "options": [
      "env",
      "export",
      "env -a",
      "set",
      "echo $ENV"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Kernel parameters runtime: sysctl -a liệt kê tất cả, 'sysctl -w net.ipv4.ip_forward=1' bật IP forwarding tạm thời. /etc/sysctl.conf hoặc /etc/sysctl.d/*.conf cho persistent.",
      "vi": "Kernel parameters runtime: sysctl -a liệt kê tất cả, 'sysctl -w net.ipv4.ip_forward=1' bật IP forwarding tạm thời. /etc/sysctl.conf hoặc /etc/sysctl.d/*.conf cho persistent.\n🔑 Keywords: sysctl | sysctl -w | /etc/sysctl.conf | kernel parameters | ip_forward"
    },
    "questionVi": "Lệnh nào sau đây liệt kê tất cả các biến và hàm xác định trong Bash?",
    "optionsVi": [
      "env",
      "export",
      "env -a",
      "set",
      "tiếng vang $ENV"
    ]
  },
  {
    "id": 197,
    "topicId": 2,
    "question": "What information related to a user account is modified using the chage command?",
    "options": [
      "Default ownership for new files",
      "Group membership",
      "Set of commands available to the user",
      "Password expiry information",
      "Default permissions for new files"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "strace theo dõi system calls của process. 'strace -p PID' attach vào process đang chạy, 'strace command' chạy và trace. lsof liệt kê open files/sockets. ltrace trace library calls.",
      "vi": "strace theo dõi system calls của process. 'strace -p PID' attach vào process đang chạy, 'strace command' chạy và trace. lsof liệt kê open files/sockets. ltrace trace library calls.\n🔑 Keywords: strace | system calls | strace -p | lsof | ltrace | debugging tools"
    },
    "questionVi": "Thông tin nào liên quan đến tài khoản người dùng được sửa đổi bằng lệnh chage?",
    "optionsVi": [
      "Quyền sở hữu mặc định cho các tệp mới",
      "Thành viên nhóm",
      "Tập hợp các lệnh có sẵn cho người dùng",
      "Thông tin hết hạn mật khẩu",
      "Quyền mặc định cho các tệp mới"
    ]
  },
  {
    "id": 198,
    "topicId": 2,
    "question": "Which command is used to set restrictions on the size of a core file that is created for a user when a program crashes?",
    "options": [
      "core",
      "edquota",
      "quota",
      "ulimit",
      "ktrace"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "lsof (list open files): 'lsof -i :80' process dùng port 80, 'lsof -u user' files của user, 'lsof /dev/sda1' process dùng filesystem. Mọi thứ trong Linux là file, lsof rất mạnh.",
      "vi": "lsof (list open files): 'lsof -i :80' process dùng port 80, 'lsof -u user' files của user, 'lsof /dev/sda1' process dùng filesystem. Mọi thứ trong Linux là file, lsof rất mạnh.\n🔑 Keywords: lsof | lsof -i port | lsof -u user | open files | open sockets | everything is a file"
    },
    "questionVi": "Lệnh nào được sử dụng để đặt giới hạn về kích thước của tệp lõi được tạo cho người dùng khi chương trình gặp sự cố?",
    "optionsVi": [
      "core",
      "edquota",
      "quota",
      "ulimit",
      "ktrace"
    ]
  },
  {
    "id": 199,
    "topicId": 2,
    "question": "How do shadow passwords improve the password security in comparison to standard no-shadow password?",
    "options": [
      "Regular users do not have access to the password hashes of shadow passwords.",
      "Every shadow password is valid for 45 days and must be changed afterwards.",
      "The system's host key is used to encrypt all shadow passwords.",
      "Shadow passwords are always combined with a public key that has to match the user's private key.",
      "Shadow passwords are stored in plain text and can be checked for weak passwords."
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "top interactive commands: 'k' kill process, 'r' renice, 'M' sort by memory, 'P' sort by CPU, 'q' quit, '1' xem từng CPU core, 'f' chọn fields. htop là phiên bản cải tiến.",
      "vi": "top interactive commands: 'k' kill process, 'r' renice, 'M' sort by memory, 'P' sort by CPU, 'q' quit, '1' xem từng CPU core, 'f' chọn fields. htop là phiên bản cải tiến.\n🔑 Keywords: top | k kill | r renice | M memory P CPU | htop | interactive process viewer"
    },
    "questionVi": "Làm thế nào để mật khẩu ẩn cải thiện tính bảo mật của mật khẩu so với mật khẩu không bóng tiêu chuẩn?",
    "optionsVi": [
      "Người dùng thông thường không có quyền truy cập vào hàm băm mật khẩu của mật khẩu bóng.",
      "Mỗi mật khẩu bóng có giá trị trong 45 ngày và phải được thay đổi sau đó.",
      "Khóa máy chủ của hệ thống được sử dụng để mã hóa tất cả mật khẩu ẩn.",
      "Mật khẩu ẩn luôn được kết hợp với khóa chung phải khớp với khóa riêng của người dùng.",
      "Mật khẩu ẩn được lưu trữ ở dạng văn bản thuần túy và có thể được kiểm tra để tìm mật khẩu yếu."
    ]
  },
  {
    "id": 200,
    "topicId": 2,
    "question": "After editing the TCP wrapper configuration to grant specific hosts access to a service, when do these changes become effective?",
    "options": [
      "The new configuration becomes effective after restarting the respective service.",
      "The new configuration becomes effective at the next system reboot.",
      "The new configuration becomes effective when the last established connection to the service is closed.",
      "The new configuration becomes effective after restarting the tcpd service.",
      "The new configuration becomes effective immediately for all new connections."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "vmstat (virtual memory statistics): 'vmstat 1 5' in 5 lần cách 1 giây. Cột quan trọng: r (run queue), b (blocked), swpd (swap), si/so (swap in/out), wa (IO wait).",
      "vi": "vmstat (virtual memory statistics): 'vmstat 1 5' in 5 lần cách 1 giây. Cột quan trọng: r (run queue), b (blocked), swpd (swap), si/so (swap in/out), wa (IO wait).\n🔑 Keywords: vmstat | run queue | blocked | swap | si so | IO wait | memory statistics"
    },
    "questionVi": "Sau khi chỉnh sửa cấu hình trình bao bọc TCP để cấp cho các máy chủ cụ thể quyền truy cập vào một dịch vụ, khi nào những thay đổi này có hiệu lực?",
    "optionsVi": [
      "Cấu hình mới sẽ có hiệu lực sau khi khởi động lại dịch vụ tương ứng.",
      "Cấu hình mới sẽ có hiệu lực ở lần khởi động lại hệ thống tiếp theo.",
      "Cấu hình mới sẽ có hiệu lực khi kết nối được thiết lập lần cuối với dịch vụ bị đóng.",
      "Cấu hình mới có hiệu lực sau khi khởi động lại dịch vụ tcpd.",
      "Cấu hình mới sẽ có hiệu lực ngay lập tức đối với tất cả các kết nối mới."
    ]
  },
  {
    "id": 201,
    "topicId": 2,
    "question": "What is true regarding public and private SSH keys? (Choose two.)",
    "options": [
      "For each user account, there is exactly one key pair that can be used to log into that account.",
      "The private key must never be revealed to anyone.",
      "Several different public keys may be generated for the same private key.",
      "To maintain the private key's confidentiality, the SSH key pair must be created by its owner.",
      "To allow remote logins, the user's private key must be copied to the remote server."
    ],
    "correct": [
      1,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "iostat theo dõi I/O statistics cho disk và CPU. 'iostat -x 1' chi tiết mỗi giây. Cột quan trọng: tps, kB/s read/write, %util (disk utilization). Phần của sysstat package.",
      "vi": "iostat theo dõi I/O statistics cho disk và CPU. 'iostat -x 1' chi tiết mỗi giây. Cột quan trọng: tps, kB/s read/write, %util (disk utilization). Phần của sysstat package.\n🔑 Keywords: iostat | I/O statistics | disk utilization | %util | sysstat | tps kB/s"
    },
    "questionVi": "Điều gì đúng về khóa SSH công khai và riêng tư? (Chọn hai.)",
    "optionsVi": [
      "Đối với mỗi tài khoản người dùng, có chính xác một cặp khóa có thể được sử dụng để đăng nhập vào tài khoản đó.",
      "Khóa riêng không bao giờ được tiết lộ cho bất cứ ai.",
      "Một số khóa công khai khác nhau có thể được tạo cho cùng một khóa riêng.",
      "Để duy trì tính bảo mật của khóa riêng, cặp khóa SSH phải được chủ sở hữu của nó tạo.",
      "Để cho phép đăng nhập từ xa, khóa riêng của người dùng phải được sao chép vào máy chủ từ xa."
    ]
  },
  {
    "id": 202,
    "topicId": 2,
    "question": "Which of the following commands finds all files owned by root that have the SetUID bit set?",
    "options": [
      "find / -user root -perm -4000",
      "find / -user 0 -mode +s",
      "find / -owner root -setuid",
      "find / -owner 0 -permbits 0x100000000",
      "find / --filter uid=1 --filter pers=u+s"
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "sar (System Activity Reporter) thu thập và báo cáo system activity. 'sar -u 1 5' CPU usage, 'sar -r' memory, 'sar -b' I/O. /etc/sysstat/sysstat hoặc cron kích hoạt thu thập.",
      "vi": "sar (System Activity Reporter) thu thập và báo cáo system activity. 'sar -u 1 5' CPU usage, 'sar -r' memory, 'sar -b' I/O. /etc/sysstat/sysstat hoặc cron kích hoạt thu thập.\n🔑 Keywords: sar | System Activity Reporter | sar -u CPU | sar -r memory | sysstat | historical data"
    },
    "questionVi": "Lệnh nào sau đây tìm thấy tất cả các tệp do root sở hữu có tập bit SetUID?",
    "optionsVi": [
      "tìm / -user root -perm -4000",
      "tìm / -user 0 -mode +s",
      "tìm / -chủ sở hữu gốc -setuid",
      "tìm / -owner 0 -permbits 0x100000000",
      "tìm / --filter uid=1 --filter pers=u+s"
    ]
  },
  {
    "id": 203,
    "topicId": 2,
    "question": "What command is used to add OpenSSH private keys to a running ssh-agent instance? (Specify the command name only without any path.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "ssh-add",
    "explanation": {
      "en": "Filesystem types: ext2 (không journaling), ext3 (journaling), ext4 (extents, large files), XFS (hiệu suất cao), Btrfs (snapshot, RAID, copy-on-write), vfat (Windows compatibility).",
      "vi": "Filesystem types: ext2 (không journaling), ext3 (journaling), ext4 (extents, large files), XFS (hiệu suất cao), Btrfs (snapshot, RAID, copy-on-write), vfat (Windows compatibility).\n🔑 Keywords: ext2 ext3 ext4 | XFS | Btrfs | vfat | journaling | filesystem comparison"
    },
    "questionVi": "Lệnh nào được sử dụng để thêm khóa riêng OpenSSH vào phiên bản ssh-agent đang chạy? (Chỉ xác định tên lệnh mà không có bất kỳ đường dẫn nào.)",
    "optionsVi": []
  },
  {
    "id": 204,
    "topicId": 2,
    "question": "Which directory holds configuration files for xinetd services? (Specify the full path to the directory.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "/etc/xinetd.d/",
    "explanation": {
      "en": "cryptsetup và LUKS mã hóa disk. 'cryptsetup luksFormat /dev/sdb' định dạng, 'cryptsetup luksOpen /dev/sdb encrypted' mở, 'mkfs.ext4 /dev/mapper/encrypted' tạo fs trong container.",
      "vi": "cryptsetup và LUKS mã hóa disk. 'cryptsetup luksFormat /dev/sdb' định dạng, 'cryptsetup luksOpen /dev/sdb encrypted' mở, 'mkfs.ext4 /dev/mapper/encrypted' tạo fs trong container.\n🔑 Keywords: cryptsetup | LUKS | luksFormat | luksOpen | disk encryption | /dev/mapper/"
    },
    "questionVi": "Thư mục nào chứa các tập tin cấu hình cho dịch vụ xinetd? (Chỉ định đường dẫn đầy đủ đến thư mục.)",
    "optionsVi": []
  },
  {
    "id": 205,
    "topicId": 2,
    "question": "Which mechanism does ssh use to interact with the SSH agent?",
    "options": [
      "Connecting to port 2222 which is used by the system-wide SSH agent.",
      "Using the fixed socket .ssh-agent/ipc.",
      "Creating an alias replacing ssh with calls to ssh-agent.",
      "Starting ssh-agent as a child process for each ssh invocation.",
      "Evaluating environment variables such as SSH_AUTH_SOCK."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "chroot tạo môi trường root ảo (isolated environment). Dùng để repair hệ thống bị hỏng hoặc build phần mềm. 'chroot /mnt/recovery /bin/bash' sau khi mount recovery filesystem.",
      "vi": "chroot tạo môi trường root ảo (isolated environment). Dùng để repair hệ thống bị hỏng hoặc build phần mềm. 'chroot /mnt/recovery /bin/bash' sau khi mount recovery filesystem.\n🔑 Keywords: chroot | isolated environment | jail | system repair | mount + chroot"
    },
    "questionVi": "SSH sử dụng cơ chế nào để tương tác với tác nhân SSH?",
    "optionsVi": [
      "Kết nối với cổng 2222 được sử dụng bởi tác nhân SSH trên toàn hệ thống.",
      "Sử dụng ổ cắm cố định .ssh-agent/ipc.",
      "Tạo bí danh thay thế ssh bằng lệnh gọi tới ssh-agent.",
      "Bắt đầu ssh-agent như một tiến trình con cho mỗi lệnh gọi ssh.",
      "Đánh giá các biến môi trường như SSH_AUTH_SOCK."
    ]
  },
  {
    "id": 206,
    "topicId": 2,
    "question": "Which parameter of the ssh command specifies the location of the private key used for login attempts? (Specify only the option name without any values or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "ssh-keygen",
    "explanation": {
      "en": "Các lệnh text viewer: cat (in toàn bộ), less (pager, /search, q quit), more (pager đơn giản), head -n 20 (20 dòng đầu), tail -n 20 (20 dòng cuối), tail -f (follow real-time).",
      "vi": "Các lệnh text viewer: cat (in toàn bộ), less (pager, /search, q quit), more (pager đơn giản), head -n 20 (20 dòng đầu), tail -n 20 (20 dòng cuối), tail -f (follow real-time).\n🔑 Keywords: cat less more | head -n | tail -n | tail -f follow | text viewer | pager"
    },
    "questionVi": "Tham số nào của lệnh ssh chỉ định vị trí của khóa riêng được sử dụng cho các lần đăng nhập? (Chỉ xác định tên tùy chọn mà không có bất kỳ giá trị hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 207,
    "topicId": 2,
    "question": "Which of the following is true about IPv6?",
    "options": [
      "IPv6 no longer supports broadcast addresses.",
      "With IPv6, the TCP port numbers of most services have changed.",
      "IPv4 addresses can be used without any change with IPv6.",
      "IPv6 no longer supports multicast addresses.",
      "For IPv6, UDP and TCP have been replaced by the Rapid Transmission Protocol RTP."
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "wc (word count): -l đếm dòng, -w đếm từ, -c đếm bytes, -m đếm characters. Thường dùng: 'command | wc -l' đếm số dòng output. sort -u | wc -l đếm unique items.",
      "vi": "wc (word count): -l đếm dòng, -w đếm từ, -c đếm bytes, -m đếm characters. Thường dùng: 'command | wc -l' đếm số dòng output. sort -u | wc -l đếm unique items.\n🔑 Keywords: wc -l -w -c -m | word count | line count | pipe wc | counting"
    },
    "questionVi": "Điều nào sau đây đúng về IPv6?",
    "optionsVi": [
      "IPv6 không còn hỗ trợ địa chỉ quảng bá.",
      "Với IPv6, số cổng TCP của hầu hết các dịch vụ đã thay đổi.",
      "Địa chỉ IPv4 có thể được sử dụng mà không có bất kỳ thay đổi nào với IPv6.",
      "IPv6 không còn hỗ trợ địa chỉ multicast.",
      "Đối với IPv6, UDP và TCP đã được thay thế bằng RTP Giao thức truyền tải nhanh."
    ]
  },
  {
    "id": 208,
    "topicId": 2,
    "question": "What is true about the following command?nmcli device wifi connect WIFIoI",
    "options": [
      "NetworkManager opens a new public hotspot with the SSID WIFIoI.",
      "NetworkManager creates an unconfigured new virtual network interface named WIFIoI.",
      "NetworkManager creates a new wifi connection WIFIoI and activates it.",
      "NetworkManager returns an error in case the connection WIFIoI does not exist.",
      "NetworkManager returns an error because WIFIoI is an invalid wifi device."
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Column filter: cut -c1-10 lấy character 1 đến 10, cut -d, -f2 lấy field 2 với delimiter phẩy. awk '{print $2}' in cột 2. Khác biệt: cut dùng fixed delimiter, awk mạnh hơn.",
      "vi": "Column filter: cut -c1-10 lấy character 1 đến 10, cut -d, -f2 lấy field 2 với delimiter phẩy. awk '{print $2}' in cột 2. Khác biệt: cut dùng fixed delimiter, awk mạnh hơn.\n🔑 Keywords: cut -c | cut -d -f | awk print | column extraction | field separator"
    },
    "questionVi": "Câu lệnh sau đúng như thế nào? Thiết bị nmcli kết nối wifi WIFIoI",
    "optionsVi": [
      "NetworkManager mở một điểm phát sóng công cộng mới với SSID WIFIoI.",
      "NetworkManager tạo giao diện mạng ảo mới chưa được định cấu hình có tên WIFIoI.",
      "NetworkManager tạo kết nối wifi mới WIFIoI và kích hoạt nó.",
      "Trình quản lý mạng trả về lỗi trong trường hợp kết nối WIFIoI không tồn tại.",
      "Trình quản lý mạng trả về lỗi vì WIFIoI là thiết bị wifi không hợp lệ."
    ]
  },
  {
    "id": 209,
    "topicId": 2,
    "question": "Which of the commands below might have produced the following output?",
    "options": [
      "dig -t mx www.example.org",
      "dig www.example.org",
      "dig -t ns www.example.org",
      "dig -t a www.example.org",
      "dig -t soa www.example.org"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "nmap là network scanner: 'nmap -sV host' scan service versions, '-p 80,443' chỉ scan port cụ thể, '-O' OS detection, '-A' aggressive scan. Quan trọng cho network audit.",
      "vi": "nmap là network scanner: 'nmap -sV host' scan service versions, '-p 80,443' chỉ scan port cụ thể, '-O' OS detection, '-A' aggressive scan. Quan trọng cho network audit.\n🔑 Keywords: nmap | -sV service | -p port | -O OS detection | network scanner | port scan"
    },
    "questionVi": "Lệnh nào dưới đây có thể tạo ra kết quả sau?",
    "optionsVi": [
      "đào -t mx www.example.org",
      "đào www.example.org",
      "đào -t ns www.example.org",
      "đào -t a www.example.org",
      "đào -t soa www.example.org"
    ]
  },
  {
    "id": 210,
    "topicId": 2,
    "question": "Which parameter is missing in the commandip link set ____ dev eth0to activate the previously inactive network interface eth0? (Specify the parameter only without any command, path or additional options.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "up",
    "explanation": {
      "en": "curl là HTTP client mạnh mẽ: 'curl -o file URL' download, '-I' chỉ headers, '-X POST -d data' POST request, '-H Header:' thêm header, '-k' bỏ qua SSL cert. wget là alternative đơn giản.",
      "vi": "curl là HTTP client mạnh mẽ: 'curl -o file URL' download, '-I' chỉ headers, '-X POST -d data' POST request, '-H Header:' thêm header, '-k' bỏ qua SSL cert. wget là alternative đơn giản.\n🔑 Keywords: curl | -o download | -I headers | -X POST | -H header | wget | HTTP client"
    },
    "questionVi": "Tham số nào bị thiếu trong bộ liên kết lệnh ____ dev eth0để kích hoạt giao diện mạng eth0 không hoạt động trước đó? (Chỉ xác định tham số mà không có bất kỳ lệnh, đường dẫn hoặc tùy chọn bổ sung nào.)",
    "optionsVi": []
  },
  {
    "id": 211,
    "topicId": 2,
    "question": "Which of the following states can NetworkManager show regarding the system's network connectivity? (Choose two.)",
    "options": [
      "up",
      "portal",
      "full",
      "login-required",
      "firewalled"
    ],
    "correct": [
      1,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Screen/tmux là terminal multiplexers: chạy nhiều session trong 1 terminal, detach/reattach session. 'screen -S name' tạo, Ctrl+A D detach, 'screen -r' reattach. tmux hiện đại hơn.",
      "vi": "Screen/tmux là terminal multiplexers: chạy nhiều session trong 1 terminal, detach/reattach session. 'screen -S name' tạo, Ctrl+A D detach, 'screen -r' reattach. tmux hiện đại hơn.\n🔑 Keywords: screen | tmux | terminal multiplexer | detach reattach | Ctrl+A D | persistent session"
    },
    "questionVi": "Trình quản lý mạng có thể hiển thị trạng thái nào sau đây về khả năng kết nối mạng của hệ thống? (Chọn hai.)",
    "optionsVi": [
      "up",
      "portal",
      "full",
      "login-required",
      "firewalled"
    ]
  },
  {
    "id": 212,
    "topicId": 2,
    "question": "Which of the following are valid host addresses for the subnet 203.0.113.64/28? (Choose two.)",
    "options": [
      "203.0.113.64",
      "203.0.113.78",
      "203.0.113.65",
      "203.0.113.80",
      "203.0.113.81"
    ],
    "correct": [
      1,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Virtualenv/containers: không trực tiếp trong LPIC-1 nhưng Docker basics hữu ích. 'docker run -it ubuntu bash', 'docker ps', 'docker images', 'systemctl start docker'. Linux containers dùng namespaces và cgroups.",
      "vi": "Virtualenv/containers: không trực tiếp trong LPIC-1 nhưng Docker basics hữu ích. 'docker run -it ubuntu bash', 'docker ps', 'docker images', 'systemctl start docker'. Linux containers dùng namespaces và cgroups.\n🔑 Keywords: container | docker | namespace | cgroup | isolation | virtualization"
    },
    "questionVi": "Địa chỉ nào sau đây là địa chỉ máy chủ hợp lệ cho mạng con 203.0.113.64/28? (Chọn hai.)",
    "optionsVi": [
      "203.0.113.64",
      "203.0.113.78",
      "203.0.113.65",
      "203.0.113.80",
      "203.0.113.81"
    ]
  },
  {
    "id": 213,
    "topicId": 2,
    "question": "Which of the following keywords can be used in the file /etc/resolv/conf? (Choose two.)",
    "options": [
      "substitute",
      "lookup",
      "search",
      "nameserver",
      "method"
    ],
    "correct": [
      2,
      3
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "cgroups (control groups) giới hạn và theo dõi tài nguyên (CPU, memory, I/O) của nhóm processes. systemd dùng cgroups để quản lý services. 'systemd-cgls' xem cgroup hierarchy.",
      "vi": "cgroups (control groups) giới hạn và theo dõi tài nguyên (CPU, memory, I/O) của nhóm processes. systemd dùng cgroups để quản lý services. 'systemd-cgls' xem cgroup hierarchy.\n🔑 Keywords: cgroups | control groups | resource limits | systemd-cgls | CPU memory IO"
    },
    "questionVi": "Từ khóa nào sau đây có thể được sử dụng trong tệp /etc/resolv/conf? (Chọn hai.)",
    "optionsVi": [
      "substitute",
      "lookup",
      "search",
      "nameserver",
      "method"
    ]
  },
  {
    "id": 214,
    "topicId": 2,
    "question": "How does the ping command work by default?",
    "options": [
      "Is sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.",
      "It sends an ARP request to a remote host and waits to receive an ARP response in return.",
      "It sends a TCP SYN packet to a remote host and waits to receive an TCP ACK response in return.",
      "Is sends a broadcast packet to all hosts on the net and waits to receive, among others, a response from the target system.",
      "It sends a UDP packet to port 0 of the remote host and waits to receive a UDP error response in return."
    ],
    "correct": [
      0
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Kernel modules trong /lib/modules/$(uname -r)/. depmod tạo dependency map, modprobe dùng map này. /etc/modules chứa modules tự load khi boot. modinfo xem thông tin module.",
      "vi": "Kernel modules trong /lib/modules/$(uname -r)/. depmod tạo dependency map, modprobe dùng map này. /etc/modules chứa modules tự load khi boot. modinfo xem thông tin module.\n🔑 Keywords: /lib/modules/ | depmod | modprobe | /etc/modules | module auto-load"
    },
    "questionVi": "Lệnh ping hoạt động theo mặc định như thế nào?",
    "optionsVi": [
      "Gửi Yêu cầu tiếng vang ICMP đến máy chủ từ xa và chờ nhận lại Phản hồi tiếng vang ICMP.",
      "Nó gửi yêu cầu ARP đến máy chủ từ xa và chờ nhận phản hồi ARP.",
      "Nó gửi gói TCP SYN đến máy chủ từ xa và chờ nhận phản hồi TCP ACK.",
      "Gửi một gói tin quảng bá tới tất cả các máy chủ trên mạng và chờ nhận phản hồi từ hệ thống đích.",
      "Nó gửi gói UDP đến cổng 0 của máy chủ từ xa và chờ nhận phản hồi lỗi UDP."
    ]
  },
  {
    "id": 215,
    "topicId": 2,
    "question": "Which of the following commands display the number of bytes transmitted and received via the eth0 network interface? (Choose two.)",
    "options": [
      "route -v via eth0",
      "ip stats show dev eth0",
      "netstat -s -i eth0",
      "ifconfig eth0",
      "ip -s link show eth0"
    ],
    "correct": [
      3,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Bootloader GRUB2: /etc/default/grub cấu hình (GRUB_TIMEOUT, GRUB_DEFAULT, GRUB_CMDLINE_LINUX). Sau khi sửa chạy 'update-grub' hoặc 'grub2-mkconfig -o /boot/grub2/grub.cfg'.",
      "vi": "Bootloader GRUB2: /etc/default/grub cấu hình (GRUB_TIMEOUT, GRUB_DEFAULT, GRUB_CMDLINE_LINUX). Sau khi sửa chạy 'update-grub' hoặc 'grub2-mkconfig -o /boot/grub2/grub.cfg'.\n🔑 Keywords: GRUB_TIMEOUT | GRUB_CMDLINE_LINUX | update-grub | grub2-mkconfig | /etc/default/grub"
    },
    "questionVi": "Lệnh nào sau đây hiển thị số byte được truyền và nhận qua giao diện mạng eth0? (Chọn hai.)",
    "optionsVi": [
      "tuyến đường -v qua eth0",
      "số liệu thống kê ip hiển thị dev eth0",
      "netstat -s -i eth0",
      "ifconfig eth0",
      "liên kết ip -s hiển thị eth0"
    ]
  },
  {
    "id": 216,
    "topicId": 2,
    "question": "Given the following routing table:How would an outgoing packet to the destination 192.168.2.150 be handled?",
    "options": [
      "It would be passed to the default router 192.168.178.1 on wlan0.",
      "It would be directly transmitted on the device eth0.",
      "It would be passed to the default router 255.255.255.0 on eth0.",
      "It would be passed to the router 192.168.1.1 on eth0.",
      "It would be directly transmitted on the device wlan0."
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "systemd-resolve hoặc resolvectl quản lý DNS resolution trong systemd. /etc/systemd/resolved.conf cấu hình. /etc/resolv.conf là symlink đến /run/systemd/resolve/stub-resolv.conf.",
      "vi": "systemd-resolve hoặc resolvectl quản lý DNS resolution trong systemd. /etc/systemd/resolved.conf cấu hình. /etc/resolv.conf là symlink đến /run/systemd/resolve/stub-resolv.conf.\n🔑 Keywords: systemd-resolved | resolvectl | /etc/systemd/resolved.conf | /etc/resolv.conf symlink"
    },
    "questionVi": "Cho bảng định tuyến sau: Gói gửi đi tới đích 192.168.2.150 sẽ được xử lý như thế nào?",
    "optionsVi": [
      "Nó sẽ được chuyển đến bộ định tuyến mặc định 192.168.178.1 trên wlan0.",
      "Nó sẽ được truyền trực tiếp trên thiết bị eth0.",
      "Nó sẽ được chuyển đến bộ định tuyến mặc định 255.255.255.0 trên eth0.",
      "Nó sẽ được chuyển đến bộ định tuyến 192.168.1.1 trên eth0.",
      "Nó sẽ được truyền trực tiếp trên thiết bị wlan0."
    ]
  },
  {
    "id": 217,
    "topicId": 2,
    "question": "Which of the following commands will delete the default gateway from the system's IP routing table? (Choose two.)",
    "options": [
      "ifconfig unset default",
      "route del default",
      "ip route del default",
      "netstat -r default",
      "sysctl ipv4.default_gw=0"
    ],
    "correct": [
      1,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "pam_tally2 (hoặc pam_faillock trên RHEL8+) lock account sau N lần login thất bại. Cấu hình trong /etc/pam.d/system-auth. 'pam_tally2 --user username --reset' để unlock.",
      "vi": "pam_tally2 (hoặc pam_faillock trên RHEL8+) lock account sau N lần login thất bại. Cấu hình trong /etc/pam.d/system-auth. 'pam_tally2 --user username --reset' để unlock.\n🔑 Keywords: pam_tally2 | pam_faillock | account lockout | failed attempts | pam_tally2 --reset"
    },
    "questionVi": "Lệnh nào sau đây sẽ xóa cổng mặc định khỏi bảng định tuyến IP của hệ thống? (Chọn hai.)",
    "optionsVi": [
      "ifconfig bỏ đặt mặc định",
      "lộ trình mặc định",
      "lộ trình ip mặc định",
      "netstat -r mặc định",
      "sysctl ipv4.default_gw=0"
    ]
  },
  {
    "id": 218,
    "topicId": 2,
    "question": "What command enables a network interface according to distribution-specific configuration, such as /etc/network/interfaces or /etc/sysconfig/ network-scripts/ifcfg-eth0? (Specify only the command without any path or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "up",
    "explanation": {
      "en": "visudo phải dùng để sửa /etc/sudoers (kiểm tra syntax trước khi save). Format: 'username ALL=(ALL) ALL' hoặc 'username ALL=(ALL) NOPASSWD: /path/to/command'.",
      "vi": "visudo phải dùng để sửa /etc/sudoers (kiểm tra syntax trước khi save). Format: 'username ALL=(ALL) ALL' hoặc 'username ALL=(ALL) NOPASSWD: /path/to/command'.\n🔑 Keywords: visudo | /etc/sudoers | NOPASSWD | sudo rules | ALL=(ALL) ALL"
    },
    "questionVi": "Lệnh nào kích hoạt giao diện mạng theo cấu hình dành riêng cho phân phối, chẳng hạn như /etc/network/interfaces hoặc /etc/sysconfig/ network-scripts/ifcfg-eth0? (Chỉ chỉ định lệnh mà không có bất kỳ đường dẫn hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 219,
    "topicId": 2,
    "question": "What is true about NetworkManager on a Linux system that uses its distribution's mechanisms to configure network interfaces? (Choose two.)",
    "options": [
      "NetworkManager reconfigures all network interfaces to use DHCP unless they are specifically managed by NetworkManager.",
      "NetworkManager must be explicitly enabled for each interface it should manage.",
      "NetworkManager by default does not change interfaces which are already configured.",
      "NetworkManager disables all interfaces which were not configured by NetworkManager.",
      "NetworkManager can be configured to use the distribution's network interface configuration."
    ],
    "correct": [
      1,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Filesystem encryption alternatives: eCryptfs (per-directory encryption, dùng cho ~), dm-crypt/LUKS (full disk/partition encryption), fscrypt (native ext4/F2FS). Ubuntu home dùng eCryptfs.",
      "vi": "Filesystem encryption alternatives: eCryptfs (per-directory encryption, dùng cho ~), dm-crypt/LUKS (full disk/partition encryption), fscrypt (native ext4/F2FS). Ubuntu home dùng eCryptfs.\n🔑 Keywords: eCryptfs | dm-crypt LUKS | fscrypt | home encryption | filesystem encryption"
    },
    "questionVi": "Điều gì đúng về NetworkManager trên hệ thống Linux sử dụng cơ chế phân phối của nó để định cấu hình giao diện mạng? (Chọn hai.)",
    "optionsVi": [
      "NetworkManager cấu hình lại tất cả các giao diện mạng để sử dụng DHCP trừ khi chúng được NetworkManager quản lý cụ thể.",
      "Trình quản lý mạng phải được bật rõ ràng cho từng giao diện mà nó cần quản lý.",
      "NetworkManager theo mặc định không thay đổi giao diện đã được cấu hình.",
      "NetworkManager vô hiệu hóa tất cả các giao diện không được NetworkManager định cấu hình.",
      "NetworkManager có thể được cấu hình để sử dụng cấu hình giao diện mạng của bản phân phối."
    ]
  },
  {
    "id": 220,
    "topicId": 2,
    "question": "Which standardized TCP port is used by HTTPS services?",
    "options": [
      "25",
      "80",
      "8080",
      "443",
      "636"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "SSH port forwarding: -L local (local:remoteHost:remotePort), -R remote forwarding, -D dynamic (SOCKS proxy). 'ssh -L 8080:internal:80 jump' map localhost:8080 đến internal:80 qua jump host.",
      "vi": "SSH port forwarding: -L local (local:remoteHost:remotePort), -R remote forwarding, -D dynamic (SOCKS proxy). 'ssh -L 8080:internal:80 jump' map localhost:8080 đến internal:80 qua jump host.\n🔑 Keywords: SSH -L local forward | -R remote forward | -D dynamic SOCKS | tunnel | port forwarding"
    },
    "questionVi": "Cổng TCP tiêu chuẩn nào được sử dụng bởi các dịch vụ HTTPS?",
    "optionsVi": [
      "25",
      "80",
      "8080",
      "443",
      "636"
    ]
  },
  {
    "id": 221,
    "topicId": 2,
    "question": "Which of the following environment variables can be defined in locale.conf? (Choose two.)",
    "options": [
      "LC_ALL",
      "LC_USERNAME",
      "LC_UTF8",
      "LC_GEOGRAPHY",
      "LC_TIME"
    ],
    "correct": [
      0,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "TCP wrappers (/etc/hosts.allow và /etc/hosts.deny): kiểm soát truy cập dịch vụ. hosts.allow được check trước. Format: 'service: IP hoặc network'. ALL: EXCEPT để loại trừ.",
      "vi": "TCP wrappers (/etc/hosts.allow và /etc/hosts.deny): kiểm soát truy cập dịch vụ. hosts.allow được check trước. Format: 'service: IP hoặc network'. ALL: EXCEPT để loại trừ.\n🔑 Keywords: TCP wrappers | /etc/hosts.allow | /etc/hosts.deny | allow deny order | access control"
    },
    "questionVi": "Biến môi trường nào sau đây có thể được xác định trong locale.conf? (Chọn hai.)",
    "optionsVi": [
      "LC_ALL",
      "LC_USERNAME",
      "LC_UTF8",
      "LC_GEOGRAPHY",
      "LC_TIME"
    ]
  },
  {
    "id": 222,
    "topicId": 2,
    "question": "Which of the following commands sets the system's time zone to the Canadian Eastern Time?",
    "options": [
      "localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
      "tzconf /etc/localtime",
      "sysctl -w clock.tz='Canada/Eastern'",
      "modprobe tz_ca_est",
      "ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "fail2ban tự động block IP sau N lần thử đăng nhập thất bại. Đọc log files, dùng iptables hoặc firewalld để block. /etc/fail2ban/jail.conf cấu hình. 'fail2ban-client status' xem trạng thái.",
      "vi": "fail2ban tự động block IP sau N lần thử đăng nhập thất bại. Đọc log files, dùng iptables hoặc firewalld để block. /etc/fail2ban/jail.conf cấu hình. 'fail2ban-client status' xem trạng thái.\n🔑 Keywords: fail2ban | brute force protection | jail.conf | ban IP | fail2ban-client status"
    },
    "questionVi": "Lệnh nào sau đây đặt múi giờ của hệ thống thành Giờ Miền Đông Canada?",
    "optionsVi": [
      "localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
      "tzconf /etc/localtime",
      "sysctl -w clock.tz='Canada/Miền Đông'",
      "modprobe tz_ca_est",
      "ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime"
    ]
  },
  {
    "id": 223,
    "topicId": 2,
    "question": "What option to useradd creates a new user's home directory and provisions it with a set of standard files? (Specify only the option name without any values or parameters.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "-D",
    "explanation": {
      "en": "xinetd/inetd là super-server: lắng nghe nhiều port, khởi động service tương ứng khi có kết nối. Tiết kiệm RAM vì service không luôn chạy. /etc/xinetd.d/ hoặc /etc/inetd.conf cấu hình.",
      "vi": "xinetd/inetd là super-server: lắng nghe nhiều port, khởi động service tương ứng khi có kết nối. Tiết kiệm RAM vì service không luôn chạy. /etc/xinetd.d/ hoặc /etc/inetd.conf cấu hình.\n🔑 Keywords: xinetd | inetd | super-server | on-demand service | /etc/xinetd.d/"
    },
    "questionVi": "Tùy chọn nào để useradd tạo thư mục chính của người dùng mới và cung cấp cho nó một tập hợp các tệp tiêu chuẩn? (Chỉ xác định tên tùy chọn mà không có bất kỳ giá trị hoặc tham số nào.)",
    "optionsVi": []
  },
  {
    "id": 224,
    "topicId": 2,
    "question": "How can a specific user be prevented from scheduling tasks with at?",
    "options": [
      "By adding the specific user to the /etc/at.allow file.",
      "By adding the specific user to the [deny] section in the /etc/atd.conf file.",
      "By adding the specific user to the nojobs group.",
      "By adding the specific user to the /etc/at.deny file.",
      "By executing the atd --deny [user] command."
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "DNSSEC xác thực DNS responses bằng chữ ký số. DNS over HTTPS (DoH) và DNS over TLS (DoT) mã hóa DNS queries. dig +dnssec để check DNSSEC. dnssec-keygen tạo DNSSEC keys.",
      "vi": "DNSSEC xác thực DNS responses bằng chữ ký số. DNS over HTTPS (DoH) và DNS over TLS (DoT) mã hóa DNS queries. dig +dnssec để check DNSSEC. dnssec-keygen tạo DNSSEC keys.\n🔑 Keywords: DNSSEC | DNS validation | DoH DoT | dig +dnssec | DNS security"
    },
    "questionVi": "Làm cách nào để ngăn chặn một người dùng cụ thể lên lịch tác vụ bằng at?",
    "optionsVi": [
      "Bằng cách thêm người dùng cụ thể vào tệp /etc/at.allow.",
      "Bằng cách thêm người dùng cụ thể vào phần [từ chối] trong tệp /etc/atd.conf.",
      "Bằng cách thêm người dùng cụ thể vào nhóm nojobs.",
      "Bằng cách thêm người dùng cụ thể vào tệp /etc/at.deny.",
      "Bằng cách thực hiện lệnh atd --deny [người dùng]."
    ]
  },
  {
    "id": 225,
    "topicId": 2,
    "question": "Which file contains the data of the last change of a user's password?",
    "options": [
      "/etc/gshadow",
      "/etc/passwd",
      "/etc/pwdlog",
      "/var/log/shadow",
      "/etc/shadow"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Wireshark/tcpdump là packet analyzers. 'tcpdump -i eth0 port 80 -w capture.pcap' capture packets. 'tcpdump -r capture.pcap' đọc lại. Bộ lọc BPF: 'host X', 'port 80', 'tcp and host X'.",
      "vi": "Wireshark/tcpdump là packet analyzers. 'tcpdump -i eth0 port 80 -w capture.pcap' capture packets. 'tcpdump -r capture.pcap' đọc lại. Bộ lọc BPF: 'host X', 'port 80', 'tcp and host X'.\n🔑 Keywords: tcpdump | wireshark | packet capture | -i interface | -w write | BPF filter"
    },
    "questionVi": "Tệp nào chứa dữ liệu về lần thay đổi mật khẩu cuối cùng của người dùng?",
    "optionsVi": [
      "/etc/gshadow",
      "/etc/passwd",
      "/etc/pwdlog",
      "/var/log/shadow",
      "/etc/shadow"
    ]
  },
  {
    "id": 226,
    "topicId": 2,
    "question": "Which of the following fields can be found in the /etc/group file? (Choose two.)",
    "options": [
      "The home directory of the group.",
      "The list of users that belong to the group.",
      "The name of the group.",
      "The default group ACL.",
      "The description of the group."
    ],
    "correct": [
      1,
      2
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ss thay thế netstat: 'ss -tulpn' (TCP+UDP+listening+PID+numeric), 'ss -s' summary, 'ss -o state established' chỉ kết nối ESTABLISHED. Nhanh hơn netstat vì đọc trực tiếp từ kernel.",
      "vi": "ss thay thế netstat: 'ss -tulpn' (TCP+UDP+listening+PID+numeric), 'ss -s' summary, 'ss -o state established' chỉ kết nối ESTABLISHED. Nhanh hơn netstat vì đọc trực tiếp từ kernel.\n🔑 Keywords: ss | ss -tulpn | ss -s summary | netstat replacement | socket statistics"
    },
    "questionVi": "Trường nào sau đây có thể được tìm thấy trong tệp /etc/group? (Chọn hai.)",
    "optionsVi": [
      "Thư mục chính của nhóm.",
      "Danh sách người dùng thuộc nhóm.",
      "Tên của nhóm.",
      "Nhóm mặc định ACL.",
      "Mô tả của nhóm."
    ]
  },
  {
    "id": 227,
    "topicId": 2,
    "question": "Which of the following sections exists in a systemd timer unit?",
    "options": [
      "[Events]",
      "[Timer]",
      "[cron]",
      "[Schedule]",
      "[Trigger]"
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ip rule và ip route cho policy routing: nhiều routing table, 'ip rule add from 192.168.1.0/24 table 100'. 'ip route show table 100'. Dùng khi cần định tuyến phức tạp theo nguồn.",
      "vi": "ip rule và ip route cho policy routing: nhiều routing table, 'ip rule add from 192.168.1.0/24 table 100'. 'ip route show table 100'. Dùng khi cần định tuyến phức tạp theo nguồn.\n🔑 Keywords: ip rule | ip route table | policy routing | multiple routing tables | source-based routing"
    },
    "questionVi": "Phần nào sau đây tồn tại trong đơn vị hẹn giờ systemd?",
    "optionsVi": [
      "[Events]",
      "[Timer]",
      "[cron]",
      "[Schedule]",
      "[Trigger]"
    ]
  },
  {
    "id": 228,
    "topicId": 2,
    "question": "Which of the following getent invocations lists all existing users?",
    "options": [
      "getent homes",
      "getent uids",
      "getent passwd",
      "getent users",
      "getent logins"
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "bonding/teaming: kết hợp nhiều interface thành 1 virtual interface cho redundancy hoặc throughput. Mode: 0 (balance-rr), 1 (active-backup), 4 (802.3ad LACP). /etc/sysconfig/ifcfg-bondX.",
      "vi": "bonding/teaming: kết hợp nhiều interface thành 1 virtual interface cho redundancy hoặc throughput. Mode: 0 (balance-rr), 1 (active-backup), 4 (802.3ad LACP). /etc/sysconfig/ifcfg-bondX.\n🔑 Keywords: bonding | teaming | LACP 802.3ad | active-backup | link aggregation | ifcfg-bond"
    },
    "questionVi": "Lệnh gọi getent nào sau đây liệt kê tất cả người dùng hiện có?",
    "optionsVi": [
      "nhà nhận được",
      "uid nhận được",
      "mật khẩu nhận được",
      "người dùng nhận được",
      "đăng nhập nhận được"
    ]
  },
  {
    "id": 229,
    "topicId": 2,
    "question": "Given the following user's crontab entry:15 14 * * 1-5 /usr/local/bin/example.shWhen will the script /usr/local/bin/example.sh be executed?",
    "options": [
      "At 14:15 local time, January till May.",
      "At 15:14 local time, 1st to 5th day of month.",
      "At 14:15 local time, February till June.",
      "At 14:15 local time, 1st to 5th day of month.",
      "At 14:15 local time, Monday to Friday"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Bridge networking: kết nối các network segments ở layer 2. 'brctl addbr br0', 'brctl addif br0 eth0'. ip link add br0 type bridge. Dùng trong virtualization (VMs kết nối qua bridge).",
      "vi": "Bridge networking: kết nối các network segments ở layer 2. 'brctl addbr br0', 'brctl addif br0 eth0'. ip link add br0 type bridge. Dùng trong virtualization (VMs kết nối qua bridge).\n🔑 Keywords: bridge | brctl | layer 2 | ip link add type bridge | virtual machines networking"
    },
    "questionVi": "Với mục nhập crontab của người dùng sau:15 14 * * 1-5 /usr/local/bin/example.sh Khi nào tập lệnh /usr/local/bin/example.sh sẽ được thực thi?",
    "optionsVi": [
      "Vào lúc 14:15 giờ địa phương, từ tháng 1 đến tháng 5.",
      "Vào lúc 15:14 giờ địa phương, ngày 1 đến ngày 5 hàng tháng.",
      "Lúc 14:15 giờ địa phương, từ tháng 2 đến tháng 6.",
      "Vào lúc 14:15 giờ địa phương, ngày 1 đến ngày 5 hàng tháng.",
      "Vào lúc 14:15 giờ địa phương, từ Thứ Hai đến Thứ Sáu"
    ]
  },
  {
    "id": 230,
    "topicId": 2,
    "question": "If neither cron.allow nor cron.deny exist in /etc/, which of the following is true?",
    "options": [
      "Without additional configuration, all users may create user specific crontabs.",
      "Without additional configuration, only root may create user specific crontabs.",
      "The cron daemon will refuse to start and report missing files in the system's logfile.",
      "When a user creates a user specific crontab the system administrator must approve it explicitly.",
      "The default settings of /etc/crond.conf define whether or not user specific crontabs are generally allowed or not."
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "VLAN (Virtual LAN): phân đoạn mạng logic tại layer 2. 'ip link add link eth0 name eth0.100 type vlan id 100' tạo VLAN 100 trên eth0. Cần switch hỗ trợ 802.1Q.",
      "vi": "VLAN (Virtual LAN): phân đoạn mạng logic tại layer 2. 'ip link add link eth0 name eth0.100 type vlan id 100' tạo VLAN 100 trên eth0. Cần switch hỗ trợ 802.1Q.\n🔑 Keywords: VLAN | 802.1Q | ip link type vlan | vlan id | network segmentation | trunk port"
    },
    "questionVi": "Nếu cả cron.allow và cron.deny đều không tồn tại trong /etc/, điều nào sau đây là đúng?",
    "optionsVi": [
      "Nếu không có cấu hình bổ sung, tất cả người dùng có thể tạo crontab dành riêng cho người dùng.",
      "Nếu không có cấu hình bổ sung, chỉ root mới có thể tạo crontab dành riêng cho người dùng.",
      "Trình nền cron sẽ từ chối khởi động và báo cáo các tệp bị thiếu trong tệp nhật ký của hệ thống.",
      "Khi người dùng tạo một crontab cụ thể cho người dùng, quản trị viên hệ thống phải phê duyệt nó một cách rõ ràng.",
      "Cài đặt mặc định của /etc/crond.conf xác định xem crontab cụ thể của người dùng có được phép hay không."
    ]
  },
  {
    "id": 231,
    "topicId": 2,
    "question": "What is the purpose of the iconv command?",
    "options": [
      "It converts bitmap images from one format to another such as PNG to JPEG.",
      "It verifies that the root directory tree compiles to all conventions from the Filesystem Hierarchy Standard (FHS).",
      "It converts files from one character set to an other.",
      "It changes the mode of an inode in the ext4 filesystem.",
      "It displays additional meta information from icon files ending in .ico."
    ],
    "correct": [
      2
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "/etc/network/interfaces (Debian) cấu hình network. Cú pháp: 'auto eth0', 'iface eth0 inet static', 'address', 'netmask', 'gateway'. 'ifup eth0' kích hoạt, 'ifdown eth0' dừng.",
      "vi": "/etc/network/interfaces (Debian) cấu hình network. Cú pháp: 'auto eth0', 'iface eth0 inet static', 'address', 'netmask', 'gateway'. 'ifup eth0' kích hoạt, 'ifdown eth0' dừng.\n🔑 Keywords: /etc/network/interfaces | ifup ifdown | inet static dhcp | auto | Debian networking"
    },
    "questionVi": "Mục đích của lệnh iconv là gì?",
    "optionsVi": [
      "Nó chuyển đổi hình ảnh bitmap từ định dạng này sang định dạng khác, chẳng hạn như PNG sang JPEG.",
      "Nó xác minh rằng cây thư mục gốc biên dịch theo tất cả các quy ước từ Tiêu chuẩn phân cấp hệ thống tập tin (FHS).",
      "Nó chuyển đổi tập tin từ bộ ký tự này sang bộ ký tự khác.",
      "Nó thay đổi chế độ của một nút trong hệ thống tập tin ext4.",
      "Nó hiển thị thông tin meta bổ sung từ các tệp biểu tượng kết thúc bằng .ico."
    ]
  },
  {
    "id": 232,
    "topicId": 2,
    "question": "Which character in the password field of /etc/passwd is used to indicate that the encrypted password is stored in /etc/shadow?",
    "options": [
      "*",
      "-",
      "s",
      "#",
      "x"
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Wireless security: WPA2-PSK dùng pre-shared key, WPA2-Enterprise dùng RADIUS server. wpa_supplicant xử lý kết nối WPA. /etc/wpa_supplicant/wpa_supplicant.conf cấu hình client.",
      "vi": "Wireless security: WPA2-PSK dùng pre-shared key, WPA2-Enterprise dùng RADIUS server. wpa_supplicant xử lý kết nối WPA. /etc/wpa_supplicant/wpa_supplicant.conf cấu hình client.\n🔑 Keywords: WPA2-PSK | WPA2-Enterprise | wpa_supplicant | RADIUS | /etc/wpa_supplicant.conf"
    },
    "questionVi": "Ký tự nào trong trường mật khẩu của /etc/passwd được sử dụng để chỉ ra rằng mật khẩu được mã hóa được lưu trữ trong /etc/shadow?",
    "optionsVi": [
      "*",
      "-",
      "s",
      "#",
      "x"
    ]
  },
  {
    "id": 233,
    "topicId": 2,
    "question": "What does the term Braille Display refer to?",
    "options": [
      "A standardized high contract graphical theme for desktop applications?",
      "A Linux desktop environment similar to KDE and GNOME.",
      "A legacy display technology superseded by LCD.",
      "A physical representation of characters using small dots.",
      "A standard file format for data exchange, similar to XML."
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "IPv6 addressing: địa chỉ 128-bit, viết dạng hexadecimal. Link-local: fe80::/10. Loopback: ::1. Global unicast: 2000::/3. 'ip -6 addr' xem IPv6. 'ping6' ping IPv6. DHCPv6 hoặc SLAAC.",
      "vi": "IPv6 addressing: địa chỉ 128-bit, viết dạng hexadecimal. Link-local: fe80::/10. Loopback: ::1. Global unicast: 2000::/3. 'ip -6 addr' xem IPv6. 'ping6' ping IPv6. DHCPv6 hoặc SLAAC.\n🔑 Keywords: IPv6 | 128-bit | fe80:: link-local | ::1 loopback | ip -6 addr | ping6 | SLAAC"
    },
    "questionVi": "Thuật ngữ Màn hình chữ nổi đề cập đến điều gì?",
    "optionsVi": [
      "Một chủ đề đồ họa hợp đồng cao được tiêu chuẩn hóa cho các ứng dụng máy tính để bàn?",
      "Môi trường máy tính để bàn Linux tương tự như KDE và Gnome.",
      "Một công nghệ hiển thị truyền thống được thay thế bởi LCD.",
      "Sự thể hiện vật lý của các ký tự bằng cách sử dụng các dấu chấm nhỏ.",
      "Một định dạng tệp tiêu chuẩn để trao đổi dữ liệu, tương tự như XML."
    ]
  },
  {
    "id": 234,
    "topicId": 2,
    "question": "Which environment variable is used by an X11 client to determine the X Server to connect to? (Specify only the variable name without any preceding commands or values.)",
    "options": [],
    "correct": [],
    "multiSelect": false,
    "fillBlank": true,
    "answer": "DISPLAY",
    "explanation": {
      "en": "Packet filtering nftables (thay thế iptables): 'nft add table ip filter', 'nft add chain ip filter input { type filter hook input priority 0; }'. nftables dùng trong kernel 3.13+.",
      "vi": "Packet filtering nftables (thay thế iptables): 'nft add table ip filter', 'nft add chain ip filter input { type filter hook input priority 0; }'. nftables dùng trong kernel 3.13+.\n🔑 Keywords: nftables | nft | iptables replacement | table chain rule | hook | priority"
    },
    "questionVi": "Biến môi trường nào được máy khách X11 sử dụng để xác định Máy chủ X cần kết nối? (Chỉ xác định tên biến mà không có bất kỳ lệnh hoặc giá trị nào trước đó.)",
    "optionsVi": []
  },
  {
    "id": 235,
    "topicId": 2,
    "question": "Which of the following tasks are handled by a display manager like XDM or KMD? (Choose two.)",
    "options": [
      "Configure additional devices like new monitors or projectors when they are attached.",
      "Start and prepare the desktop environment for the user.",
      "Create an X11 configuration file for the current graphic devices and monitors.",
      "Lock the screen when the user was inactive for a configurable amount of time.",
      "Handle the login of a user."
    ],
    "correct": [
      1,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "NetworkManager profiles lưu trong /etc/NetworkManager/system-connections/ (text files .nmconnection). nmcli con export để xuất, nmcli con import để nhập. Hỗ trợ nhiều loại kết nối.",
      "vi": "NetworkManager profiles lưu trong /etc/NetworkManager/system-connections/ (text files .nmconnection). nmcli con export để xuất, nmcli con import để nhập. Hỗ trợ nhiều loại kết nối.\n🔑 Keywords: /etc/NetworkManager/system-connections/ | .nmconnection | nmcli con export import | NM profiles"
    },
    "questionVi": "Tác vụ nào sau đây được xử lý bởi trình quản lý hiển thị như XDM hoặc KMD? (Chọn hai.)",
    "optionsVi": [
      "Định cấu hình các thiết bị bổ sung như màn hình hoặc máy chiếu mới khi chúng được gắn vào.",
      "Bắt đầu và chuẩn bị môi trường máy tính để bàn cho người dùng.",
      "Tạo tệp cấu hình X11 cho các thiết bị đồ họa và màn hình hiện tại.",
      "Khóa màn hình khi người dùng không hoạt động trong một khoảng thời gian có thể định cấu hình.",
      "Xử lý việc đăng nhập của người dùng."
    ]
  },
  {
    "id": 236,
    "topicId": 2,
    "question": "Which of the following protocols is designed to access the video card output of a virtual machine?",
    "options": [
      "KDE",
      "X11",
      "Xfce",
      "SPICE",
      "XDMCP"
    ],
    "correct": [
      3
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Hostname resolution: /etc/hosts (local override) → /etc/nsswitch.conf (thứ tự) → DNS. 'getent hosts hostname' test resolution. nss-myhostname giải quyết hostname local không cần DNS.",
      "vi": "Hostname resolution: /etc/hosts (local override) → /etc/nsswitch.conf (thứ tự) → DNS. 'getent hosts hostname' test resolution. nss-myhostname giải quyết hostname local không cần DNS.\n🔑 Keywords: /etc/hosts priority | nsswitch.conf | getent hosts | nss-myhostname | resolution order"
    },
    "questionVi": "Giao thức nào sau đây được thiết kế để truy cập đầu ra card màn hình của máy ảo?",
    "optionsVi": [
      "KDE",
      "X11",
      "Xfce",
      "SPICE",
      "XDMCP"
    ]
  },
  {
    "id": 237,
    "topicId": 2,
    "question": "What is true about the file /etc/localtime?",
    "options": [
      "It is a plain text file containing a string such as Europe/Berlin",
      "It is created and maintained by the NTP service based on the location of the system's IP address.",
      "It is a symlink to /sys/device/clock/ltime and always contains the current local time.",
      "After changing this file, newtzconfig has to be run to make the changes effective.",
      "It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "Routing table: 'ip route show' hoặc 'route -n'. Default route (0.0.0.0/0) đến gateway. Static route persistent: /etc/sysconfig/network-scripts/route-eth0 (RHEL) hoặc /etc/network/interfaces (Debian).",
      "vi": "Routing table: 'ip route show' hoặc 'route -n'. Default route (0.0.0.0/0) đến gateway. Static route persistent: /etc/sysconfig/network-scripts/route-eth0 (RHEL) hoặc /etc/network/interfaces (Debian).\n🔑 Keywords: ip route show | route -n | default route 0.0.0.0/0 | gateway | static route persistent"
    },
    "questionVi": "Điều gì đúng về tệp /etc/localtime?",
    "optionsVi": [
      "Nó là một tập tin văn bản đơn giản chứa một chuỗi như Europe/Berlin",
      "Nó được tạo và duy trì bởi dịch vụ NTP dựa trên vị trí địa chỉ IP của hệ thống.",
      "Nó là một liên kết tượng trưng đến /sys/device/clock/ltime và luôn chứa giờ địa phương hiện tại.",
      "Sau khi thay đổi tệp này, newtzconfig phải được chạy để thay đổi có hiệu lực.",
      "Nó là một liên kết tượng trưng đến hoặc một bản sao của tệp thông tin múi giờ, chẳng hạn như /usr/share/zoneinfo/Europe/Berlin."
    ]
  },
  {
    "id": 238,
    "topicId": 2,
    "question": "Which of the following statements is true regarding systemd timer units?",
    "options": [
      "Timer units can only be defined within a service unit's file.",
      "The command executed by the timer is specified in the timer unit's [Cmd] section.",
      "A dedicated system service, systemd-cron, handles the execution of timer units.",
      "Timer units only exist in the system scope and are not available for users.",
      "Each systemd timer unit controls a specific systemd service unit."
    ],
    "correct": [
      4
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ethtool hiển thị và thay đổi cài đặt NIC: speed, duplex, autoneg. 'ethtool eth0' xem trạng thái, 'ethtool -s eth0 speed 100 duplex full' đặt speed. 'ethtool -S eth0' statistics.",
      "vi": "ethtool hiển thị và thay đổi cài đặt NIC: speed, duplex, autoneg. 'ethtool eth0' xem trạng thái, 'ethtool -s eth0 speed 100 duplex full' đặt speed. 'ethtool -S eth0' statistics.\n🔑 Keywords: ethtool | NIC settings | speed duplex | autoneg | ethtool -s | ethtool -S stats"
    },
    "questionVi": "Câu nào sau đây đúng về đơn vị hẹn giờ systemd?",
    "optionsVi": [
      "Đơn vị hẹn giờ chỉ có thể được xác định trong tệp của đơn vị dịch vụ.",
      "Lệnh được thực hiện bởi bộ hẹn giờ được chỉ định trong phần [Cmd] của bộ hẹn giờ.",
      "Một dịch vụ hệ thống chuyên dụng, systemd-cron, xử lý việc thực thi các đơn vị hẹn giờ.",
      "Đơn vị hẹn giờ chỉ tồn tại trong phạm vi hệ thống và không có sẵn cho người dùng.",
      "Mỗi đơn vị hẹn giờ systemd điều khiển một đơn vị dịch vụ systemd cụ thể."
    ]
  },
  {
    "id": 239,
    "topicId": 2,
    "question": "Which of the following fields are available in the standard format of both the global /etc/crontab file as well as in user-specific crontab files? (Choose two.)",
    "options": [
      "Year",
      "Minute",
      "Username",
      "Effective group ID",
      "Command"
    ],
    "correct": [
      1,
      4
    ],
    "multiSelect": true,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "nc (netcat) là 'Swiss army knife' của networking: tạo TCP/UDP connections, listen trên port, transfer files. 'nc -lvp 1234' listen, 'nc host 1234 < file' transfer. ncat là version mới hơn.",
      "vi": "nc (netcat) là 'Swiss army knife' của networking: tạo TCP/UDP connections, listen trên port, transfer files. 'nc -lvp 1234' listen, 'nc host 1234 < file' transfer. ncat là version mới hơn.\n🔑 Keywords: nc netcat | -l listen | -p port | -v verbose | file transfer | port testing | ncat"
    },
    "questionVi": "Trường nào sau đây có sẵn ở định dạng chuẩn của cả tệp /etc/crontab chung cũng như trong tệp crontab dành riêng cho người dùng? (Chọn hai.)",
    "optionsVi": [
      "Year",
      "Minute",
      "Username",
      "ID nhóm hiệu quả",
      "Command"
    ]
  },
  {
    "id": 240,
    "topicId": 2,
    "question": "Which of the following commands should be executed when starting a login shell in order to change the language of messages for an internationalized program toPortuguese (pt)?",
    "options": [
      "export LANGUAGE=\"pt\"",
      "export LC_MESSAGES=\"pt\"",
      "export UI_MESSAGES=\"pt\"",
      "export MESSAGE=\"pt\"",
      "export ALL_MESSAGES=\"pt\""
    ],
    "correct": [
      1
    ],
    "multiSelect": false,
    "fillBlank": false,
    "answer": "",
    "explanation": {
      "en": "ICMP (Internet Control Message Protocol): ping dùng ICMP echo. Type 0=echo reply, Type 8=echo request, Type 3=destination unreachable, Type 11=TTL exceeded. traceroute dùng TTL để map route.",
      "vi": "ICMP (Internet Control Message Protocol): ping dùng ICMP echo. Type 0=echo reply, Type 8=echo request, Type 3=destination unreachable, Type 11=TTL exceeded. traceroute dùng TTL để map route.\n🔑 Keywords: ICMP | ping | type 0 8 3 11 | TTL | traceroute | destination unreachable"
    },
    "questionVi": "Lệnh nào sau đây sẽ được thực thi khi khởi động shell đăng nhập để thay đổi ngôn ngữ của thông báo cho một chương trình được quốc tế hóa sang tiếng Bồ Đào Nha (pt)?",
    "optionsVi": [
      "xuất NGÔN NGỮ=\"pt\"",
      "xuất LC_MESSAGES=\"pt\"",
      "xuất UI_MESSAGES=\"pt\"",
      "xuất THÔNG ĐIỆP=\"pt\"",
      "xuất ALL_MESSAGES=\"pt\""
    ]
  }
];
