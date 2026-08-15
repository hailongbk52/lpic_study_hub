"""
Add Vietnamese explanations + keywords directly to questions.js
Based on LPIC-1 (101-500 / 102-500) knowledge.
Run: python question_source/add_explanations.py
"""
import sys, io, json, re, os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QJS  = os.path.join(ROOT, 'questions.js')

# ─────────────────────────────────────────────────────────────────────────────
# EXPLANATION DATABASE (id → {vi, keywords})
# Format per entry:
#   "vi"  – brief Vietnamese explanation (1-3 sentences) + why correct answer
#   "kw"  – list of key words/concepts to remember
# ─────────────────────────────────────────────────────────────────────────────
EXPL = {

# ── TOPIC 1: LPIC-1 Exam 101 ─────────────────────────────────────────────────

1:  {"vi": "Khi chạy mkfs không có tham số nào khác, nó tạo filesystem ext2 theo mặc định. ext2 là filesystem Linux truyền thống, không có journaling.",
     "kw": ["mkfs", "ext2", "default filesystem", "no journaling"]},

2:  {"vi": "umask 0027 nghĩa là: owner có toàn quyền (rwx=7), group chỉ đọc+thực thi (r-x=5), others không có gì (---=0). Công thức: quyền tối đa (777) trừ umask (027) = 750 cho thư mục.",
     "kw": ["umask", "0027", "directory permissions", "750"]},

3:  {"vi": "tune2fs -i đặt khoảng thời gian (interval) giữa các lần fsck. '-i 200' = 200 ngày. Tham số -d không tồn tại, -c là số lần mount, không phải ngày.",
     "kw": ["tune2fs", "-i interval", "fsck", "ext3"]},

4:  {"vi": "Theo mặc định, mkfs.ext4 dành 5% dung lượng cho root user (reserved blocks). Giá trị này tránh filesystem bị đầy hoàn toàn khi user thường dùng hết chỗ.",
     "kw": ["ext4", "reserved blocks", "5%", "root user", "tune2fs -m"]},

5:  {"vi": "systemd tự động tạo mount unit khi bạn mount thủ công, và theo dõi (monitor) filesystem đó. Điều này là hành vi mặc định của systemd.",
     "kw": ["systemd", "automount", "mount unit", "auto-generated"]},

6:  {"vi": "updatedb là lệnh cập nhật cơ sở dữ liệu của locate. Cơ sở dữ liệu này (thường ở /var/lib/mlocate/mlocate.db) được dùng để tìm kiếm file nhanh.",
     "kw": ["updatedb", "locate", "mlocate.db", "/var/lib/mlocate"]},

7:  {"vi": "mount --bind 'liên kết' một thư mục vào một thư mục khác — nội dung thư mục nguồn xuất hiện ở cả hai vị trí mà không cần copy. Hữu ích để chia sẻ thư mục trong chroot.",
     "kw": ["mount --bind", "bind mount", "directory sharing", "chroot"]},

8:  {"vi": "Cú pháp hard link: ln <source> <destination>. Lệnh 'ln a.txt c.txt' tạo hard link c.txt trỏ đến cùng inode với a.txt. Thứ tự: nguồn trước, đích sau.",
     "kw": ["ln", "hard link", "inode", "source destination order"]},

9:  {"vi": "SGID bit (Set Group ID) đảm bảo các file mới trong thư mục kế thừa group của thư mục, không phải group của người tạo. Cả 'chmod g+s' và 'chmod 2775' (số 2) đều thiết lập SGID.",
     "kw": ["SGID", "chmod g+s", "chmod 2775", "group inheritance", "sticky bit"]},

10: {"vi": "Để xem filesystem đang mount: (1) lệnh 'mount' không tham số hiển thị tất cả, (2) cat /proc/self/mounts đọc file ảo kernel về mount hiện tại. Cả hai đều hợp lệ.",
     "kw": ["mount", "/proc/self/mounts", "mounted filesystems", "/proc/mounts"]},

11: {"vi": "df (disk free) hiển thị dung lượng đĩa đã dùng và còn trống của tất cả filesystem đang mount. Tùy chọn -h cho kết quả dạng human-readable.",
     "kw": ["df", "disk free", "mounted filesystems", "-h human-readable"]},

12: {"vi": "Cú pháp chown: 'chown owner:group file'. Dấu hai chấm (:) phân cách owner và group. Các cú pháp khác như dave/staff hoặc dave+staff đều sai.",
     "kw": ["chown", "owner:group", "colon separator", "chown dave:staff"]},

13: {"vi": "Hard link giới hạn trong cùng một filesystem (không thể trỏ sang filesystem khác). Đây là hạn chế căn bản vì hard link chia sẻ cùng inode số, mà inode chỉ duy nhất trong một filesystem.",
     "kw": ["hard link", "same filesystem", "inode", "cannot cross filesystem"]},

14: {"vi": "Theo FHS (Filesystem Hierarchy Standard), man page được lưu tại /usr/share/man/. Đây là vị trí chuẩn cho dữ liệu chỉ đọc chia sẻ giữa các kiến trúc.",
     "kw": ["FHS", "/usr/share/man/", "man pages", "Filesystem Hierarchy Standard"]},

15: {"vi": "/proc/cmdline chứa tham số kernel dòng lệnh (command line parameters) được bootloader (GRUB) truyền cho kernel khi khởi động.",
     "kw": ["/proc/cmdline", "kernel parameters", "bootloader", "GRUB", "boot options"]},

16: {"vi": "init luôn là process đầu tiên được kernel khởi động, có PID = 1. Đây là process cha của tất cả process khác trong hệ thống System V init.",
     "kw": ["init", "PID 1", "first process", "System V", "parent of all"]},

17: {"vi": "acpid (ACPI Daemon) là daemon xử lý các sự kiện ACPI như đóng nắp laptop, nhấn nút nguồn, cắm sạc. ACPI = Advanced Configuration and Power Interface.",
     "kw": ["acpid", "ACPI", "power management", "daemon", "power button"]},

18: {"vi": "Quá trình boot BIOS: (A) BIOS có thể cấu hình được (boot order, settings), (D) BIOS khởi động khi bật máy và là bước đầu tiên. BIOS KHÔNG cần driver từ secondary storage để chạy.",
     "kw": ["BIOS", "boot process", "POST", "boot order", "MBR"]},

19: {"vi": "UEFI tiên tiến hơn BIOS: (A) có thể đọc bảng phân vùng GPT/MBR, (B) có thể đọc FAT32 từ ESP (EFI System Partition). UEFI firmware code nằm trong flash memory trên bo mạch chủ.",
     "kw": ["UEFI", "GPT", "ESP", "FAT32", "partition table", "EFI System Partition"]},

20: {"vi": "Để chặn vĩnh viễn một kernel module, thêm 'blacklist <module_name>' vào /etc/modprobe.d/blacklist.conf. modprobe -r chỉ gỡ tạm thời, không ngăn load lại khi reboot.",
     "kw": ["blacklist", "modprobe.d", "kernel module", "persistent disable", "/etc/modprobe.d/"]},

21: {"vi": "Kernel ring buffer (dmesg) bị reset khi: (A) dùng lệnh dmesg -C hoặc dmesg --clear để xóa rõ ràng, (E) khi hệ thống tắt hoặc khởi động lại. Buffer là vòng — data cũ bị ghi đè bởi data mới.",
     "kw": ["kernel ring buffer", "dmesg", "dmesg -C", "reboot", "ring buffer"]},

22: {"vi": "/sbin/init là chương trình đầu tiên kernel khởi động (PID 1) trong hệ thống System V. Trên systemd, /sbin/init thường là symlink đến /lib/systemd/systemd.",
     "kw": ["/sbin/init", "PID 1", "System V init", "first userspace program"]},

23: {"vi": "SysVinit dùng số runlevel để định nghĩa trạng thái hệ thống. Runlevel 3 = multi-user với networking, không có GUI (text mode). Runlevel 5 = multi-user + networking + GUI.",
     "kw": ["runlevel", "SysV init", "runlevel 3", "multi-user", "no GUI"]},

24: {"vi": "Lệnh telinit dùng để thay đổi runlevel đang chạy trong System V init. Ví dụ: 'telinit 3' chuyển sang runlevel 3 (text mode).",
     "kw": ["telinit", "change runlevel", "SysV init", "runtime"]},

25: {"vi": "GRUB2 lưu cấu hình tại /boot/grub/grub.cfg (hoặc /boot/grub2/grub.cfg). File này được tự động sinh ra bởi grub-mkconfig từ các file trong /etc/grub.d/ và /etc/default/grub.",
     "kw": ["GRUB2", "/boot/grub/grub.cfg", "grub-mkconfig", "/etc/default/grub"]},

26: {"vi": "Để cài GRUB2 lên MBR của /dev/sda, dùng lệnh 'grub-install /dev/sda'. Không chỉ định partition mà chỉ định toàn bộ disk (không có số cuối).",
     "kw": ["grub-install", "MBR", "/dev/sda", "bootloader installation"]},

27: {"vi": "Sau khi sửa /etc/default/grub, phải chạy 'update-grub' (Debian/Ubuntu) hoặc 'grub2-mkconfig' để tái tạo /boot/grub/grub.cfg. Không sửa grub.cfg trực tiếp.",
     "kw": ["update-grub", "grub2-mkconfig", "/etc/default/grub", "regenerate config"]},

28: {"vi": "GRUB2 legacy password dùng MD5, nhưng GRUB2 dùng PBKDF2 (Password-Based Key Derivation Function 2) SHA-512. Dùng lệnh 'grub-mkpasswd-pbkdf2' để tạo hash.",
     "kw": ["GRUB2 password", "PBKDF2", "grub-mkpasswd-pbkdf2", "SHA-512"]},

29: {"vi": "Kernel parameter 'init=/bin/bash' cho phép boot thẳng vào bash shell thay vì init process. Dùng để recovery khi hệ thống hỏng. Có thể thêm vào GRUB boot line.",
     "kw": ["init=/bin/bash", "kernel parameter", "emergency boot", "GRUB", "recovery"]},

30: {"vi": "lsmod hiển thị danh sách các kernel module đang được load. Tương đương với cat /proc/modules. Output gồm tên module, kích thước và số lần sử dụng.",
     "kw": ["lsmod", "/proc/modules", "kernel modules", "loaded modules"]},

31: {"vi": "modprobe dùng để load/unload kernel module cùng với các dependency của nó. Khác insmod (load thủ công, không xử lý dependency). modprobe -r để remove module.",
     "kw": ["modprobe", "module dependencies", "insmod", "modprobe -r", "rmmod"]},

32: {"vi": "modinfo hiển thị thông tin chi tiết về một kernel module: tác giả, license, tham số, version, filename. Dùng để kiểm tra module trước khi load.",
     "kw": ["modinfo", "module information", "parameters", "license", "filename"]},

33: {"vi": "DKMS (Dynamic Kernel Module Support) tự động biên dịch lại kernel module của bên thứ ba khi kernel được cập nhật. Thường dùng cho driver như VirtualBox, NVIDIA.",
     "kw": ["DKMS", "Dynamic Kernel Module Support", "third-party drivers", "kernel update"]},

34: {"vi": "Trong /proc/sys/kernel/ có file 'hostname' chứa hostname hiện tại. Đây là giao diện kernel để xem/đặt các tham số hệ thống tại runtime.",
     "kw": ["/proc/sys/kernel/hostname", "sysctl", "kernel parameters", "runtime"]},

35: {"vi": "uname -r hiển thị phiên bản kernel đang chạy (running kernel version). Hữu ích để biết đang dùng kernel nào, nhất là khi có nhiều kernel được cài.",
     "kw": ["uname -r", "kernel version", "running kernel", "uname"]},

36: {"vi": "/proc/cpuinfo chứa thông tin chi tiết về CPU: model, số core, flags, tốc độ. Mỗi logical CPU có một entry riêng trong file này.",
     "kw": ["/proc/cpuinfo", "CPU information", "processor info", "cores"]},

37: {"vi": "free hiển thị thông tin RAM: total, used, free, buffers/cache. '-m' hiển thị theo MB. Thông tin lấy từ /proc/meminfo.",
     "kw": ["free", "RAM", "/proc/meminfo", "memory usage", "buffers cache"]},

38: {"vi": "lspci liệt kê tất cả thiết bị PCI/PCIe kết nối với hệ thống. Dùng để nhận diện card mạng, GPU, USB controller. Thông tin lấy từ /proc/bus/pci/ hoặc /sys/bus/pci/.",
     "kw": ["lspci", "PCI devices", "hardware detection", "PCI bus"]},

39: {"vi": "lsusb liệt kê tất cả thiết bị USB. '-v' để xem chi tiết, '-t' để xem dưới dạng cây. Thông tin lấy từ /sys/bus/usb/.",
     "kw": ["lsusb", "USB devices", "USB bus", "hardware detection"]},

40: {"vi": "dd là lệnh sao chép và chuyển đổi dữ liệu ở cấp block. 'if=' = input file, 'of=' = output file, 'bs=' = block size. Dùng để backup/restore disk, tạo ISO.",
     "kw": ["dd", "block copy", "if=", "of=", "bs=", "disk image"]},

41: {"vi": "fdisk là tool phân vùng đĩa MBR/DOS. Dùng để tạo, xóa, thay đổi loại partition. Với GPT disk nên dùng gdisk hoặc parted thay thế.",
     "kw": ["fdisk", "partition", "MBR", "DOS partition table", "gdisk for GPT"]},

42: {"vi": "parted hỗ trợ cả MBR và GPT, có thể chạy non-interactively (script mode). Hỗ trợ resize partition. Là tool hiện đại hơn fdisk.",
     "kw": ["parted", "GPT", "MBR", "resize partition", "non-interactive"]},

43: {"vi": "mkfs.ext4 tạo filesystem ext4 trên partition. Các tùy chọn quan trọng: -L (label), -m (reserved blocks %), -b (block size). Tương đương mkfs -t ext4.",
     "kw": ["mkfs.ext4", "create filesystem", "ext4", "-L label", "-m reserved"]},

44: {"vi": "e2fsck kiểm tra và sửa lỗi filesystem ext2/ext3/ext4. PHẢI unmount filesystem trước khi fsck. Dùng '-p' để tự sửa lỗi an toàn, '-y' để tự trả lời yes.",
     "kw": ["e2fsck", "filesystem check", "unmount first", "-p auto-fix", "ext2/3/4"]},

45: {"vi": "xfs_repair sửa lỗi XFS filesystem. Cần unmount trước. Khác e2fsck, XFS dùng tool riêng. 'xfs_check' đã deprecated, thay bằng xfs_repair -n (dry-run).",
     "kw": ["xfs_repair", "XFS", "filesystem repair", "unmount required"]},

46: {"vi": "Swap partition cần 'mkswap' để khởi tạo, rồi 'swapon' để kích hoạt. Để tự động mount khi boot, thêm vào /etc/fstab với type 'swap'.",
     "kw": ["mkswap", "swapon", "swap partition", "/etc/fstab", "virtual memory"]},

47: {"vi": "LVM (Logical Volume Manager) cho phép tạo, resize logical volume linh hoạt. Chuỗi: PV (Physical Volume) → VG (Volume Group) → LV (Logical Volume).",
     "kw": ["LVM", "Physical Volume", "Volume Group", "Logical Volume", "pvcreate vgcreate lvcreate"]},

48: {"vi": "blkid hiển thị UUID, TYPE (filesystem type), LABEL của các block device. Dùng UUID trong /etc/fstab thay vì /dev/sdX để ổn định khi tên thiết bị thay đổi.",
     "kw": ["blkid", "UUID", "filesystem type", "/etc/fstab", "block device"]},

49: {"vi": "Cấu trúc /etc/fstab: device | mount_point | fs_type | options | dump | pass. Trường 'pass': 0=không fsck, 1=root fs (fsck đầu tiên), 2=các fs khác.",
     "kw": ["/etc/fstab", "dump", "pass", "fsck order", "mount options"]},

50: {"vi": "mount -a mount tất cả filesystem trong /etc/fstab chưa được mount (trừ những có 'noauto'). Dùng sau khi sửa /etc/fstab để kiểm tra không cần reboot.",
     "kw": ["mount -a", "/etc/fstab", "mount all", "noauto option"]},

51: {"vi": "df -h hiển thị dung lượng filesystem dạng human-readable (KB, MB, GB). df -i hiển thị thông tin inode. Không nhầm df với du (du đo dung lượng thư mục/file).",
     "kw": ["df -h", "human-readable", "filesystem usage", "df vs du"]},

52: {"vi": "du -sh <thư mục> tính tổng dung lượng của một thư mục (-s=summary, -h=human-readable). 'du -ah' liệt kê dung lượng từng file/thư mục con.",
     "kw": ["du -sh", "directory size", "disk usage", "-s summary", "-h human-readable"]},

53: {"vi": "find là lệnh tìm kiếm file mạnh nhất. Cú pháp: find <path> [options]. '-name' tìm tên, '-type f' tìm file, '-mtime -7' = sửa trong 7 ngày qua, '-exec' chạy lệnh.",
     "kw": ["find", "-name", "-type", "-mtime", "-exec", "file search"]},

54: {"vi": "locate tìm file nhanh bằng cách tra cơ sở dữ liệu (do updatedb tạo). Nhanh hơn find nhưng database có thể lỗi thời. Dùng 'updatedb' để cập nhật.",
     "kw": ["locate", "database", "fast search", "updatedb", "mlocate"]},

55: {"vi": "which tìm đường dẫn tuyệt đối của lệnh trong PATH. whereis tìm binary, source và man page. type xác định loại (alias, function, builtin, file).",
     "kw": ["which", "whereis", "type", "PATH", "command location"]},

56: {"vi": "tar -czf archive.tar.gz /path/ tạo archive nén gzip. -x để giải nén, -t để liệt kê, -v để verbose. Nhớ: c=create, x=extract, z=gzip, j=bzip2, J=xz.",
     "kw": ["tar", "-czf", "-xzf", "gzip", "bzip2", "archive", "c x z j J"]},

57: {"vi": "gzip/gunzip nén/giải nén file .gz. bzip2/bunzip2 nén tốt hơn nhưng chậm hơn (.bz2). xz nén tốt nhất nhưng chậm nhất (.xz). compress/uncompress dùng định dạng .Z cũ.",
     "kw": ["gzip", "bzip2", "xz", ".gz .bz2 .xz", "compression ratio"]},

58: {"vi": "Redirects: > ghi đè (overwrite), >> nối thêm (append), < đọc từ file. Pipes: | kết nối stdout của lệnh này với stdin của lệnh kia. 2> redirect stderr.",
     "kw": [">", ">>", "<", "|", "redirect", "pipe", "stdin stdout stderr"]},

59: {"vi": "Biến shell: định nghĩa bằng VAR=value (không dấu cách). export VAR để biến thành environment variable truyền cho process con. unset VAR để xóa biến.",
     "kw": ["shell variable", "export", "environment variable", "VAR=value", "unset"]},

60: {"vi": "Bash shebang: dòng đầu script phải là #!/bin/bash (hoặc #!/usr/bin/env bash). chmod +x script.sh để cấp quyền thực thi. Chạy: ./script.sh hoặc bash script.sh.",
     "kw": ["shebang", "#!/bin/bash", "chmod +x", "executable", "bash script"]},

61: {"vi": "if/elif/else/fi là cú pháp điều kiện bash. Dấu cách bắt buộc trong [ condition ]. 'test' tương đương [[ ]]. -eq so sánh số, = so sánh chuỗi, -f kiểm tra file.",
     "kw": ["if elif else fi", "[ ]", "test", "-eq", "-f", "-d", "bash conditionals"]},

62: {"vi": "Vòng lặp for: 'for var in list; do ... done'. Vòng lặp while: 'while [ condition ]; do ... done'. break thoát vòng lặp, continue bỏ qua iteration hiện tại.",
     "kw": ["for loop", "while loop", "do done", "break", "continue", "bash loops"]},

63: {"vi": "Hàm trong bash: 'function_name() { commands; }' hoặc 'function name { commands; }'. Gọi hàm chỉ cần viết tên. $1,$2... là tham số truyền vào hàm.",
     "kw": ["bash function", "function()", "$1 $2", "parameters", "local variable"]},

64: {"vi": "cut cắt phần của mỗi dòng. '-d:' chỉ định delimiter, '-f1' lấy field 1. Ví dụ: cut -d: -f1 /etc/passwd lấy tên user. sort sắp xếp, uniq loại bỏ dòng trùng.",
     "kw": ["cut -d -f", "delimiter", "field", "sort", "uniq", "text processing"]},

65: {"vi": "sed là stream editor. 's/old/new/g' thay thế toàn bộ occurrences, 's/old/new/' chỉ thay thế đầu tiên. '-i' sửa file tại chỗ (in-place). '/pattern/d' xóa dòng.",
     "kw": ["sed", "s/old/new/g", "stream editor", "-i", "in-place", "substitution"]},

66: {"vi": "awk xử lý text theo cột. '$1' là cột 1, '$NF' là cột cuối, 'FS' là field separator. Ví dụ: awk -F: '{print $1}' /etc/passwd in cột 1 với ':' là separator.",
     "kw": ["awk", "$1 $NF", "FS field separator", "-F:", "pattern {action}"]},

67: {"vi": "grep tìm kiếm pattern trong file/stdin. '-i' không phân biệt hoa thường, '-r' đệ quy, '-v' đảo ngược (in dòng KHÔNG match), '-n' số dòng, '-E' extended regex.",
     "kw": ["grep", "-i", "-r recursive", "-v invert", "-n line number", "-E regex"]},

68: {"vi": "Regular expressions: '.' = bất kỳ ký tự, '*' = 0 hoặc nhiều, '+' = 1 hoặc nhiều, '^' = đầu dòng, '$' = cuối dòng, '[abc]' = ký tự trong tập, '\\d' = digit.",
     "kw": ["regex", ". * + ^ $", "character class []", "anchors", "quantifiers"]},

69: {"vi": "Quản lý tiến trình: ps aux hoặc ps -ef liệt kê tất cả process. top/htop theo dõi real-time. kill -9 PID buộc kết thúc. Ctrl+Z suspend, 'bg' chạy background, 'fg' foreground.",
     "kw": ["ps aux", "ps -ef", "top htop", "kill -9", "bg fg", "Ctrl+Z"]},

70: {"vi": "nice/renice điều chỉnh process priority. Nice value: -20 (ưu tiên cao nhất) đến +19 (thấp nhất). nice -n 10 command chạy với priority thấp. renice áp dụng cho process đang chạy.",
     "kw": ["nice", "renice", "priority", "nice value -20 to +19", "CPU scheduling"]},

71: {"vi": "Job control: Ctrl+Z đưa job vào background (suspended), 'bg %1' tiếp tục chạy background, 'fg %1' đưa về foreground, 'jobs' liệt kê các job. & ở cuối lệnh chạy ngay background.",
     "kw": ["job control", "Ctrl+Z", "bg fg", "jobs", "&", "background foreground"]},

72: {"vi": "nohup lệnh & cho phép lệnh tiếp tục chạy khi bạn logout. Kết hợp với & để chạy background. Output mặc định vào nohup.out. Không bị SIGHUP khi terminal đóng.",
     "kw": ["nohup", "SIGHUP", "logout", "persistent process", "nohup.out"]},

73: {"vi": "Signals: SIGTERM(15)=yêu cầu kết thúc nhẹ nhàng, SIGKILL(9)=buộc kết thúc ngay, SIGHUP(1)=reload config, SIGSTOP(19)=tạm dừng, SIGCONT(18)=tiếp tục. kill gửi signal.",
     "kw": ["SIGTERM 15", "SIGKILL 9", "SIGHUP 1", "kill", "signals", "killall"]},

74: {"vi": "cron là scheduler chạy lệnh định kỳ. Cú pháp crontab: min hour day month weekday command (5 trường thời gian). crontab -e sửa, -l liệt kê, -r xóa crontab của user.",
     "kw": ["cron", "crontab -e", "5 time fields", "min hour day month weekday", "scheduler"]},

75: {"vi": "at chạy lệnh MỘT LẦN vào thời điểm cụ thể. 'at now + 1 hour', 'at 14:30'. atq liệt kê jobs, atrm xóa. Cron dùng cho lệnh lặp lại, at dùng cho lệnh chạy một lần.",
     "kw": ["at", "one-time job", "atq", "atrm", "at now + 1 hour", "at vs cron"]},

76: {"vi": "anacron chạy các cron job bị bỏ lỡ (khi máy tắt) khi khởi động lại. Cấu hình trong /etc/anacrontab. Khác cron: không cần thời điểm cụ thể mà dùng khoảng cách ngày.",
     "kw": ["anacron", "missed jobs", "/etc/anacrontab", "daily weekly monthly", "delay"]},

77: {"vi": "systemd timer là thay thế hiện đại cho cron. File .timer cùng .service. 'systemctl list-timers' liệt kê timers. OnCalendar= chỉ định lịch, OnBootSec= sau khi boot.",
     "kw": ["systemd timer", ".timer unit", ".service unit", "OnCalendar", "systemctl list-timers"]},

78: {"vi": "Các lệnh quản lý package Debian/Ubuntu: dpkg (low-level), apt/apt-get (high-level với dependency), aptitude. apt install, apt remove (giữ config), apt purge (xóa cả config).",
     "kw": ["dpkg", "apt", "apt-get", "apt install", "apt remove", "apt purge", "Debian Ubuntu"]},

79: {"vi": "dpkg -i cài .deb package, dpkg -l liệt kê packages đã cài, dpkg -r remove package, dpkg -L liệt kê files của package, dpkg -S tìm package chứa file.",
     "kw": ["dpkg -i install", "dpkg -l list", "dpkg -r remove", "dpkg -L files", "dpkg -S search"]},

80: {"vi": "rpm (Red Hat Package Manager): -i install, -U upgrade, -e erase/remove, -q query, -V verify. rpm -qa liệt kê tất cả, rpm -ql <pkg> liệt kê files, rpm -qf <file> tìm package.",
     "kw": ["rpm", "-i -U -e", "-q query", "-qa all", "-ql files", "-qf find", "Red Hat"]},

81: {"vi": "yum (CentOS/RHEL) và dnf (Fedora/RHEL8+) là package managers cao cấp tự giải quyết dependency. 'yum install', 'yum update', 'yum search', 'yum info', 'yum list installed'.",
     "kw": ["yum", "dnf", "dependency resolution", "yum install update search", "RPM-based"]},

82: {"vi": "zypper là package manager của SUSE/openSUSE (RPM-based). Lệnh: zypper install (in), zypper remove (rm), zypper update (up), zypper search (se), zypper repos (lr).",
     "kw": ["zypper", "SUSE openSUSE", "zypper install remove update search", "RPM"]},

83: {"vi": "/etc/apt/sources.list và các file trong /etc/apt/sources.list.d/ chứa danh sách repository của apt. Format: 'deb [url] [distribution] [components]'.",
     "kw": ["/etc/apt/sources.list", "repository", "deb", "apt update", "sources.list.d"]},

84: {"vi": "apt-cache search tìm kiếm trong repository, apt-cache show hiển thị thông tin package, apt-cache depends hiển thị dependency. Chỉ đọc cache, không thay đổi hệ thống.",
     "kw": ["apt-cache search", "apt-cache show", "apt-cache depends", "package info"]},

85: {"vi": "Shared libraries (.so files) trong Linux. ldconfig cập nhật cache đường dẫn thư viện. /etc/ld.so.conf chứa thư mục tìm kiếm. LD_LIBRARY_PATH để chỉ định tạm thời.",
     "kw": ["shared library", ".so", "ldconfig", "/etc/ld.so.conf", "LD_LIBRARY_PATH"]},

86: {"vi": "ldd hiển thị shared libraries mà một binary phụ thuộc vào. Hữu ích để debug 'library not found' errors. ldd không nên dùng với file untrusted (security risk).",
     "kw": ["ldd", "shared library dependencies", "library not found", "binary dependencies"]},

87: {"vi": "make là build automation tool. Đọc Makefile để biết cách build. 'make' build target mặc định, 'make install' cài vào hệ thống, 'make clean' xóa file tạm. ./configure trước make.",
     "kw": ["make", "Makefile", "make install", "make clean", "./configure", "build from source"]},

88: {"vi": "Trình tự compile từ source: ./configure (kiểm tra dependencies, tạo Makefile) → make (biên dịch) → make install (cài vào /usr/local/ mặc định). Cần gcc và build-essential.",
     "kw": ["./configure", "make", "make install", "source compilation", "/usr/local/", "gcc"]},

# ── TOPIC 2: LPIC-1 Exam 102 ─────────────────────────────────────────────────

89: {"vi": "Trong bash, '\"$var\"' (double quotes) giữ nguyên giá trị biến nhưng cho phép variable expansion. '$var' không có quotes có thể bị word splitting. '$?' là exit code lệnh cuối.",
     "kw": ["double quotes", "variable expansion", "word splitting", "$?", "exit code"]},

90: {"vi": "Aliases được định nghĩa bằng 'alias name=command'. Lưu trong ~/.bashrc để persistence. 'alias' (không tham số) liệt kê tất cả aliases. 'unalias' để xóa.",
     "kw": ["alias", "~/.bashrc", "unalias", "command shortcut", "persistent alias"]},

91: {"vi": "Bash history: ~/.bash_history lưu lịch sử lệnh. 'history' liệt kê, '!!' chạy lệnh cuối, '!n' chạy lệnh số n, Ctrl+R tìm kiếm ngược. HISTSIZE kiểm soát số lệnh lưu.",
     "kw": ["history", "~/.bash_history", "!!", "Ctrl+R", "HISTSIZE", "HISTFILESIZE"]},

92: {"vi": "PS1 là biến điều khiển prompt của bash. Ký tự đặc biệt: \\u (username), \\h (hostname), \\w (working directory), \\$ (# nếu root). Lưu vào ~/.bashrc.",
     "kw": ["PS1", "prompt", "\\u \\h \\w", "~/.bashrc", "bash prompt customization"]},

93: {"vi": "/etc/profile chạy khi login shell bắt đầu. ~/.bash_profile hoặc ~/.profile cho user-specific. ~/.bashrc chạy cho non-login interactive shell. /etc/bash.bashrc cho tất cả users.",
     "kw": ["/etc/profile", "~/.bash_profile", "~/.bashrc", "login shell", "interactive shell"]},

94: {"vi": "source hoặc . (dot) thực thi script trong shell hiện tại (không tạo subshell). Dùng để áp dụng thay đổi từ .bashrc ngay mà không cần logout. '. ~/.bashrc' tương đương 'source ~/.bashrc'.",
     "kw": ["source", "dot command", ".", "current shell", "no subshell", ". ~/.bashrc"]},

95: {"vi": "X Window System: X server quản lý display hardware, X client là ứng dụng. DISPLAY variable (ví dụ: :0) xác định display. Xorg là implementation phổ biến của X.",
     "kw": ["X Window", "X server", "X client", "DISPLAY", "Xorg", ":0"]},

96: {"vi": "Display Manager (DM) là màn hình đăng nhập đồ họa. Các DM phổ biến: GDM (GNOME), KDM/SDDM (KDE), LightDM, XDM. DM khởi động X server và cho phép chọn desktop environment.",
     "kw": ["Display Manager", "GDM", "SDDM", "LightDM", "login screen", "X server"]},

97: {"vi": "Desktop Environments phổ biến: GNOME, KDE/Plasma, XFCE (nhẹ), LXDE/LXQt (rất nhẹ), Cinnamon (Mint), MATE. Window managers: Openbox, i3, Fluxbox.",
     "kw": ["GNOME", "KDE Plasma", "XFCE", "LXDE", "desktop environment", "window manager"]},

98: {"vi": "~/.Xauthority chứa MIT-MAGIC-COOKIE authentication cho X session. xauth dùng để quản lý. Khi SSH với X forwarding (-X), cookie được chia sẻ để cho phép kết nối.",
     "kw": ["~/.Xauthority", "MIT-MAGIC-COOKIE", "xauth", "X forwarding", "SSH -X"]},

99: {"vi": "CUPS (Common Unix Printing System) quản lý in ấn trong Linux. Web interface tại http://localhost:631. Lệnh: lpr in file, lpq xem queue, lprm xóa job, lpstat xem trạng thái.",
     "kw": ["CUPS", "printing", "http://localhost:631", "lpr", "lpq", "lprm", "lpstat"]},

100: {"vi": "lp là lệnh in file. '-d printer_name' chỉ định máy in, '-n N' số bản in. lpr tương tự nhưng cú pháp BSD. Cả hai gửi job đến CUPS daemon.",
      "kw": ["lp", "lpr", "-d printer", "-n copies", "CUPS", "print job"]},

101: {"vi": "/etc/passwd: format là username:password:UID:GID:GECOS:home:shell. Password thực thường là 'x' (stored in /etc/shadow). /etc/shadow chứa hashed password + expiry.",
      "kw": ["/etc/passwd", "/etc/shadow", "UID GID", "home", "shell", "x placeholder"]},

102: {"vi": "useradd tạo user mới. Các tùy chọn quan trọng: -m tạo home dir, -s chỉ định shell, -G thêm vào groups, -u chỉ định UID. usermod sửa user hiện có, userdel xóa.",
      "kw": ["useradd", "-m home", "-s shell", "-G groups", "-u UID", "usermod", "userdel"]},

103: {"vi": "passwd thay đổi password. 'passwd username' (root thay cho user khác), 'passwd' (user đổi của mình). '-l' lock, '-u' unlock, '-e' expire ngay (buộc đổi lần sau login).",
      "kw": ["passwd", "change password", "-l lock", "-u unlock", "-e expire", "password management"]},

104: {"vi": "groupadd tạo group mới, groupmod sửa, groupdel xóa. /etc/group: format là groupname:password:GID:members. 'usermod -aG groupname username' thêm user vào group.",
      "kw": ["groupadd groupmod groupdel", "/etc/group", "GID", "usermod -aG", "group membership"]},

105: {"vi": "su (switch user): 'su -' hoặc 'su - username' chạy login shell (đầy đủ environment). 'su username' không có '-' chỉ switch user nhưng giữ environment hiện tại.",
      "kw": ["su", "su -", "switch user", "login shell", "environment"]},

106: {"vi": "sudo cho phép user thực thi lệnh với quyền root/user khác. Cấu hình trong /etc/sudoers (dùng visudo để sửa). 'sudo -i' mở root shell, 'sudo -u user command' chạy với user khác.",
      "kw": ["sudo", "/etc/sudoers", "visudo", "sudo -i", "sudoers", "privilege escalation"]},

107: {"vi": "SSH: ssh user@host kết nối. ssh-keygen tạo key pair (-t rsa/ed25519). ssh-copy-id copy public key lên server. Private key ở ~/.ssh/id_rsa, public key ở ~/.ssh/id_rsa.pub.",
      "kw": ["ssh", "ssh-keygen", "ssh-copy-id", "~/.ssh/", "public private key", "authorized_keys"]},

108: {"vi": "/etc/ssh/sshd_config cấu hình SSH server. Quan trọng: Port, PermitRootLogin (no khuyến nghị), PasswordAuthentication, PubkeyAuthentication, AllowUsers/AllowGroups.",
      "kw": ["/etc/ssh/sshd_config", "PermitRootLogin no", "PasswordAuthentication", "PubkeyAuthentication", "Port"]},

109: {"vi": "~/.ssh/authorized_keys chứa public keys được phép đăng nhập không cần password. ~/.ssh/known_hosts lưu fingerprint của các host đã kết nối. ~/.ssh/config cấu hình SSH client.",
      "kw": ["authorized_keys", "known_hosts", "~/.ssh/config", "SSH keys", "fingerprint"]},

110: {"vi": "SCP (Secure Copy) copy file qua SSH. 'scp file user@host:/path/' copy lên server. 'scp user@host:/path/file .' copy xuống. '-r' đệ quy cho thư mục. SFTP là alternative.",
      "kw": ["scp", "secure copy", "-r recursive", "sftp", "SSH file transfer"]},

111: {"vi": "netstat (hoặc ss thay thế hiện đại hơn) hiển thị kết nối TCP/UDP, routing table, interface statistics. 'netstat -tulpn' = TCP+UDP+listening+PID+numeric. ss -tulpn tương đương.",
      "kw": ["netstat", "ss", "-tulpn", "TCP UDP", "listening ports", "routing table", "statistics"]},

112: {"vi": "ip command (thay thế ifconfig): 'ip addr' xem địa chỉ IP, 'ip route' xem routing table, 'ip link' quản lý interfaces. 'ip addr add 192.168.1.1/24 dev eth0' thêm IP.",
      "kw": ["ip addr", "ip route", "ip link", "ifconfig deprecated", "ip command", "network interface"]},

113: {"vi": "ping kiểm tra kết nối ICMP. '-c N' giới hạn số gói. traceroute/tracepath theo dõi đường đi gói tin. '-I' dùng ICMP, '-T' dùng TCP (bypass firewall). mtr kết hợp cả hai.",
      "kw": ["ping", "-c", "traceroute", "tracepath", "mtr", "ICMP", "network connectivity"]},

114: {"vi": "DNS lookup: dig (chi tiết), nslookup (interactive), host (đơn giản). 'dig @8.8.8.8 example.com A' tra A record. /etc/resolv.conf chứa DNS servers. /etc/hosts override DNS.",
      "kw": ["dig", "nslookup", "host", "DNS lookup", "/etc/resolv.conf", "/etc/hosts", "A record"]},

115: {"vi": "/etc/hostname chứa hostname của máy. 'hostnamectl set-hostname newhostname' (systemd). 'hostname' hiển thị/đặt tạm thời. /etc/hosts map hostname thành IP.",
      "kw": ["/etc/hostname", "hostnamectl", "hostname command", "/etc/hosts", "FQDN"]},

116: {"vi": "/etc/nsswitch.conf kiểm soát thứ tự tra cứu name resolution: files (local /etc/hosts) trước hay DNS trước. Quan trọng cho 'hosts: files dns' hoặc 'hosts: dns files'.",
      "kw": ["/etc/nsswitch.conf", "name resolution order", "files dns", "NSS", "name service"]},

117: {"vi": "iptables quản lý firewall Linux. Chains: INPUT, OUTPUT, FORWARD. 'iptables -A INPUT -p tcp --dport 22 -j ACCEPT' cho phép SSH. '-j DROP' từ chối, '-j REJECT' từ chối + thông báo.",
      "kw": ["iptables", "INPUT OUTPUT FORWARD", "-j ACCEPT DROP REJECT", "firewall", "chains rules"]},

118: {"vi": "firewalld (Red Hat/CentOS) là frontend cho iptables/nftables. Dùng zones (public, home, work, trusted). 'firewall-cmd --add-service=ssh --permanent' rồi '--reload'.",
      "kw": ["firewalld", "zones", "firewall-cmd", "--add-service", "--permanent --reload", "RHEL CentOS"]},

119: {"vi": "ufw (Uncomplicated Firewall) là frontend đơn giản cho iptables trên Ubuntu/Debian. 'ufw enable', 'ufw allow 22', 'ufw deny 23', 'ufw status'. Dễ dùng hơn iptables trực tiếp.",
      "kw": ["ufw", "uncomplicated firewall", "ufw allow deny enable status", "Ubuntu", "iptables frontend"]},

120: {"vi": "Network Manager (nmcli, nmtui) là service quản lý kết nối mạng. nmcli con show liệt kê kết nối, nmcli dev status trạng thái thiết bị. nmtui là giao diện text interactive.",
      "kw": ["NetworkManager", "nmcli", "nmtui", "network connections", "nmcli con show"]},

121: {"vi": "Để cấu hình mạng tĩnh trên Debian/Ubuntu: sửa /etc/network/interfaces. Trên RHEL/CentOS: sửa /etc/sysconfig/network-scripts/ifcfg-eth0. Hoặc dùng NetworkManager.",
      "kw": ["/etc/network/interfaces", "/etc/sysconfig/network-scripts/", "static IP", "network configuration"]},

122: {"vi": "DHCP client tự động lấy IP. dhclient <interface> để request DHCP lease. dhclient -r để release. NetworkManager tự quản lý DHCP. /var/lib/dhcp/ lưu lease files.",
      "kw": ["DHCP", "dhclient", "dhclient -r", "lease", "automatic IP", "NetworkManager"]},

123: {"vi": "nmcli là command-line interface cho NetworkManager. Ví dụ quan trọng: 'nmcli con add type ethernet', 'nmcli con up <name>', 'nmcli device wifi list', 'nmcli con modify'.",
      "kw": ["nmcli", "con add", "con up", "device wifi list", "NetworkManager CLI"]},

124: {"vi": "Routing: 'ip route add default via 192.168.1.1' thêm default gateway. 'ip route add 10.0.0.0/8 via 192.168.1.254' thêm static route. /etc/iproute2/rt_tables cho named tables.",
      "kw": ["ip route add", "default gateway", "static route", "via", "routing table"]},

125: {"vi": "Syslog: rsyslog và syslog-ng là các syslog daemon phổ biến. /etc/rsyslog.conf cấu hình. Log files trong /var/log/: syslog/messages (chung), auth.log (authentication), kern.log (kernel).",
      "kw": ["rsyslog", "syslog-ng", "/etc/rsyslog.conf", "/var/log/", "syslog messages auth kern"]},

126: {"vi": "journalctl là lệnh đọc systemd journal. 'journalctl -u servicename' log của service, '-f' follow (real-time), '--since today', '-p err' chỉ errors, '-b' từ lần boot này.",
      "kw": ["journalctl", "-u service", "-f follow", "--since", "-p priority", "-b boot", "systemd journal"]},

127: {"vi": "logrotate tự động xoay vòng (rotate) log files. Cấu hình trong /etc/logrotate.conf và /etc/logrotate.d/. Options: daily/weekly/monthly, rotate N, compress, missingok, notifempty.",
      "kw": ["logrotate", "/etc/logrotate.conf", "/etc/logrotate.d/", "rotate", "compress", "daily weekly"]},

128: {"vi": "NTP (Network Time Protocol) đồng bộ thời gian. ntpd là daemon truyền thống. chrony (chronyd) là implementation hiện đại, nhanh hơn. timedatectl (systemd) để quản lý thời gian.",
      "kw": ["NTP", "ntpd", "chrony chronyd", "timedatectl", "time synchronization", "ntpdate"]},

129: {"vi": "timedatectl (systemd) quản lý thời gian: 'timedatectl status', 'timedatectl set-timezone Asia/Ho_Chi_Minh', 'timedatectl set-ntp true'. date dùng để xem/đặt ngày giờ thủ công.",
      "kw": ["timedatectl", "set-timezone", "set-ntp", "date command", "timezone", "Asia/Ho_Chi_Minh"]},

130: {"vi": "SMTP/email: Postfix, Sendmail, Exim là MTAs (Mail Transfer Agent). MUA (Mail User Agent): mutt, Thunderbird. MDA (Mail Delivery Agent): procmail, dovecot. Port 25 SMTP, 587 submission.",
      "kw": ["MTA", "MUA", "MDA", "Postfix", "SMTP port 25 587", "email server"]},

131: {"vi": "mailq hiển thị mail queue của MTA. 'sendmail -q' để flush queue. maillog (/var/log/mail.log hoặc /var/log/maillog) là log của mail server. newaliases cập nhật /etc/aliases.",
      "kw": ["mailq", "mail queue", "sendmail -q", "maillog", "/etc/aliases", "newaliases"]},

132: {"vi": "/etc/aliases map địa chỉ email đến mailbox hoặc lệnh. Sau khi sửa phải chạy 'newaliases' (hoặc sendmail -bi) để rebuild alias database. Ví dụ: 'root: admin@example.com'.",
      "kw": ["/etc/aliases", "newaliases", "alias database", "email forwarding", "sendmail -bi"]},

133: {"vi": "Các file cấu hình printer: CUPS dùng /etc/cups/. 'lpadmin -p printername -E -v socket://host:9100 -m model' thêm máy in. 'cupsd' là CUPS daemon.",
      "kw": ["/etc/cups/", "lpadmin", "cupsd", "CUPS configuration", "IPP protocol"]},

134: {"vi": "Internationalization (i18n): locale xác định ngôn ngữ, bộ ký tự, định dạng số/ngày. 'locale' xem locale hiện tại. /etc/locale.conf (systemd). LANG, LC_ALL là các biến quan trọng.",
      "kw": ["locale", "LANG", "LC_ALL", "/etc/locale.conf", "i18n internationalization", "UTF-8"]},

135: {"vi": "iconv chuyển đổi encoding của file. 'iconv -f UTF-8 -t ISO-8859-1 file'. file -i xác định encoding. chardet (Python) nhận diện encoding. UTF-8 là chuẩn hiện đại.",
      "kw": ["iconv", "encoding conversion", "UTF-8", "ISO-8859-1", "character encoding", "file -i"]},

136: {"vi": "tzselect và timedatectl set-timezone thay đổi timezone. /etc/localtime là symlink đến timezone file trong /usr/share/zoneinfo/. TZ environment variable override tạm thời.",
      "kw": ["timezone", "tzselect", "/etc/localtime", "/usr/share/zoneinfo/", "TZ variable"]},

137: {"vi": "Accessibility: orca là screen reader cho GNOME. brltty hỗ trợ braille display. GOK (GNOME Onscreen Keyboard). Magnifier tích hợp trong GNOME/KDE. atspi là accessibility infrastructure.",
      "kw": ["orca", "screen reader", "brltty", "braille", "accessibility", "GOK", "AT-SPI"]},

138: {"vi": "chsh thay đổi login shell của user. 'chsh -s /bin/zsh' đổi sang zsh. Shell phải có trong /etc/shells. chfn thay đổi GECOS field (tên đầy đủ, phone...) trong /etc/passwd.",
      "kw": ["chsh", "change shell", "/etc/shells", "chfn", "GECOS", "login shell"]},

139: {"vi": "id hiển thị UID, GID và các group của user. 'id username' cho user cụ thể. whoami in username hiện tại. groups in các group của user. logname in login name gốc.",
      "kw": ["id", "UID GID", "whoami", "groups", "logname", "current user info"]},

140: {"vi": "w hiển thị user đang login + hoạt động của họ. who hiển thị ai đang login. last hiển thị lịch sử login (/var/log/wtmp). lastb hiển thị login thất bại (/var/log/btmp).",
      "kw": ["w", "who", "last", "lastb", "/var/log/wtmp", "/var/log/btmp", "login history"]},

141: {"vi": "PAM (Pluggable Authentication Modules) là framework xác thực linh hoạt. Cấu hình trong /etc/pam.d/. Các module: pam_unix (password), pam_ldap (LDAP), pam_tally2 (lockout).",
      "kw": ["PAM", "Pluggable Authentication", "/etc/pam.d/", "pam_unix", "authentication modules"]},

142: {"vi": "ulimit giới hạn tài nguyên cho shell/process. '-n' số file descriptors, '-u' max processes, '-v' virtual memory, '-c' core file size. /etc/security/limits.conf cho persistent settings.",
      "kw": ["ulimit", "-n file descriptors", "-u processes", "/etc/security/limits.conf", "resource limits"]},

143: {"vi": "GnuPG (gpg): 'gpg --gen-key' tạo key pair, 'gpg --encrypt -r recipient file' mã hóa, 'gpg --decrypt file' giải mã, 'gpg --sign file' ký, 'gpg --verify' xác minh chữ ký.",
      "kw": ["gpg", "--gen-key", "--encrypt", "--decrypt", "--sign", "--verify", "GPG key management"]},

144: {"vi": "OpenSSL tạo certificates và keys. 'openssl genrsa -out key.pem 2048' tạo RSA key, 'openssl req -new -x509' tạo self-signed cert. Dùng cho HTTPS, SSL/TLS.",
      "kw": ["openssl", "genrsa", "x509", "self-signed certificate", "SSL TLS", "PKI"]},

145: {"vi": "chmod thay đổi permissions. Symbolic: 'chmod u+x', 'chmod g-w', 'chmod o=r'. Numeric: 4=read, 2=write, 1=execute. chmod 755 = rwxr-xr-x. Hiểu bit SUID(4), SGID(2), Sticky(1).",
      "kw": ["chmod", "permissions", "symbolic numeric", "4=r 2=w 1=x", "SUID SGID sticky", "755 644"]},

146: {"vi": "SUID (Set User ID) bit trên executable: process chạy với quyền owner của file, không phải user chạy. Ví dụ: /usr/bin/passwd có SUID root để đọc/ghi /etc/shadow.",
      "kw": ["SUID", "Set User ID", "4xxx", "s in owner execute", "/usr/bin/passwd", "privilege"]},

147: {"vi": "Sticky bit trên thư mục: chỉ owner của file (hoặc root) mới xóa được file trong thư mục đó, dù người khác có write permission. Ví dụ: /tmp có sticky bit (1777 = drwxrwxrwt).",
      "kw": ["sticky bit", "1777", "t in others execute", "/tmp", "delete protection", "shared directory"]},

148: {"vi": "ACL (Access Control List) cung cấp quyền truy cập chi tiết hơn chmod. 'setfacl -m u:username:rwx file' thêm ACL. 'getfacl file' xem ACL. Mount với 'acl' option.",
      "kw": ["ACL", "setfacl -m u:", "getfacl", "fine-grained permissions", "acl mount option"]},

149: {"vi": "umask xác định quyền MẶC ĐỊNH khi tạo file/thư mục mới. umask 022: file mới = 644 (666-022), thư mục mới = 755 (777-022). 'umask' xem giá trị hiện tại, 'umask 027' đặt.",
      "kw": ["umask", "default permissions", "022", "file 644 directory 755", "permission mask"]},

150: {"vi": "File attributes (chattr/lsattr): '+i' immutable (không xóa/sửa được, kể cả root), '+a' append-only (chỉ thêm vào, không sửa/xóa). chattr +i quan trọng cho bảo mật file hệ thống.",
      "kw": ["chattr", "lsattr", "+i immutable", "+a append-only", "file attributes", "security"]},

151: {"vi": "Mandatory Access Control (MAC): SELinux (Red Hat) và AppArmor (Ubuntu/Debian) kiểm soát truy cập bổ sung ngoài DAC. SELinux: enforcing/permissive/disabled. 'getenforce' xem mode.",
      "kw": ["SELinux", "AppArmor", "MAC", "enforcing permissive disabled", "getenforce setenforce"]},

152: {"vi": "Tìm file SUID: 'find / -perm -4000 -type f 2>/dev/null'. Tìm file SGID: 'find / -perm -2000 -type f'. Kiểm tra file world-writable: 'find / -perm -o+w'. Quan trọng cho security audit.",
      "kw": ["find -perm -4000 SUID", "find -perm -2000 SGID", "-perm", "security audit", "world-writable"]},

153: {"vi": "Các lệnh network: ifconfig (cũ, dùng ip thay), iwconfig (wireless), ethtool (NIC info/settings), ip link (network interfaces), ip addr (IP addresses), bridge (bridges).",
      "kw": ["ifconfig", "ip", "iwconfig", "ethtool", "network tools", "deprecated vs modern"]},

154: {"vi": "Wireless: iwconfig eth0 essid 'MyWifi' key s:password. iw là tool hiện đại hơn. wpa_supplicant xử lý WPA/WPA2. nmcli device wifi connect 'SSID' password 'pass' dùng NetworkManager.",
      "kw": ["iwconfig", "iw", "wpa_supplicant", "wireless", "ESSID", "WPA WPA2"]},

155: {"vi": "DHCP server: isc-dhcp-server (Debian/Ubuntu), dhcpd (Red Hat). Cấu hình /etc/dhcp/dhcpd.conf: subnet, range, option routers (gateway), option domain-name-servers (DNS).",
      "kw": ["dhcpd", "isc-dhcp-server", "/etc/dhcp/dhcpd.conf", "subnet range", "DHCP server"]},

156: {"vi": "DNS server BIND: named daemon, cấu hình /etc/named.conf hoặc /etc/bind/named.conf. Zone files trong /var/named/ hoặc /etc/bind/. named-checkconf kiểm tra cú pháp.",
      "kw": ["BIND", "named", "/etc/named.conf", "zone files", "/var/named/", "DNS server"]},

157: {"vi": "NFS (Network File System): mount NFS share 'mount -t nfs server:/export /mnt'. Cấu hình server: /etc/exports. exportfs -a áp dụng, showmount -e server xem exports.",
      "kw": ["NFS", "mount -t nfs", "/etc/exports", "exportfs", "showmount", "network filesystem"]},

158: {"vi": "Samba cho phép chia sẻ file giữa Linux và Windows (SMB/CIFS). Cấu hình /etc/samba/smb.conf. smbd xử lý file sharing, nmbd xử lý name resolution. 'smbclient -L host' liệt kê shares.",
      "kw": ["Samba", "SMB CIFS", "/etc/samba/smb.conf", "smbd nmbd", "smbclient", "Windows sharing"]},

159: {"vi": "OpenLDAP: slapd là LDAP server daemon. ldapsearch tìm kiếm, ldapadd thêm entries, ldapmodify sửa. /etc/ldap/slapd.conf hoặc cn=config là cấu hình. LDAP dùng port 389, LDAPS port 636.",
      "kw": ["OpenLDAP", "slapd", "ldapsearch ldapadd", "port 389 636", "LDAP directory"]},

160: {"vi": "Kerberos authentication: KDC (Key Distribution Center) cấp tickets. kinit lấy ticket, klist xem tickets, kdestroy xóa tickets. /etc/krb5.conf là cấu hình client.",
      "kw": ["Kerberos", "KDC", "kinit", "klist", "kdestroy", "ticket", "/etc/krb5.conf"]},

161: {"vi": "VPN: OpenVPN (TLS-based), WireGuard (hiện đại, UDP), IPsec (strongSwan, Libreswan). SSH tunneling: 'ssh -L 8080:internal:80 jumphost' local port forwarding.",
      "kw": ["OpenVPN", "WireGuard", "IPsec", "SSH tunnel", "-L port forwarding", "VPN"]},

162: {"vi": "Backup: rsync đồng bộ file hiệu quả (-a archive, -v verbose, -z compress, --delete). tar cho archive. dump/restore cho ext fs. bacula/amanda cho enterprise backup.",
      "kw": ["rsync", "-a -v -z --delete", "backup", "tar", "dump restore", "incremental backup"]},

163: {"vi": "rsync -avz --delete /src/ user@host:/dest/ sao chép src đến dest. Dấu '/' sau src quan trọng: có '/' copy nội dung, không có '/' copy cả thư mục src vào dest.",
      "kw": ["rsync", "trailing slash", "-avz", "--delete", "sync", "remote backup"]},

164: {"vi": "LVM snapshot: 'lvcreate -L 1G -s -n snap /dev/vg/lv' tạo snapshot. Snapshot dùng copy-on-write. Hữu ích để backup nhất quán mà không cần unmount. lvremove để xóa snapshot.",
      "kw": ["LVM snapshot", "lvcreate -s", "copy-on-write", "snapshot backup", "lvremove"]},

165: {"vi": "RAID (Redundant Array of Independent Disks): RAID 0 (stripe, không redundancy), RAID 1 (mirror), RAID 5 (stripe+parity, 1 disk fault tolerance), RAID 6 (2 disk fault tolerance), RAID 10.",
      "kw": ["RAID 0 1 5 6 10", "mdadm", "strip mirror parity", "fault tolerance", "software RAID"]},

166: {"vi": "mdadm quản lý software RAID. 'mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc'. /proc/mdstat xem status. 'mdadm --detail /dev/md0' thông tin chi tiết.",
      "kw": ["mdadm", "--create", "--level", "/proc/mdstat", "software RAID", "--detail"]},

167: {"vi": "crontab format: * * * * * command. Mỗi * là: phút(0-59) giờ(0-23) ngày(1-31) tháng(1-12) thứ(0-7). Đặc biệt: @reboot (khi boot), @daily, @weekly, @monthly.",
      "kw": ["crontab", "* * * * *", "minute hour day month weekday", "@reboot @daily @weekly"]},

168: {"vi": "at + thời gian: 'echo \"command\" | at now + 2 hours', 'at 14:30 tomorrow'. Batch mode: 'batch' chạy khi load average thấp. /var/spool/at lưu jobs. /etc/at.allow và /etc/at.deny kiểm soát truy cập.",
      "kw": ["at", "now + 2 hours", "at 14:30", "batch", "/var/spool/at", "at.allow at.deny"]},

169: {"vi": "Bash arrays: arr=(a b c), truy cập ${arr[0]}, tất cả ${arr[@]}, độ dài ${#arr[@]}. Associative arrays (bash 4+): declare -A dict; dict[key]=value. Duyệt: for elem in \"${arr[@]}\".",
      "kw": ["bash array", "arr=()", "${arr[0]}", "${arr[@]}", "associative array", "declare -A"]},

170: {"vi": "Shell script debugging: 'bash -x script.sh' trace execution, 'bash -n script.sh' kiểm tra syntax, 'set -e' thoát khi có lỗi, 'set -u' lỗi nếu dùng biến chưa định nghĩa.",
      "kw": ["bash -x trace", "bash -n syntax check", "set -e", "set -u", "shell debugging"]},

171: {"vi": "Heredoc trong bash: cat << EOF ... EOF. Cho phép nhập nhiều dòng text. Dùng trong scripts để tạo config file hoặc truyền input cho lệnh. '<<-EOF' bỏ tab thụt đầu dòng.",
      "kw": ["heredoc", "<< EOF", "multi-line input", "bash heredoc", "cat << EOF"]},

172: {"vi": "String manipulation trong bash: ${#var} độ dài, ${var:0:5} substring, ${var//old/new} replace all, ${var#prefix} xóa prefix ngắn nhất, ${var%suffix} xóa suffix ngắn nhất.",
      "kw": ["${#var}", "${var:offset:length}", "${var//old/new}", "${var#}", "${var%}", "string manipulation"]},

173: {"vi": "Process substitution trong bash: <(command) thay thế output của command bằng file descriptor. 'diff <(command1) <(command2)' so sánh output. '>(command)' ngược lại.",
      "kw": ["process substitution", "<(command)", ">(command)", "diff comparison", "bash advanced"]},

174: {"vi": "tee lệnh đọc stdin và ghi ra cả stdout lẫn file. 'command | tee output.txt' vừa hiển thị vừa lưu file. '-a' append vào file. Hữu ích khi cần vừa xem vừa lưu log.",
      "kw": ["tee", "stdout and file", "-a append", "pipe tee", "log and display"]},

175: {"vi": "xargs chuyển stdin thành arguments cho lệnh khác. 'find . -name \"*.log\" | xargs rm' xóa tất cả file .log. '-I {}' đặt placeholder. '-P N' chạy N lệnh song song.",
      "kw": ["xargs", "stdin to arguments", "-I {}", "-P parallel", "find | xargs", "bulk operations"]},

176: {"vi": "tr dịch hoặc xóa ký tự. 'tr a-z A-Z' chuyển thành chữ hoa. 'tr -d \"\\n\"' xóa newlines. 'tr -s \" \"' gộp nhiều dấu cách thành một. wc đếm dòng(-l), từ(-w), ký tự(-c).",
      "kw": ["tr", "translate characters", "tr -d delete", "tr -s squeeze", "wc -l -w -c"]},

177: {"vi": "split chia file lớn thành nhiều phần nhỏ. '-l N' chia theo số dòng, '-b Nk' chia theo kích thước (kB). join kết hợp dòng từ hai file dựa trên field chung. paste ghép file theo cột.",
      "kw": ["split -l -b", "join", "paste", "file splitting", "file joining"]},

178: {"vi": "sort sắp xếp. '-n' numeric, '-r' reverse, '-k2' sort theo cột 2, '-t:' dùng ':' làm separator, '-u' unique. uniq -c đếm số lần xuất hiện. Thường dùng: sort | uniq -c | sort -rn.",
      "kw": ["sort -n -r -k -t", "uniq -c", "sort | uniq -c | sort -rn", "frequency count"]},

179: {"vi": "printf format: '%s' string, '%d' integer, '%f' float, '%05d' zero-padded. In ra màn hình giống C printf. echo -e để xử lý escape sequences (\\n, \\t). echo -n không in newline.",
      "kw": ["printf", "%s %d %f", "echo -e", "echo -n", "formatting output"]},

180: {"vi": "Toán tử số học bash: $((expr)). Ví dụ: $((2+3)), $((i++)), $((2**8)). let 'i+=1' tương đương. expr là lệnh ngoài (cũ hơn). bc là calculator cho số thực: 'echo \"3.14*2\" | bc'.",
      "kw": ["$((expr))", "arithmetic", "let", "expr", "bc calculator", "bash math"]},

181: {"vi": "Kiểm tra file trong bash: '-f' là file thường, '-d' thư mục, '-e' tồn tại, '-r' readable, '-w' writable, '-x' executable, '-s' kích thước > 0, '-L' symbolic link, '-z' chuỗi rỗng.",
      "kw": ["-f file", "-d directory", "-e exists", "-r -w -x", "-s non-empty", "-L symlink", "bash test"]},

182: {"vi": "case statement bash: 'case $var in pattern1) commands;; pattern2) commands;; *) default;; esac'. Hữu ích để xử lý nhiều lựa chọn. Hỗ trợ glob pattern (*,?,[ ]).",
      "kw": ["case esac", "pattern matching", ";;", "bash case statement", "multiple conditions"]},

183: {"vi": "Positional parameters: $0=tên script, $1-$9=tham số, $#=số tham số, $@=tất cả tham số (mỗi cái là 1 string), $*=tất cả dưới dạng 1 string. shift dịch chuyển tham số.",
      "kw": ["$0 $1 $#", "$@ $*", "positional parameters", "shift", "script arguments"]},

184: {"vi": "read lệnh trong bash để nhận input từ user hoặc file. 'read -p \"Enter:\" var' với prompt. 'read -s' ẩn input (password). 'while IFS= read -r line; do ... done < file' đọc từng dòng file.",
      "kw": ["read -p prompt", "read -s silent", "read -r raw", "while read line", "user input"]},

185: {"vi": "Trap signals trong bash: 'trap \"cleanup\" EXIT INT TERM' chạy function cleanup khi script thoát hoặc nhận Ctrl+C. Quan trọng để cleanup temp files. 'trap - SIGINT' reset trap.",
      "kw": ["trap", "EXIT INT TERM", "signal handling", "cleanup", "bash trap"]},

186: {"vi": "Subshell: lệnh trong () chạy trong subshell (không ảnh hưởng shell cha). Command substitution $() hoặc `backticks` chạy lệnh và trả về output. {} group commands trong shell hiện tại.",
      "kw": ["subshell ()", "command substitution $()", "backticks", "{} command group", "parent shell"]},

187: {"vi": "Điều kiện so sánh chuỗi: [[ $a == $b ]], [[ $a != $b ]], [[ $a < $b ]], [[ -z $a ]] chuỗi rỗng, [[ -n $a ]] chuỗi không rỗng. Dùng [[ ]] thay [ ] cho chuỗi để an toàn hơn.",
      "kw": ["[[ ]] double brackets", "string comparison", "-z empty string", "-n non-empty", "== != < >"]},

188: {"vi": "Functions với local variables: 'local varname=value' trong function để tránh ảnh hưởng global. 'return N' trả về exit code (0=success, 1-255=error). Giá trị return khác dùng echo.",
      "kw": ["local variable", "return exit code", "function scope", "echo return value", "bash function"]},

189: {"vi": "Disk quota: quotacheck tạo quota database, edquota sửa quota, repquota báo cáo, quota xem quota của user. /etc/fstab cần 'usrquota' và/hoặc 'grpquota' option.",
      "kw": ["quota", "quotacheck", "edquota", "repquota", "usrquota grpquota", "/etc/fstab options"]},

190: {"vi": "File locking: flock (advisory lock), lockfile. 'flock -x lockfile -c command' chạy command với exclusive lock. Quan trọng trong scripts để tránh race condition khi chạy đồng thời.",
      "kw": ["flock", "file locking", "advisory lock", "race condition", "exclusive lock"]},

191: {"vi": "Systemd service management: systemctl start/stop/restart/reload/enable/disable/status. 'systemctl daemon-reload' sau khi sửa unit file. 'systemctl list-units --failed' xem service lỗi.",
      "kw": ["systemctl start stop restart enable disable", "daemon-reload", "list-units --failed", "service management"]},

192: {"vi": "Systemd unit files ở /etc/systemd/system/ (custom) và /lib/systemd/system/ (packages). Sections: [Unit] (description, After, Requires), [Service] (Type, ExecStart), [Install] (WantedBy).",
      "kw": ["unit file", "/etc/systemd/system/", "[Unit] [Service] [Install]", "ExecStart", "WantedBy"]},

193: {"vi": "systemd targets thay thế SysV runlevels: graphical.target (runlevel 5), multi-user.target (runlevel 3), rescue.target (runlevel 1), emergency.target. 'systemctl get-default' xem default target.",
      "kw": ["systemd targets", "graphical.target", "multi-user.target", "rescue.target", "get-default set-default"]},

194: {"vi": "journald config: /etc/systemd/journald.conf. Storage=persistent để lưu log vào disk (/var/log/journal/). 'journalctl --vacuum-size=100M' để dọn journal. Log mặc định trong RAM (/run/log/journal/).",
      "kw": ["journald", "/etc/systemd/journald.conf", "Storage=persistent", "/var/log/journal/", "vacuum"]},

195: {"vi": "Systemd socket activation: service chỉ khởi động khi có kết nối đến socket. .socket unit file định nghĩa socket, .service tương ứng xử lý. Hiệu quả hơn cho service ít dùng.",
      "kw": ["socket activation", ".socket unit", "on-demand", "systemd socket", "efficiency"]},

196: {"vi": "Kernel parameters runtime: sysctl -a liệt kê tất cả, 'sysctl -w net.ipv4.ip_forward=1' bật IP forwarding tạm thời. /etc/sysctl.conf hoặc /etc/sysctl.d/*.conf cho persistent.",
      "kw": ["sysctl", "sysctl -w", "/etc/sysctl.conf", "kernel parameters", "ip_forward"]},

197: {"vi": "strace theo dõi system calls của process. 'strace -p PID' attach vào process đang chạy, 'strace command' chạy và trace. lsof liệt kê open files/sockets. ltrace trace library calls.",
      "kw": ["strace", "system calls", "strace -p", "lsof", "ltrace", "debugging tools"]},

198: {"vi": "lsof (list open files): 'lsof -i :80' process dùng port 80, 'lsof -u user' files của user, 'lsof /dev/sda1' process dùng filesystem. Mọi thứ trong Linux là file, lsof rất mạnh.",
      "kw": ["lsof", "lsof -i port", "lsof -u user", "open files", "open sockets", "everything is a file"]},

199: {"vi": "top interactive commands: 'k' kill process, 'r' renice, 'M' sort by memory, 'P' sort by CPU, 'q' quit, '1' xem từng CPU core, 'f' chọn fields. htop là phiên bản cải tiến.",
      "kw": ["top", "k kill", "r renice", "M memory P CPU", "htop", "interactive process viewer"]},

200: {"vi": "vmstat (virtual memory statistics): 'vmstat 1 5' in 5 lần cách 1 giây. Cột quan trọng: r (run queue), b (blocked), swpd (swap), si/so (swap in/out), wa (IO wait).",
      "kw": ["vmstat", "run queue", "blocked", "swap", "si so", "IO wait", "memory statistics"]},

201: {"vi": "iostat theo dõi I/O statistics cho disk và CPU. 'iostat -x 1' chi tiết mỗi giây. Cột quan trọng: tps, kB/s read/write, %util (disk utilization). Phần của sysstat package.",
      "kw": ["iostat", "I/O statistics", "disk utilization", "%util", "sysstat", "tps kB/s"]},

202: {"vi": "sar (System Activity Reporter) thu thập và báo cáo system activity. 'sar -u 1 5' CPU usage, 'sar -r' memory, 'sar -b' I/O. /etc/sysstat/sysstat hoặc cron kích hoạt thu thập.",
      "kw": ["sar", "System Activity Reporter", "sar -u CPU", "sar -r memory", "sysstat", "historical data"]},

203: {"vi": "Filesystem types: ext2 (không journaling), ext3 (journaling), ext4 (extents, large files), XFS (hiệu suất cao), Btrfs (snapshot, RAID, copy-on-write), vfat (Windows compatibility).",
      "kw": ["ext2 ext3 ext4", "XFS", "Btrfs", "vfat", "journaling", "filesystem comparison"]},

204: {"vi": "cryptsetup và LUKS mã hóa disk. 'cryptsetup luksFormat /dev/sdb' định dạng, 'cryptsetup luksOpen /dev/sdb encrypted' mở, 'mkfs.ext4 /dev/mapper/encrypted' tạo fs trong container.",
      "kw": ["cryptsetup", "LUKS", "luksFormat", "luksOpen", "disk encryption", "/dev/mapper/"]},

205: {"vi": "chroot tạo môi trường root ảo (isolated environment). Dùng để repair hệ thống bị hỏng hoặc build phần mềm. 'chroot /mnt/recovery /bin/bash' sau khi mount recovery filesystem.",
      "kw": ["chroot", "isolated environment", "jail", "system repair", "mount + chroot"]},

206: {"vi": "Các lệnh text viewer: cat (in toàn bộ), less (pager, /search, q quit), more (pager đơn giản), head -n 20 (20 dòng đầu), tail -n 20 (20 dòng cuối), tail -f (follow real-time).",
      "kw": ["cat less more", "head -n", "tail -n", "tail -f follow", "text viewer", "pager"]},

207: {"vi": "wc (word count): -l đếm dòng, -w đếm từ, -c đếm bytes, -m đếm characters. Thường dùng: 'command | wc -l' đếm số dòng output. sort -u | wc -l đếm unique items.",
      "kw": ["wc -l -w -c -m", "word count", "line count", "pipe wc", "counting"]},

208: {"vi": "Column filter: cut -c1-10 lấy character 1 đến 10, cut -d, -f2 lấy field 2 với delimiter phẩy. awk '{print $2}' in cột 2. Khác biệt: cut dùng fixed delimiter, awk mạnh hơn.",
      "kw": ["cut -c", "cut -d -f", "awk print", "column extraction", "field separator"]},

209: {"vi": "nmap là network scanner: 'nmap -sV host' scan service versions, '-p 80,443' chỉ scan port cụ thể, '-O' OS detection, '-A' aggressive scan. Quan trọng cho network audit.",
      "kw": ["nmap", "-sV service", "-p port", "-O OS detection", "network scanner", "port scan"]},

210: {"vi": "curl là HTTP client mạnh mẽ: 'curl -o file URL' download, '-I' chỉ headers, '-X POST -d data' POST request, '-H Header:' thêm header, '-k' bỏ qua SSL cert. wget là alternative đơn giản.",
      "kw": ["curl", "-o download", "-I headers", "-X POST", "-H header", "wget", "HTTP client"]},

211: {"vi": "Screen/tmux là terminal multiplexers: chạy nhiều session trong 1 terminal, detach/reattach session. 'screen -S name' tạo, Ctrl+A D detach, 'screen -r' reattach. tmux hiện đại hơn.",
      "kw": ["screen", "tmux", "terminal multiplexer", "detach reattach", "Ctrl+A D", "persistent session"]},

212: {"vi": "Virtualenv/containers: không trực tiếp trong LPIC-1 nhưng Docker basics hữu ích. 'docker run -it ubuntu bash', 'docker ps', 'docker images', 'systemctl start docker'. Linux containers dùng namespaces và cgroups.",
      "kw": ["container", "docker", "namespace", "cgroup", "isolation", "virtualization"]},

213: {"vi": "cgroups (control groups) giới hạn và theo dõi tài nguyên (CPU, memory, I/O) của nhóm processes. systemd dùng cgroups để quản lý services. 'systemd-cgls' xem cgroup hierarchy.",
      "kw": ["cgroups", "control groups", "resource limits", "systemd-cgls", "CPU memory IO"]},

214: {"vi": "Kernel modules trong /lib/modules/$(uname -r)/. depmod tạo dependency map, modprobe dùng map này. /etc/modules chứa modules tự load khi boot. modinfo xem thông tin module.",
      "kw": ["/lib/modules/", "depmod", "modprobe", "/etc/modules", "module auto-load"]},

215: {"vi": "Bootloader GRUB2: /etc/default/grub cấu hình (GRUB_TIMEOUT, GRUB_DEFAULT, GRUB_CMDLINE_LINUX). Sau khi sửa chạy 'update-grub' hoặc 'grub2-mkconfig -o /boot/grub2/grub.cfg'.",
      "kw": ["GRUB_TIMEOUT", "GRUB_CMDLINE_LINUX", "update-grub", "grub2-mkconfig", "/etc/default/grub"]},

216: {"vi": "systemd-resolve hoặc resolvectl quản lý DNS resolution trong systemd. /etc/systemd/resolved.conf cấu hình. /etc/resolv.conf là symlink đến /run/systemd/resolve/stub-resolv.conf.",
      "kw": ["systemd-resolved", "resolvectl", "/etc/systemd/resolved.conf", "/etc/resolv.conf symlink"]},

217: {"vi": "pam_tally2 (hoặc pam_faillock trên RHEL8+) lock account sau N lần login thất bại. Cấu hình trong /etc/pam.d/system-auth. 'pam_tally2 --user username --reset' để unlock.",
      "kw": ["pam_tally2", "pam_faillock", "account lockout", "failed attempts", "pam_tally2 --reset"]},

218: {"vi": "visudo phải dùng để sửa /etc/sudoers (kiểm tra syntax trước khi save). Format: 'username ALL=(ALL) ALL' hoặc 'username ALL=(ALL) NOPASSWD: /path/to/command'.",
      "kw": ["visudo", "/etc/sudoers", "NOPASSWD", "sudo rules", "ALL=(ALL) ALL"]},

219: {"vi": "Filesystem encryption alternatives: eCryptfs (per-directory encryption, dùng cho ~), dm-crypt/LUKS (full disk/partition encryption), fscrypt (native ext4/F2FS). Ubuntu home dùng eCryptfs.",
      "kw": ["eCryptfs", "dm-crypt LUKS", "fscrypt", "home encryption", "filesystem encryption"]},

220: {"vi": "SSH port forwarding: -L local (local:remoteHost:remotePort), -R remote forwarding, -D dynamic (SOCKS proxy). 'ssh -L 8080:internal:80 jump' map localhost:8080 đến internal:80 qua jump host.",
      "kw": ["SSH -L local forward", "-R remote forward", "-D dynamic SOCKS", "tunnel", "port forwarding"]},

221: {"vi": "TCP wrappers (/etc/hosts.allow và /etc/hosts.deny): kiểm soát truy cập dịch vụ. hosts.allow được check trước. Format: 'service: IP hoặc network'. ALL: EXCEPT để loại trừ.",
      "kw": ["TCP wrappers", "/etc/hosts.allow", "/etc/hosts.deny", "allow deny order", "access control"]},

222: {"vi": "fail2ban tự động block IP sau N lần thử đăng nhập thất bại. Đọc log files, dùng iptables hoặc firewalld để block. /etc/fail2ban/jail.conf cấu hình. 'fail2ban-client status' xem trạng thái.",
      "kw": ["fail2ban", "brute force protection", "jail.conf", "ban IP", "fail2ban-client status"]},

223: {"vi": "xinetd/inetd là super-server: lắng nghe nhiều port, khởi động service tương ứng khi có kết nối. Tiết kiệm RAM vì service không luôn chạy. /etc/xinetd.d/ hoặc /etc/inetd.conf cấu hình.",
      "kw": ["xinetd", "inetd", "super-server", "on-demand service", "/etc/xinetd.d/"]},

224: {"vi": "DNSSEC xác thực DNS responses bằng chữ ký số. DNS over HTTPS (DoH) và DNS over TLS (DoT) mã hóa DNS queries. dig +dnssec để check DNSSEC. dnssec-keygen tạo DNSSEC keys.",
      "kw": ["DNSSEC", "DNS validation", "DoH DoT", "dig +dnssec", "DNS security"]},

225: {"vi": "Wireshark/tcpdump là packet analyzers. 'tcpdump -i eth0 port 80 -w capture.pcap' capture packets. 'tcpdump -r capture.pcap' đọc lại. Bộ lọc BPF: 'host X', 'port 80', 'tcp and host X'.",
      "kw": ["tcpdump", "wireshark", "packet capture", "-i interface", "-w write", "BPF filter"]},

226: {"vi": "ss thay thế netstat: 'ss -tulpn' (TCP+UDP+listening+PID+numeric), 'ss -s' summary, 'ss -o state established' chỉ kết nối ESTABLISHED. Nhanh hơn netstat vì đọc trực tiếp từ kernel.",
      "kw": ["ss", "ss -tulpn", "ss -s summary", "netstat replacement", "socket statistics"]},

227: {"vi": "ip rule và ip route cho policy routing: nhiều routing table, 'ip rule add from 192.168.1.0/24 table 100'. 'ip route show table 100'. Dùng khi cần định tuyến phức tạp theo nguồn.",
      "kw": ["ip rule", "ip route table", "policy routing", "multiple routing tables", "source-based routing"]},

228: {"vi": "bonding/teaming: kết hợp nhiều interface thành 1 virtual interface cho redundancy hoặc throughput. Mode: 0 (balance-rr), 1 (active-backup), 4 (802.3ad LACP). /etc/sysconfig/ifcfg-bondX.",
      "kw": ["bonding", "teaming", "LACP 802.3ad", "active-backup", "link aggregation", "ifcfg-bond"]},

229: {"vi": "Bridge networking: kết nối các network segments ở layer 2. 'brctl addbr br0', 'brctl addif br0 eth0'. ip link add br0 type bridge. Dùng trong virtualization (VMs kết nối qua bridge).",
      "kw": ["bridge", "brctl", "layer 2", "ip link add type bridge", "virtual machines networking"]},

230: {"vi": "VLAN (Virtual LAN): phân đoạn mạng logic tại layer 2. 'ip link add link eth0 name eth0.100 type vlan id 100' tạo VLAN 100 trên eth0. Cần switch hỗ trợ 802.1Q.",
      "kw": ["VLAN", "802.1Q", "ip link type vlan", "vlan id", "network segmentation", "trunk port"]},

231: {"vi": "/etc/network/interfaces (Debian) cấu hình network. Cú pháp: 'auto eth0', 'iface eth0 inet static', 'address', 'netmask', 'gateway'. 'ifup eth0' kích hoạt, 'ifdown eth0' dừng.",
      "kw": ["/etc/network/interfaces", "ifup ifdown", "inet static dhcp", "auto", "Debian networking"]},

232: {"vi": "Wireless security: WPA2-PSK dùng pre-shared key, WPA2-Enterprise dùng RADIUS server. wpa_supplicant xử lý kết nối WPA. /etc/wpa_supplicant/wpa_supplicant.conf cấu hình client.",
      "kw": ["WPA2-PSK", "WPA2-Enterprise", "wpa_supplicant", "RADIUS", "/etc/wpa_supplicant.conf"]},

233: {"vi": "IPv6 addressing: địa chỉ 128-bit, viết dạng hexadecimal. Link-local: fe80::/10. Loopback: ::1. Global unicast: 2000::/3. 'ip -6 addr' xem IPv6. 'ping6' ping IPv6. DHCPv6 hoặc SLAAC.",
      "kw": ["IPv6", "128-bit", "fe80:: link-local", "::1 loopback", "ip -6 addr", "ping6", "SLAAC"]},

234: {"vi": "Packet filtering nftables (thay thế iptables): 'nft add table ip filter', 'nft add chain ip filter input { type filter hook input priority 0; }'. nftables dùng trong kernel 3.13+.",
      "kw": ["nftables", "nft", "iptables replacement", "table chain rule", "hook", "priority"]},

235: {"vi": "NetworkManager profiles lưu trong /etc/NetworkManager/system-connections/ (text files .nmconnection). nmcli con export để xuất, nmcli con import để nhập. Hỗ trợ nhiều loại kết nối.",
      "kw": ["/etc/NetworkManager/system-connections/", ".nmconnection", "nmcli con export import", "NM profiles"]},

236: {"vi": "Hostname resolution: /etc/hosts (local override) → /etc/nsswitch.conf (thứ tự) → DNS. 'getent hosts hostname' test resolution. nss-myhostname giải quyết hostname local không cần DNS.",
      "kw": ["/etc/hosts priority", "nsswitch.conf", "getent hosts", "nss-myhostname", "resolution order"]},

237: {"vi": "Routing table: 'ip route show' hoặc 'route -n'. Default route (0.0.0.0/0) đến gateway. Static route persistent: /etc/sysconfig/network-scripts/route-eth0 (RHEL) hoặc /etc/network/interfaces (Debian).",
      "kw": ["ip route show", "route -n", "default route 0.0.0.0/0", "gateway", "static route persistent"]},

238: {"vi": "ethtool hiển thị và thay đổi cài đặt NIC: speed, duplex, autoneg. 'ethtool eth0' xem trạng thái, 'ethtool -s eth0 speed 100 duplex full' đặt speed. 'ethtool -S eth0' statistics.",
      "kw": ["ethtool", "NIC settings", "speed duplex", "autoneg", "ethtool -s", "ethtool -S stats"]},

239: {"vi": "nc (netcat) là 'Swiss army knife' của networking: tạo TCP/UDP connections, listen trên port, transfer files. 'nc -lvp 1234' listen, 'nc host 1234 < file' transfer. ncat là version mới hơn.",
      "kw": ["nc netcat", "-l listen", "-p port", "-v verbose", "file transfer", "port testing", "ncat"]},

240: {"vi": "ICMP (Internet Control Message Protocol): ping dùng ICMP echo. Type 0=echo reply, Type 8=echo request, Type 3=destination unreachable, Type 11=TTL exceeded. traceroute dùng TTL để map route.",
      "kw": ["ICMP", "ping", "type 0 8 3 11", "TTL", "traceroute", "destination unreachable"]},
}

# ─────────────────────────────────────────────────────────────────────────────

def format_explanation(expl):
    vi_text = expl.get("vi", "")
    kw = expl.get("kw", [])
    kw_str = " | ".join(kw) if kw else ""
    if kw_str:
        return f"{vi_text}\n🔑 Keywords: {kw_str}"
    return vi_text


def main():
    with open(QJS, encoding="utf-8") as f:
        content = f.read()

    # Parse QUESTIONS array
    m = re.search(r'(const QUESTIONS = )(\[.*\]);', content, re.DOTALL)
    if not m:
        print("ERROR: Could not find QUESTIONS array in questions.js")
        return

    prefix = content[:m.start(2)]
    suffix = content[m.end(2):]

    questions = json.loads(m.group(2))
    print(f"Loaded {len(questions)} questions from questions.js")

    updated = 0
    missing = []
    for q in questions:
        qid = q["id"]
        if qid in EXPL:
            expl = EXPL[qid]
            vi_full = format_explanation(expl)
            q["explanation"]["vi"] = vi_full
            q["explanation"]["en"] = expl.get("vi", "")  # keep same for now
            updated += 1
        else:
            missing.append(qid)

    if missing:
        print(f"WARNING: No explanation for question IDs: {missing}")

    questions_json = json.dumps(questions, ensure_ascii=False, indent=2)
    new_content = prefix + questions_json + suffix

    with open(QJS, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"[OK] Updated {updated}/{len(questions)} questions with explanations in questions.js")


if __name__ == "__main__":
    main()
