// JNCIA JN0-106 Question Bank - Organized by Topic
const TOPICS = [
  {
    id: 1,
    name: { en: "Networking Fundamentals", vi: "Nền tảng Mạng" },
    icon: "🌐",
    description: { en: "Layer 2 switching, IP addressing, subnetting, TCP/UDP, IPv6 basics", vi: "Chuyển mạch Lớp 2, địa chỉ IP, chia mạng con, TCP/UDP, IPv6 cơ bản" },
    color: "#6C63FF",
    file: "juniper_JNCIA_jn0-106_1_20.pdf"
  },
  {
    id: 2,
    name: { en: "Junos OS Architecture & CLI", vi: "Kiến trúc Junos OS & CLI" },
    icon: "🏗️",
    description: { en: "Routing Engine, PFE, Junos architecture, CLI modes, interface naming", vi: "Routing Engine, PFE, Kiến trúc Junos, các chế độ CLI, đặt tên cổng" },
    color: "#00C9A7",
    file: "juniper_JNCIA_jn0-106_20_40.pdf"
  },
  {
    id: 3,
    name: { en: "Configuration Management", vi: "Quản lý Cấu hình" },
    icon: "⚙️",
    description: { en: "Commit, rollback, rescue config, load override, groups, maintenance", vi: "Commit, khôi phục cấu hình, cấu hình cứu hộ, nhóm, bảo trì" },
    color: "#FF6B6B",
    file: "juniper_JNCIA_jn0-106_40_60.pdf"
  },
  {
    id: 4,
    name: { en: "Routing Fundamentals", vi: "Nền tảng Định tuyến" },
    icon: "🔀",
    description: { en: "Routing tables, forwarding tables, static routes, route preference, longest match", vi: "Bảng định tuyến, bảng chuyển tiếp, định tuyến tĩnh, độ ưu tiên định tuyến" },
    color: "#FFA62B",
    file: "juniper_JNCIA_jn0-106_60_80.pdf"
  },
  {
    id: 5,
    name: { en: "Firewall Filters & Policies", vi: "Bộ lọc Tường lửa & Chính sách" },
    icon: "🛡️",
    description: { en: "Firewall filters, routing policies, prefix lists, CoS, security", vi: "Bộ lọc tường lửa, chính sách định tuyến, danh sách prefix, CoS, bảo mật" },
    color: "#845EC2",
    file: "juniper_JNCIA_jn0-106_80_100.pdf"
  },
  {
    id: 6,
    name: { en: "Advanced Operations", vi: "Vận hành Nâng cao" },
    icon: "🚀",
    description: { en: "Advanced CLI, subnetting, Routing Engine, secure access, commit confirmed", vi: "CLI nâng cao, định tuyến, Routing Engine, truy cập an toàn" },
    color: "#D65DB1",
    file: "juniper_JNCIA_jn0-106_100_107.pdf"
  }
];

const QUESTIONS = [
  // ========== TOPIC 1: Networking Fundamentals (Q1-Q20) ==========
  {
    id: 1,
    topicId: 1,
    question: "Which two statements are correct regarding Layer 2 network switches? (Choose two.)",
    options: [
        "Switches are susceptible to traffic loops.",
        "Switches flood broadcast traffic.",
        "Switches do not learn MAC addresses.",
        "Switches create a single collision domain."
      ],
    correct: [0, 1],
    multiSelect: true,
    explanation: {
      en: "Layer 2 switches are susceptible to traffic loops, which is why protocols like Spanning Tree Protocol (STP) are required to prevent them. They also flood broadcast traffic (like ARP requests) to all ports in the same VLAN. Switches DO learn MAC addresses (that's their core function), and each port creates a separate collision domain, not a single one.",
      vi: "Switch Lớp 2 rất dễ bị vòng lặp lưu lượng (loop), do đó các giao thức như STP (Spanning Tree Protocol) là bắt buộc để ngăn chặn. Chúng cũng thực hiện hành động flood (làm tràn) lưu lượng broadcast ra tất cả các cổng trong cùng một VLAN. Các phát biểu còn lại sai vì: Switch CÓ học địa chỉ MAC (đó là chức năng cốt lõi), và mỗi cổng của switch tạo ra một miền đụng độ (collision domain) riêng biệt chứ không phải là một miền duy nhất."
    }
  },
  {
    id: 2,
    topicId: 1,
    question: "How many usable hosts are in a /24 subnet mask?",
    options: ["250", "254", "255", "256"],
    correct: [1],
    multiSelect: false,
    explanation: {
      en: "A /24 subnet mask leaves 8 bits for the host portion (32 - 24 = 8). 2^8 = 256 total IP addresses. You must subtract 2 reserved addresses (the network address itself and the broadcast address), resulting in 254 usable host addresses.",
      vi: "Subnet mask /24 dành 24 bit cho phần mạng (Network) và để lại 8 bit cho phần host (32 - 24 = 8). Số lượng địa chỉ tổng cộng là 2^8 = 256. Tuy nhiên, bạn phải trừ đi 2 địa chỉ dành riêng: địa chỉ mạng (network address - tất cả bit host bằng 0) và địa chỉ quảng bá (broadcast address - tất cả bit host bằng 1), kết quả là 254 địa chỉ host có thể sử dụng."
    }
  },
  {
    id: 3,
    topicId: 1,
    question: "What are two fiber-optic connector types? (Choose two.)",
    options: ["LC", "RJ-45", "SC", "BNC"],
    correct: [0, 2],
    multiSelect: true,
    explanation: {
      en: "LC (Lucent Connector) and SC (Subscriber Connector) are standard fiber-optic connectors widely used in networking. RJ-45 is the standard connector for copper twisted-pair Ethernet cables, and BNC is typically used for coaxial cables.",
      vi: "LC (Lucent Connector) và SC (Subscriber Connector) là các loại đầu nối cáp quang tiêu chuẩn thường được sử dụng trong mạng. RJ-45 là đầu nối tiêu chuẩn cho cáp đồng xoắn đôi (Ethernet copper), còn BNC là đầu nối chuyên dụng cho cáp đồng trục (coaxial)."
    }
  },
  {
    id: 4,
    topicId: 1,
    question: "Which two characteristics apply to TCP? (Choose two.)",
    options: [
        "TCP guarantees fixed latency for application flows.",
        "TCP broadcasts datagrams by default on Ethernet.",
        "TCP uses a three-way handshake to establish a connection.",
        "TCP provides reliable, ordered delivery using sequence numbers."
      ],
    correct: [2, 3],
    multiSelect: true,
    explanation: {
      en: "TCP is a connection-oriented protocol that uses a three-way handshake (SYN, SYN-ACK, ACK) to establish a connection. It provides reliable, ordered delivery of segments using sequence and acknowledgment numbers. TCP does not guarantee fixed latency, nor does it broadcast datagrams.",
      vi: "TCP là giao thức hướng kết nối, sử dụng quá trình bắt tay 3 bước (SYN, SYN-ACK, ACK) để thiết lập kết nối trước khi truyền dữ liệu. Nó đảm bảo việc truyền tải đáng tin cậy và đúng thứ tự thông qua việc sử dụng các Sequence Number (số thứ tự) và ACK. TCP không đảm bảo độ trễ cố định và cũng không sử dụng cơ chế broadcast (quảng bá) các datagram."
    }
  },
  {
    id: 5,
    topicId: 1,
    image: "images/q5.png",
    question: "User A → R1 → R2 → User B\n\nWhich statement is correct when Router R1 receives a packet from User A destined for User B?",
    options: [
        "Router R1 replaces the destination IP address in the packet with the IP address of Router R2.",
        "Router R1 leaves the packet unchanged.",
        "Router R1 replaces the destination MAC address in the packet with the MAC address of Router R2.",
        "Router R1 replaces the destination MAC address in the packet with the MAC address of User B."
      ],
    correct: [2],
    multiSelect: false,
    explanation: {
      en: "When a router forwards a packet, it keeps the source and destination IP addresses intact (unless performing NAT). However, it strips the old Layer 2 frame and creates a new one, replacing the destination MAC address with the MAC address of the next-hop router (Router R2 in this scenario).",
      vi: "Khi một router định tuyến gói tin, nó luôn giữ nguyên địa chỉ IP nguồn và IP đích (trừ khi có NAT). Tuy nhiên, ở Lớp 2 (Data Link), router sẽ gỡ bỏ frame cũ và đóng gói lại vào frame mới. Địa chỉ MAC đích mới sẽ là địa chỉ MAC của trạm kế tiếp (next-hop), trong trường hợp này là Router R2, chứ không phải MAC của User B."
    }
  },
  {
    id: 6,
    topicId: 1,
    question: "You must configure a new logical interface using the fourth usable host address from the 172.16.40.128/29 subnet.\n\nWhich IP address is correct?",
    options: [
      "172.16.40.135",
      "172.16.40.132",
      "172.16.40.130",
      "172.16.40.131"
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "Network: 172.16.40.128/29 → Usable range: .129 to .134. The 4th usable host = 172.16.40.132.", vi: "Mạng: 172.16.40.128/29 → Dải IP khả dụng: .129 đến .134. Host khả dụng thứ 4 = 172.16.40.132." }
  },
  {
    id: 7,
    topicId: 1,
    question: "You need to subnet the broadcast domains but need to support 50 hosts.\n\nWhich subnet mask would satisfy this requirement?",
    options: ["/26", "/27", "/28", "/29"],
    correct: [0],
    multiSelect: false,
    explanation: { en: "/26 provides 2^6 - 2 = 62 usable hosts, which is sufficient for 50 hosts. /27 only provides 30, /28 provides 14, and /29 provides 6.", vi: "/26 cung cấp 2^6 - 2 = 62 host khả dụng, đủ cho 50 host. /27 chỉ cung cấp 30, /28 cung cấp 14, và /29 cung cấp 6." }
  },
  {
    id: 8,
    topicId: 1,
    question: "Which IPv4 address and subnet mask combination represents a point-to-point link with only two usable host addresses?",
    options: [
      "192.168.1.0/30",
      "192.168.1.0/29",
      "192.168.1.0/24",
      "192.168.1.0/28"
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "A /30 subnet has 2^2 = 4 addresses, minus 2 (network and broadcast) = 2 usable hosts. This is ideal for point-to-point links.", vi: "Subnet /30 có 2^2 = 4 địa chỉ, trừ đi 2 (network và broadcast) = 2 host khả dụng. Điều này lý tưởng cho các liên kết point-to-point." }
  },
  {
    id: 9,
    topicId: 1,
    question: "What is the maximum number of IP addresses that would be assigned to hosts in the 192.168.1.0/24 network?",
    options: ["24", "32", "128", "254"],
    correct: [3],
    multiSelect: false,
    explanation: { en: "A /24 network has 256 total addresses. Subtract the network address and broadcast address = 254 usable host addresses.", vi: "Mạng /24 có tổng cộng 256 địa chỉ. Trừ đi địa chỉ network và địa chỉ broadcast = 254 địa chỉ host khả dụng." }
  },
  {
    id: 10,
    topicId: 1,
    question: "What are two characteristics of IPv6 addressing? (Choose two.)",
    options: [
      "The IPv6 address is represented by a 128-bit address.",
      "The IPv6 header automatically includes a checksum.",
      "IPv6 uses ARP to discover neighboring devices.",
      "IPv6 addresses that begin with fe80 are not routable."
    ],
    correct: [0, 3],
    multiSelect: true,
    explanation: { en: "IPv6 uses 128-bit addresses (vs. IPv4's 32-bit). fe80::/10 addresses are link-local and not routable. IPv6 does NOT include a header checksum (for efficiency) and uses NDP instead of ARP.", vi: "IPv6 sử dụng địa chỉ 128-bit (so với 32-bit của IPv4). Địa chỉ fe80::/10 là link-local và không định tuyến được (not routable). IPv6 KHÔNG bao gồm header checksum (để tăng hiệu suất) và sử dụng NDP thay vì ARP." }
  },
  {
    id: 11,
    topicId: 1,
    question: "How are the Routing Engine and the Packet Forwarding Engine components connected?",
    options: [
      "They use shared memory access.",
      "They use external breakout cables.",
      "They use an MPLS connection.",
      "They use an internal Ethernet link."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "The RE and PFE in Junos devices are connected via an internal Ethernet link, which allows the RE to push forwarding table updates to the PFE.", vi: "RE và PFE trong các thiết bị Junos được kết nối qua một liên kết Ethernet nội bộ, cho phép RE đẩy các bản cập nhật forwarding table (bảng chuyển tiếp) xuống PFE." }
  },
  {
    id: 12,
    topicId: 1,
    question: "Which two statements are correct about Junos OS? (Choose two.)",
    options: [
      "Junos OS provides the ability to run unsigned third-party binaries.",
      "Junos OS provides modularization of software processes.",
      "Junos OS combines security and routing policies.",
      "Junos OS separates the control plane and the forwarding plane."
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: { en: "Junos OS key features include modular software processes (each runs independently for stability) and separation of control plane (RE) and forwarding plane (PFE).", vi: "Các tính năng chính của Junos OS bao gồm các tiến trình phần mềm mô-đun (mỗi tiến trình chạy độc lập để đảm bảo tính ổn định) và sự tách biệt giữa control plane (RE) và forwarding plane (PFE)." }
  },
  {
    id: 13,
    topicId: 1,
    question: "An administrator wants to set up a remote user authentication service. What are two supported authentication protocols? (Choose two.)",
    options: ["RADIUS", "TACACS+", "SHA", "IPsec"],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "RADIUS and TACACS+ are authentication, authorization, and accounting (AAA) protocols supported by Junos. SHA is a hashing algorithm, and IPsec is a VPN protocol.", vi: "RADIUS và TACACS+ là các giao thức xác thực, ủy quyền và kế toán (AAA) được hỗ trợ bởi Junos. SHA là một thuật toán băm (hashing), và IPsec là một giao thức VPN." }
  },
  {
    id: 14,
    topicId: 1,
    question: "Which two statements are examples of exception traffic? (Choose two.)",
    options: [
      "An IP packet with the Router Alert option set in the IP options field.",
      "SSH traffic to the local Junos OS device.",
      "An IP packet that has the IP precedence CoS bits of 111 in the ToS field.",
      "SSH traffic to a remote server on the Internet."
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "Exception traffic is traffic destined for or requiring attention from the Routing Engine. This includes packets with Router Alert options and SSH to the local device. Transit traffic (like SSH to a remote server) is handled by the PFE.", vi: "Exception traffic (lưu lượng ngoại lệ) là lưu lượng truy cập được gửi đến hoặc yêu cầu sự chú ý từ Routing Engine. Điều này bao gồm các gói tin có tùy chọn Router Alert và SSH đến thiết bị cục bộ. Transit traffic (lưu lượng chuyển tiếp, như SSH đến máy chủ từ xa) được xử lý bởi PFE." }
  },
  {
    id: 15,
    topicId: 1,
    question: "You power on a new MX Series router for the first time. You notice that no transit interfaces are passing traffic.\n\nWhich statement is correct?",
    options: [
      "All interfaces are enabled with DHCP client enabled.",
      "All interfaces are enabled and have an IP address of 10.0.0.1.",
      "The interfaces are configured as Layer 2 trunk ports.",
      "The interfaces are not configured."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "On a brand-new Junos device with factory defaults, transit interfaces are not configured. You must configure them before they can pass traffic.", vi: "Trên một thiết bị Junos hoàn toàn mới với cài đặt mặc định của nhà sản xuất (factory defaults), các cổng transit chưa được cấu hình. Bạn phải cấu hình chúng trước khi chúng có thể truyền lưu lượng." }
  },
  {
    id: 16,
    topicId: 1,
    question: "Which two characteristics describe Junos OS software? (Choose two.)",
    options: [
      "Junos OS is a monolithic code base.",
      "Junos OS supports automation features.",
      "Junos OS runs only on routers.",
      "Junos OS uses a modular architecture with independent processes."
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: { en: "Junos OS supports automation (via NETCONF, Junos PyEZ, etc.) and uses a modular architecture where each process runs independently. It is NOT monolithic and runs on routers, switches, and firewalls.", vi: "Junos OS hỗ trợ tự động hóa (thông qua NETCONF, Junos PyEZ, v.v.) và sử dụng kiến trúc mô-đun trong đó mỗi tiến trình chạy độc lập. Nó KHÔNG phải là nguyên khối (monolithic) và chạy trên router, switch và firewall." }
  },
  {
    id: 17,
    topicId: 1,
    question: "What are two characteristics of transit traffic in Junos OS? (Choose two.)",
    options: [
      "It includes routing protocol packets.",
      "It is traffic destined for the Routing Engine.",
      "It does not require control plane processing.",
      "It is forwarded by the Packet Forwarding Engine."
    ],
    correct: [2, 3],
    multiSelect: true,
    explanation: { en: "Transit traffic passes through the device without needing Routing Engine (control plane) processing. It is forwarded entirely by the PFE (data plane). Routing protocol packets are exception traffic destined for the RE.", vi: "Transit traffic đi qua thiết bị mà không cần xử lý bởi Routing Engine (control plane). Nó được chuyển tiếp hoàn toàn bởi PFE (data plane). Các gói tin giao thức định tuyến (routing protocol) là exception traffic được gửi đến RE." }
  },
  {
    id: 18,
    topicId: 1,
    question: "What are two functions of the Routing Engine? (Choose two.)",
    options: [
      "It evaluates firewall filters for transit traffic.",
      "It runs Junos OS.",
      "It processes all management traffic.",
      "It processes transit traffic."
    ],
    correct: [1, 2],
    multiSelect: true,
    explanation: { en: "The Routing Engine runs Junos OS and processes management traffic. Transit traffic is handled by the PFE, not the RE. Firewall filters for transit traffic are also evaluated by the PFE.", vi: "Routing Engine chạy hệ điều hành Junos và xử lý lưu lượng quản lý (management traffic). Transit traffic được xử lý bởi PFE, không phải RE. Các bộ lọc tường lửa (firewall filter) cho transit traffic cũng được đánh giá bởi PFE." }
  },
  {
    id: 19,
    topicId: 1,
    question: "Which interface type prefix represents a 10-Gigabit Ethernet interface?",
    options: ["ge", "xe", "et", "fe"],
    correct: [1],
    multiSelect: false,
    explanation: { en: "xe = 10-Gigabit Ethernet, ge = Gigabit Ethernet, et = 40/100-Gigabit Ethernet, fe = Fast Ethernet (100 Mbps).", vi: "xe = 10-Gigabit Ethernet, ge = Gigabit Ethernet, et = 40/100-Gigabit Ethernet, fe = Fast Ethernet (100 Mbps)." }
  },
  {
    id: 20,
    topicId: 1,
    question: "A network administrator must set up the out-of-band management interface to ensure management traffic is isolated from inet.0.\n\nWhich configuration step is required?",
    options: [
      "Configure an IP address on interface ge-0/0/0.0 and enable ethernet-switching family.",
      "Configure the lo0.0 loopback interface with a management IP.",
      "Assign an IP address to the me0.0 interface and set routing-options to instance type virtual-router.",
      "Assign an IP address to interface fxp0.0 or em0.0 and use set system management-instance."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "The fxp0 or em0 interface is the dedicated out-of-band management port. Using 'set system management-instance' creates a separate routing instance for management traffic, isolating it from inet.0.", vi: "Cổng fxp0 hoặc em0 là cổng quản lý out-of-band chuyên dụng. Sử dụng lệnh 'set system management-instance' tạo ra một routing instance riêng biệt cho lưu lượng quản lý, cô lập nó khỏi inet.0." }
  },

  // ========== TOPIC 2: Junos OS Architecture & CLI (Q21-Q40) ==========
  {
    id: 21,
    topicId: 2,
    image: "images/q21.png",
    question: "Click the Exhibit button. The MX204 has 12 built-in ports. Referring to the exhibit, to which interface does the arrow point?",
    options: ["xe-0/2/7", "xe-0/0/7", "xe-0/1/7", "xe-0/1/6"],
    correct: [2],
    multiSelect: false,
    explanation: { en: "Junos interface naming: type-FPC/PIC/Port. The arrow points to PIC 1, port 7, so xe-0/1/7.", vi: "Cách đặt tên cổng của Junos: type-FPC/PIC/Port. Mũi tên chỉ vào PIC 1, port 7, vì vậy là xe-0/1/7." }
  },
  {
    id: 22,
    topicId: 2,
    question: "Which two functions are performed by the PFE? (Choose two.)",
    options: [
      "It processes exception traffic.",
      "It forwards incoming traffic.",
      "It creates the forwarding table.",
      "It creates the routing table."
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "The PFE processes exception traffic (punting to RE if needed) and forwards incoming transit traffic. The routing table is created by the RE, and the forwarding table is derived from it.", vi: "PFE xử lý exception traffic (chuyển tiếp lên RE nếu cần) và chuyển tiếp transit traffic đi vào. Routing table (bảng định tuyến) được tạo bởi RE, và forwarding table (bảng chuyển tiếp) được xuất ra từ đó." }
  },
  {
    id: 23,
    topicId: 2,
    question: "Which two statements correctly describe how Junos OS handles control and forwarding functions? (Choose two.)",
    options: [
      "The PFE forwards packets based on forwarding tables received from the Routing Engine.",
      "Exception traffic is always dropped by the PFE without being inspected.",
      "Transit traffic is processed by the Routing Engine to ensure high-speed forwarding.",
      "The RE is responsible for maintaining routing tables and running routing protocols."
    ],
    correct: [0, 3],
    multiSelect: true,
    explanation: { en: "The PFE forwards based on tables from the RE. The RE maintains routing tables and runs routing protocols. Exception traffic is NOT dropped – it's sent to the RE. Transit traffic is NOT processed by the RE.", vi: "PFE chuyển tiếp dựa trên các bảng từ RE. RE duy trì các bảng định tuyến và chạy các giao thức định tuyến. Exception traffic KHÔNG bị loại bỏ – nó được gửi đến RE. Transit traffic KHÔNG được xử lý bởi RE." }
  },
  {
    id: 24,
    topicId: 2,
    question: "A security policy requires that a user account be created for auditing purposes. This user should only view configuration and operational data without making any changes.\n\nWhich predefined login class would satisfy this requirement?",
    options: ["operator", "unauthorized", "read-only", "super-user"],
    correct: [2],
    multiSelect: false,
    explanation: { en: "The read-only login class allows viewing configuration and operational data but cannot make changes. Operator can run some operational commands, super-user has full access.", vi: "Login class 'read-only' cho phép xem cấu hình và dữ liệu vận hành nhưng không thể thay đổi. 'Operator' có thể chạy một số lệnh vận hành, 'super-user' có quyền truy cập đầy đủ." }
  },
  {
    id: 25,
    topicId: 2,
    question: "You issue these commands in sequence:\n1. show chassis alarms\n2. show chassis fpc\n3. show chassis fpc detail\n4. show chassis errors fpc-slot 0\n\nWhat happens when you press the up arrow key twice?",
    options: [
      "The show chassis fpc command is displayed.",
      "The show chassis errors fpc-slot 0 command is displayed.",
      "The show chassis alarms command is displayed.",
      "The show chassis fpc detail command is displayed."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "Pressing up arrow once shows the last command (show chassis errors fpc-slot 0), pressing twice shows the second-to-last: show chassis fpc detail.", vi: "Nhấn phím mũi tên lên một lần sẽ hiển thị lệnh cuối cùng (show chassis errors fpc-slot 0), nhấn hai lần sẽ hiển thị lệnh kế cuối: show chassis fpc detail." }
  },
  {
    id: 26,
    topicId: 2,
    image: "images/q26.png",
    question: "Click the Exhibit button. You have configured multiple authentication methods on your Junos device, including RADIUS, TACACS+, and local user accounts. A user attempts to log in, but the RADIUS server is unavailable. Referring to the exhibit, which statement is correct?",
    options: [
      "The user is prompted to select a different authentication method.",
      "The login attempt fails immediately.",
      "Junos will continue to attempt to authenticate with RADIUS until it responds.",
      "Junos attempts the next configured authentication method."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "When a RADIUS server is unavailable, Junos moves to the next method in the authentication-order list (TACACS+ in this case, then local password).", vi: "Khi máy chủ RADIUS không khả dụng, Junos chuyển sang phương thức tiếp theo trong danh sách authentication-order (TACACS+ trong trường hợp này, sau đó là local password)." }
  },
  {
    id: 27,
    topicId: 2,
    question: "You are creating a user account that should run operational mode commands (show interfaces, ping) but NOT change or commit configuration.\n\nWhich login class should you assign?",
    options: ["maintenance", "read-only", "super-user", "operator"],
    correct: [3],
    multiSelect: false,
    explanation: { en: "The operator class allows running operational commands like show, ping, traceroute but cannot enter configuration mode. read-only can only view, super-user has full access.", vi: "Class 'operator' cho phép chạy các lệnh vận hành như show, ping, traceroute nhưng không thể vào configuration mode (chế độ cấu hình). 'read-only' chỉ có thể xem, 'super-user' có quyền truy cập đầy đủ." }
  },
  {
    id: 28,
    topicId: 2,
    question: "What information would you find using the CLI help command?",
    options: [
      "A URL for accessing the technical documentation.",
      "Message of the day.",
      "Hyperlinks for remediation actions.",
      "An explanation for specific system log error messages."
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "The 'help' command in Junos CLI provides a URL/reference to the Juniper technical documentation for the topic.", vi: "Lệnh 'help' trong Junos CLI cung cấp URL/tham chiếu đến tài liệu kỹ thuật của Juniper cho chủ đề đó." }
  },
  {
    id: 29,
    topicId: 2,
    question: "What does the Junos CLI prompt indicate when it ends with a hash symbol (#)?",
    options: [
      "The user is in operational mode.",
      "The user is in configuration mode.",
      "The user is in shell mode.",
      "The user is in recovery mode."
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "In Junos: '>' indicates operational mode, '#' indicates configuration mode. For example: user@router> (operational) vs [edit] user@router# (configuration).", vi: "Trong Junos: '>' biểu thị operational mode (chế độ vận hành), '#' biểu thị configuration mode (chế độ cấu hình). Ví dụ: user@router> (operational) so với [edit] user@router# (configuration)." }
  },
  {
    id: 30,
    topicId: 2,
    image: "images/q30.png",
    question: "Click the Exhibit button. Which command displays the output in the format shown in the exhibit?",
    options: [
      "show configuration | display inheritance",
      "show configuration | display set",
      "show configuration",
      "show configuration | display detail"
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "The '| display set' pipe option shows the configuration in flat set-command format, which is useful for copying and pasting configuration.", vi: "Tùy chọn ống dẫn (pipe) '| display set' hiển thị cấu hình ở định dạng set-command phẳng, rất hữu ích cho việc sao chép và dán cấu hình." }
  },
  {
    id: 31,
    topicId: 2,
    question: "You committed a new configuration but users report connectivity issues. You must quickly restore the previous working configuration.\n\nWhich command loads the required configuration into the candidate?",
    options: [
      "rollback 0",
      "show | compare rollback",
      "rollback 1",
      "load override"
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "rollback 0 loads the current active config (no change). rollback 1 loads the previous configuration (the one before the last commit). After rollback 1, you still need to commit.", vi: "rollback 0 tải cấu hình đang hoạt động (không thay đổi). rollback 1 tải cấu hình trước đó (cấu hình trước lần commit cuối cùng). Sau rollback 1, bạn vẫn cần phải commit." }
  },
  {
    id: 32,
    topicId: 2,
    question: "Which command would compare the candidate configuration with the active configuration before committing?",
    options: [
      "[edit] user@router# show | compare",
      "[edit] user@router# rollback 0",
      "user@router> show configuration | compare rollback 0",
      "user@router> show configuration | compare"
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "In configuration mode, 'show | compare' compares the candidate configuration with the active (committed) configuration, showing differences in diff format.", vi: "Trong configuration mode, 'show | compare' so sánh candidate configuration (cấu hình ứng viên) với active configuration (cấu hình đã commit/đang hoạt động), hiển thị các khác biệt ở định dạng diff." }
  },
  {
    id: 33,
    topicId: 2,
    question: "You successfully committed a configuration change. You realize an issue exists and must revert to the previous configuration.\n\nWhich command in configuration mode will accomplish this when committed?",
    options: [
      "show | compare",
      "save config",
      "rollback 0",
      "rollback 1"
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "rollback 1 loads the configuration that was active before the most recent commit. rollback 0 is the current active config. After rollback 1, you need to commit to activate it.", vi: "rollback 1 tải cấu hình đang hoạt động trước lần commit gần nhất. rollback 0 là cấu hình đang hoạt động hiện tại. Sau rollback 1, bạn cần phải commit để kích hoạt nó." }
  },
  {
    id: 34,
    topicId: 2,
    question: "You are using the factory default configuration on a new Juniper router. Which component must be configured before Junos OS allows you to commit?",
    options: [
      "A system hostname",
      "A root-authentication password",
      "At least one logical interface with family inet enabled",
      "A management IP address on the fxp0 interface"
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "On a factory-default Junos device, the first commit requires a root-authentication password to be set. Without it, the commit will fail.", vi: "Trên thiết bị Junos mặc định của nhà sản xuất (factory-default), lần commit đầu tiên yêu cầu phải đặt root-authentication password. Nếu không có nó, quá trình commit sẽ thất bại." }
  },
  {
    id: 35,
    topicId: 2,
    question: "You are configuring a new router and want to ensure recovery from future misconfigurations.\n\nWhat should you do after completing the initial configuration?",
    options: [
      "Update the firmware on the router.",
      "Save the configuration as rollback 0.",
      "Create a rescue configuration.",
      "Enable automatic rollback after 10 minutes."
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "Creating a rescue configuration (request system configuration rescue save) preserves a known-good config that can be restored later, even if all rollback files are overwritten.", vi: "Tạo rescue configuration (request system configuration rescue save) giúp bảo tồn một cấu hình hoạt động tốt (known-good) có thể khôi phục sau này, ngay cả khi tất cả các file rollback bị ghi đè." }
  },
  {
    id: 36,
    topicId: 2,
    question: "Your switch01 device lost network connectivity after a configuration change. You must recover the device to a known working state using the rescue configuration that was previously saved. The device is only accessible using the console. In this scenario, which command sequence will successfully restore the rescue configuration?",
    options: [
      "<img src='images/q36_a.png' style='max-width: 100%; border-radius: 4px;'>",
      "user@switch01> request system configuration rescue delete<br>user@switch01> reboot",
      "<img src='images/q36_c.png' style='max-width: 100%; border-radius: 4px;'>",
      "<img src='images/q36_d.png' style='max-width: 100%; border-radius: 4px;'>"
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "To restore a rescue configuration: enter config mode, use 'load override rescue' to load it into the candidate, then 'commit' to activate it.", vi: "Để khôi phục rescue configuration: vào config mode, sử dụng lệnh 'load override rescue' để tải nó vào candidate configuration, sau đó 'commit' để kích hoạt." }
  },
  {
    id: 37,
    topicId: 2,
    question: "You must add a large hierarchical configuration and completely replace the existing candidate configuration with a new file.\n\nWhich command would accomplish this?",
    options: [
      "load merge terminal",
      "load override terminal",
      "load factory default",
      "load set terminal"
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "'load override terminal' completely replaces the candidate configuration with new input from the terminal. 'load merge' adds to existing config without replacing.", vi: "'load override terminal' thay thế hoàn toàn candidate configuration bằng đầu vào mới từ thiết bị đầu cuối (terminal). 'load merge' thêm vào cấu hình hiện tại mà không thay thế." }
  },
  {
    id: 38,
    topicId: 2,
    question: "Which two statements are correct about logical units? (Choose two.)",
    options: [
      "A physical interface can host multiple logical units.",
      "Logical units can have multiple IP addresses.",
      "Logical units are used only for management interfaces.",
      "A physical interface can host only one logical unit."
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "Physical interfaces can have multiple logical units (e.g., ge-0/0/0.0, ge-0/0/0.1) and each logical unit can have multiple IP addresses configured.", vi: "Các cổng vật lý có thể có nhiều đơn vị logic (logical unit) (ví dụ: ge-0/0/0.0, ge-0/0/0.1) và mỗi logical unit có thể được cấu hình nhiều địa chỉ IP." }
  },
  {
    id: 39,
    topicId: 2,
    question: "All server NICs are moving to jumbo frames (4K) on 1 Gigabit interfaces. The frame size may change.\n\nWhich choice provides a flexible solution?",
    options: [
      "Create a group that adjusts MTU size on 1 gigabit interfaces and apply at the interfaces level.",
      "Apply the MTU to each interface family for each 1 gigabit interface.",
      "Set the app-engine compute-cluster Ethernet MTU size for the Junos VM.",
      "Use system internet-options path-mtu-discovery to dynamically adjust MTU."
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "Configuration groups allow you to define settings once and apply them across multiple interfaces. If the MTU needs to change, you only update it in one place.", vi: "Configuration groups (các nhóm cấu hình) cho phép bạn xác định cài đặt một lần và áp dụng chúng cho nhiều cổng. Nếu MTU cần thay đổi, bạn chỉ cần cập nhật nó ở một nơi." }
  },
  {
    id: 40,
    topicId: 2,
    question: "You manage a Junos device with 20 interfaces. Each interface requires the same description and MTU setting.\n\nWhich approach reduces repetitive commands and ensures consistency?",
    options: [
      "Use the wildcard delete command.",
      "Configure each interface individually.",
      "Use a configuration group.",
      "Use search and replace to apply settings."
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "Configuration groups in Junos let you define common settings and apply them to multiple interfaces with apply-groups, reducing repetition and ensuring consistency.", vi: "Configuration groups trong Junos cho phép bạn xác định các cài đặt chung và áp dụng chúng cho nhiều cổng bằng apply-groups, giúp giảm sự lặp lại và đảm bảo tính nhất quán." }
  },

  // ========== TOPIC 3: Configuration Management (Q41-Q60) ==========
  {
    id: 41,
    topicId: 3,
    question: "You want to redeploy a Junos device by clearing the existing configuration and resetting to factory defaults.\n\nWhich command would accomplish this?",
    options: [
      "show system storage",
      "request system storage cleanup dry-run",
      "request system zeroize",
      "request system storage cleanup"
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "'request system zeroize' erases all configuration and data, resetting the device to factory defaults. This is useful when redeploying or decommissioning a device.", vi: "'request system zeroize' xóa toàn bộ cấu hình và dữ liệu, khôi phục thiết bị về mặc định của nhà sản xuất (factory defaults). Điều này hữu ích khi triển khai lại hoặc ngừng hoạt động một thiết bị." }
  },
  {
    id: 42,
    topicId: 3,
    question: "What are two recommended tasks before upgrading Junos OS? (Choose two.)",
    options: [
      "Delete all rollback configurations.",
      "Verify available storage space using show system storage.",
      "Disable all interfaces to prevent traffic during upgrade.",
      "Back up the active current configuration."
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: { en: "Before upgrading: verify storage space (show system storage) and back up the current configuration. You should NOT delete rollbacks or disable interfaces.", vi: "Trước khi nâng cấp: xác minh không gian lưu trữ (show system storage) và sao lưu cấu hình hiện tại. Bạn KHÔNG NÊN xóa các bản rollback hoặc vô hiệu hóa các interface." }
  },
  {
    id: 43,
    topicId: 3,
    question: "Users on ge-0/0/5 are experiencing intermittent slowness. You want to see live, real-time traffic updates.\n\nWhich monitoring command should you use?",
    options: [
      "show chassis hardware",
      "monitor interface ge-0/0/5",
      "show interfaces terse",
      "show interfaces ge-0/0/5 extensive"
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "'monitor interface' provides real-time, continuously updating traffic statistics. 'show interfaces' commands give a snapshot, not live updates.", vi: "Lệnh 'monitor interface' cung cấp số liệu thống kê lưu lượng mạng theo thời gian thực và liên tục cập nhật. Các lệnh 'show interfaces' cung cấp dữ liệu tại một thời điểm (snapshot), không phải cập nhật trực tiếp." }
  },
  {
    id: 44,
    topicId: 3,
    question: "What does the command 'clear log ospf-trace' accomplish?",
    options: [
      "The ospf-trace file is deleted.",
      "Trace parameters are removed from the OSPF protocol configuration.",
      "Logging data into ospf-trace is stopped.",
      "Data in the ospf-trace file is removed and logging continues."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "'clear log <filename>' clears the contents of the log file but the file continues to receive new log entries. It does not delete the file or stop logging.", vi: "Lệnh 'clear log <filename>' xóa nội dung của tệp log nhưng tệp vẫn tiếp tục nhận các mục log mới. Nó không xóa tệp hoặc ngừng ghi log." }
  },
  {
    id: 45,
    topicId: 3,
    question: "Which two actions does the monitor traffic command perform? (Choose two.)",
    options: [
      "It provides access to the tcpdump utility.",
      "It monitors traffic that originates or terminates on the local PFE.",
      "It displays real-time log information on your terminal.",
      "It monitors traffic that originates or terminates on the local RE."
    ],
    correct: [0, 3],
    multiSelect: true,
    explanation: { en: "'monitor traffic' is a Junos wrapper for tcpdump. It captures traffic on the RE (control plane), not transit traffic on the PFE.", vi: "'monitor traffic' là một công cụ của Junos dựa trên tcpdump. Nó bắt (capture) lưu lượng mạng trên RE (control plane - mặt phẳng điều khiển), không phải lưu lượng quá cảnh (transit traffic) trên PFE." }
  },
  {
    id: 46,
    topicId: 3,
    question: "What are two requirements for root password recovery in Junos? (Choose two.)",
    options: [
      "You must have console access to the device.",
      "You must have saved the rescue configuration in advance.",
      "You must load the factory default configuration.",
      "You must reboot the device."
    ],
    correct: [0, 3],
    multiSelect: true,
    explanation: { en: "Root password recovery requires physical console access and rebooting into single-user mode. You don't need a rescue config or factory defaults.", vi: "Việc khôi phục mật khẩu root yêu cầu quyền truy cập vật lý qua cổng console và khởi động lại vào chế độ single-user. Bạn không cần cấu hình giải cứu (rescue config) hay thiết lập lại mặc định nhà sản xuất (factory defaults)." }
  },
  {
    id: 47,
    topicId: 3,
    question: "Which two statements are correct about SNMPv3? (Choose two.)",
    options: [
      "It uses plain-text community strings.",
      "It protects against tampering and eavesdropping.",
      "It is simpler to configure than SNMPv2c.",
      "It provides encrypted passwords for secure communication."
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: { en: "SNMPv3 provides security features: authentication (protects against tampering) and encryption (protects against eavesdropping). SNMPv1/v2c use plain-text community strings.", vi: "SNMPv3 cung cấp các tính năng bảo mật: xác thực (bảo vệ chống can thiệp) và mã hóa (bảo vệ chống nghe lén). SNMPv1/v2c sử dụng các community string dưới dạng văn bản thuần túy (plain-text)." }
  },
  {
    id: 48,
    topicId: 3,
    question: "Which Junos tool should you use to identify the path that packets take through the network to a destination?",
    options: [
      "monitor interface traffic",
      "traceroute",
      "SNMP",
      "ping"
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "traceroute shows the path (each hop) that packets take to reach a destination. ping only tests reachability, not the path.", vi: "Traceroute hiển thị đường đi (từng bước hop) mà các gói tin thực hiện để đến đích. Ping chỉ kiểm tra khả năng tiếp cận (reachability), không hiển thị đường đi." }
  },
  {
    id: 49,
    topicId: 3,
    image: "images/q49.png",
    question: "Click the Exhibit button. Referring to the exhibit using the show route 192.168.100.100 command output, over which interface will the traffic be forwarded?",
    options: ["xe-0/1/3.0", "xe-0/0/0.0", "xe-0/1/4.0", "xe-0/1/2.0"],
    correct: [1],
    multiSelect: false,
    explanation: { en: "The Static route has preference 5 (lowest = most preferred). The * indicates it's the active route. Traffic will use xe-0/0/0.0 via the static route.", vi: "Tuyến (route) tĩnh (Static) có độ ưu tiên (preference) là 5 (thấp nhất = ưu tiên nhất). Dấu * cho biết đó là tuyến đang hoạt động (active route). Lưu lượng sẽ đi qua xe-0/0/0.0 thông qua tuyến tĩnh." }
  },
  {
    id: 50,
    topicId: 3,
    question: "Which routing table is used for IPv6 unicast routes by default?",
    options: ["inet.0", "inet.6", "inet.1", "inet6.0"],
    correct: [3],
    multiSelect: false,
    explanation: { en: "inet6.0 is the default IPv6 unicast routing table. inet.0 is for IPv4 unicast. There is no inet.6 table.", vi: "inet6.0 là bảng định tuyến (routing table) IPv6 unicast mặc định. inet.0 dành cho IPv4 unicast. Không có bảng inet.6." }
  },
  {
    id: 51,
    topicId: 3,
    image: "images/q51.png",
    question: "Click the Exhibit button. Referring to the exhibit, which two statements about IPv6 routing are correct? (Choose two.)",
    options: [
      "The router is not learning IPv6 routes from peers.",
      "The router cannot forward traffic to remote IPv6 networks.",
      "Traffic for 2001:db8:22:108::/64 is forwarded using ge-0/0/5.0.",
      "The router is connected to the 2001:db8:22:107::/64 network."
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "With only Direct and Local routes, the router has no learned routes from routing protocols (no OSPF, BGP, etc.), so it cannot reach remote IPv6 networks.", vi: "Chỉ với các tuyến (routes) Direct và Local, bộ định tuyến không có các tuyến học được từ các giao thức định tuyến (không có OSPF, BGP, v.v.), vì vậy nó không thể tiếp cận các mạng IPv6 từ xa." }
  },
  {
    id: 52,
    topicId: 3,
    question: "Which two statements accurately describe the relationship between the routing table and the forwarding table? (Choose two.)",
    options: [
      "The routing table resides in the data plane for fast lookups.",
      "The routing table selects the best route based on routing information.",
      "The forwarding table is built from the routing table.",
      "The routing table is built from the forwarding table."
    ],
    correct: [1, 2],
    multiSelect: true,
    explanation: { en: "The routing table (in RE) selects best routes, then the forwarding table (in PFE) is built from active routes in the routing table. The routing table is in the control plane, not data plane.", vi: "Bảng định tuyến (routing table) (trong RE) chọn các tuyến tốt nhất, sau đó bảng chuyển tiếp (forwarding table) (trong PFE) được xây dựng từ các tuyến đang hoạt động trong bảng định tuyến. Bảng định tuyến nằm trong mặt phẳng điều khiển (control plane), không phải mặt phẳng dữ liệu (data plane)." }
  },
  {
    id: 53,
    topicId: 3,
    image: "images/q53.png",
    question: "Click the Exhibit button. You are configuring a Junos router to provide connectivity to a building across town on the network 10.10.10.0/24. The next-hop router is at 10.10.1.1, which is reachable using interface ge-0/0/1. After committing the configuration in the exhibit, users report they still cannot reach the 10.10.10.0/24 network, and the route does not appear as active in the routing table. In this scenario, which statement is correct?",
    options: [
      "The next-hop address 10.1.1.1 is not directly connected or reachable through another route.",
      "Static routes must include the outgoing interface as the next hop.",
      "The static route requires a preference value to be specified.",
      "The static route requires the retain keyword to remain active."
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "A static route requires the next-hop to be reachable (directly connected or via another route). If 10.1.1.1 isn't reachable, the static route won't become active.", vi: "Một tuyến (route) tĩnh yêu cầu next-hop phải có thể tiếp cận được (kết nối trực tiếp hoặc thông qua một tuyến khác). Nếu không thể tiếp cận 10.1.1.1, tuyến tĩnh sẽ không trở thành tuyến hoạt động (active)." }
  },
  {
    id: 54,
    topicId: 3,
    question: "When multiple routes exist to the same destination, which rule do routers use to select the next hop?",
    options: [
      "They choose the route learned most recently.",
      "They choose a route at random to balance paths.",
      "They choose the route with the longest prefix match.",
      "They choose the route with the largest administrative distance."
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "The longest prefix match rule is fundamental to IP routing. The most specific route (longest prefix) matching the destination is always preferred.", vi: "Quy tắc khớp tiền tố dài nhất (longest prefix match) là cơ bản đối với định tuyến IP. Tuyến cụ thể nhất (tiền tố dài nhất) khớp với đích luôn được ưu tiên." }
  },
  {
    id: 55,
    topicId: 3,
    question: "You must view the forwarding table to troubleshoot a packet forwarding issue.\n\nWhich command displays the forwarding table?",
    options: [
      "show route table",
      "show route forwarding-table",
      "show ip forwarding",
      "show forwarding-options"
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "'show route forwarding-table' displays the forwarding table (FIB) used by the PFE. 'show route' displays the routing table (RIB) from the RE.", vi: "Lệnh 'show route forwarding-table' hiển thị bảng chuyển tiếp (FIB) được PFE sử dụng. Lệnh 'show route' hiển thị bảng định tuyến (RIB) từ RE." }
  },
  {
    id: 56,
    topicId: 3,
    image: "images/q56.png",
    question: "Click the Exhibit button. Referring to the exhibit, what is the next hop for IP address 10.0.0.9?",
    options: ["192.168.2.1", "192.168.1.1", "192.168.3.1", "192.168.0.1"],
    correct: [0],
    multiSelect: false,
    explanation: { en: "10.0.0.9 falls within 10.0.0.8/27 (range .8-.39). This is the longest prefix match (/27 vs /26 or /24). 10.0.0.4/30 covers .4-.7, so .9 doesn't match it.", vi: "10.0.0.9 nằm trong dải 10.0.0.8/27 (phạm vi .8-.39). Đây là khớp tiền tố dài nhất (longest prefix match) (/27 so với /26 hoặc /24). 10.0.0.4/30 bao gồm từ .4 đến .7, vì vậy .9 không khớp với nó." }
  },
  {
    id: 57,
    topicId: 3,
    image: "images/q57.png",
    question: "Click the Exhibit button. Referring to the exhibit, what would be the next-hop address for the packet destined for the 10.0.0.0/24 network if the ge-0/0/1 interface goes down?",
    options: ["10.23.0.3", "10.12.0.2", "10.12.0.1", "10.25.11.1"],
    correct: [0],
    multiSelect: false,
    explanation: { en: "If ge-0/0/1 goes down, both the static and OSPF routes to 10.0.0.0/24 are lost. The default route 0.0.0.0/0 via 10.23.0.3 becomes the only match.", vi: "Nếu interface ge-0/0/1 bị down, cả hai tuyến tĩnh (static) và OSPF đến 10.0.0.0/24 đều bị mất. Tuyến mặc định (default route) 0.0.0.0/0 qua 10.23.0.3 trở thành khớp duy nhất." }
  },
  {
    id: 58,
    topicId: 3,
    question: "What is the main function of the forwarding table on a Junos device?",
    options: [
      "It contains only active routes used to forward packets through the PFE.",
      "It advertises routes to neighboring routers.",
      "It stores all learned routes from routing protocols.",
      "It determines the best route based on route preference."
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "The forwarding table (FIB) contains only active routes selected by the routing table. It's used by the PFE for fast packet forwarding.", vi: "Bảng chuyển tiếp (FIB) chỉ chứa các tuyến đang hoạt động (active routes) do bảng định tuyến chọn. Nó được PFE sử dụng để chuyển tiếp gói tin (packet forwarding) nhanh chóng." }
  },
  {
    id: 59,
    topicId: 3,
    question: "Which two statements about route preference in Junos OS are correct? (Choose two.)",
    options: [
      "Higher route preference values indicate higher priority.",
      "Route preference is considered after evaluating the longest prefix match.",
      "Lower route preference values indicate higher priority.",
      "Route preference determines the forwarding table size."
    ],
    correct: [1, 2],
    multiSelect: true,
    explanation: { en: "In Junos, lower preference = higher priority (e.g., Direct/0 beats OSPF/10). Longest prefix match is evaluated first; route preference breaks ties between routes to the same destination.", vi: "Trong Junos, giá trị ưu tiên (preference) thấp hơn = độ ưu tiên cao hơn (ví dụ: Direct/0 thắng OSPF/10). Khớp tiền tố dài nhất (Longest prefix match) được đánh giá đầu tiên; giá trị preference của tuyến phân định sự khác biệt giữa các tuyến đến cùng một đích." }
  },
  {
    id: 60,
    topicId: 3,
    image: "images/q60.png",
    question: "Click the Exhibit button. Which two statements are true about the firewall filter configuration shown in the exhibit? (Choose two.)",
    options: [
      "It sends filtered data to a syslog file.",
      "It applies the filter to a physical interface.",
      "It evaluates SSH packets egressing from the management interface.",
      "It counts the number of SSH packets that egress from the source SSH interface."
    ],
    correct: [2, 3],
    multiSelect: true,
    explanation: { en: "The filter is applied as output on me0 (management interface), so it evaluates egressing traffic. Term t1 counts SSH packets (count c1). All traffic is accepted by term t2.", vi: "Bộ lọc (filter) được áp dụng dưới dạng đầu ra (output) trên me0 (interface quản lý), do đó nó đánh giá lưu lượng egress (đi ra). Term t1 đếm các gói SSH (count c1). Tất cả lưu lượng đều được chấp nhận bởi term t2." }
  },

  // ========== TOPIC 4: Routing Fundamentals (Q61-Q80) ==========
  {
    id: 61,
    topicId: 4,
    image: "images/q61.png",
    question: "Click the Exhibit button. Referring to the exhibit, which command would be used to view the IP subnet addresses associated with prefix-list DIRECT-IP?",
    options: [
      "show policy-options prefix-list DIRECT-IP",
      "show configuration policy-options prefix-list DIRECT-IP",
      "show configuration policy-options prefix-list DIRECT-IP | display inheritance",
      "show configuration policy-options prefix-list DIRECT-IP apply-path"
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "'| display inheritance' expands apply-path references to show the actual resolved IP addresses that the prefix-list matches, instead of just the apply-path statement.", vi: "Lệnh '| display inheritance' mở rộng các tham chiếu apply-path để hiển thị các địa chỉ IP đã được phân giải thực sự mà danh sách tiền tố (prefix-list) khớp, thay vì chỉ hiển thị câu lệnh apply-path." }
  },
  {
    id: 62,
    topicId: 4,
    image: "images/q62.png",
    question: "Click the Exhibit button. How is traffic, sourced from 10.0.0.0/8, treated by the firewall filter shown in the exhibit?",
    options: [
      "Logged and discarded",
      "Logged and accepted",
      "Logged with no further action",
      "Logged and rejected"
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "Term 1 logs the traffic and uses 'next term' to continue evaluation. Term 2 rejects all traffic. So the result is: logged (term 1) and rejected (term 2).", vi: "Term 1 ghi lại lưu lượng (log) và sử dụng 'next term' để tiếp tục đánh giá. Term 2 từ chối (reject) mọi lưu lượng. Vì vậy kết quả là: được ghi log (term 1) và bị từ chối (term 2)." }
  },
  {
    id: 63,
    topicId: 4,
    question: "Your routing policy has three terms. A route matches the first term with an accept action.\n\nWhat happens next?",
    options: [
      "The route is rejected by default.",
      "The route is evaluated by the second term.",
      "The route is sent to the next policy chain.",
      "The route is accepted and no further terms are evaluated."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "In Junos routing policies, when a route matches a term with a terminating action (accept/reject), processing stops immediately. No further terms are evaluated.", vi: "Trong các chính sách định tuyến (routing policies) của Junos, khi một tuyến khớp với một term có hành động kết thúc (accept/reject), quá trình xử lý dừng lại ngay lập tức. Không có term nào khác được đánh giá." }
  },
  {
    id: 64,
    topicId: 4,
    image: "images/q64.png",
    question: "Click the Exhibit button. Referring to the exhibit, which two actions will occur when a packet matches the firewall filter? (Choose two.)",
    options: [
      "A counter will be incremented.",
      "The packet will be discarded.",
      "The packet will be forwarded.",
      "An ICMP destination unreachable message will be returned."
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "The 'count' action increments the counter, and 'discard' silently drops the packet without sending any response. 'reject' would send an ICMP unreachable, but 'discard' does not.", vi: "Hành động 'count' làm tăng bộ đếm, và 'discard' loại bỏ gói tin một cách âm thầm mà không gửi bất kỳ phản hồi nào. 'reject' sẽ gửi một thông báo ICMP unreachable, nhưng 'discard' thì không." }
  },
  {
    id: 65,
    topicId: 4,
    question: "Which two statements about prefix lists in Junos are correct? (Choose two.)",
    options: [
      "Prefix lists can be re-used in multiple routing policies.",
      "Prefix lists can be used in both firewall filters and routing policies.",
      "Prefix lists cannot be used in routing policies.",
      "Prefix lists cannot be used in firewall filters."
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "Prefix lists are reusable and can be referenced in both firewall filters (under [firewall]) and routing policies (under [policy-options]).", vi: "Các danh sách tiền tố (Prefix lists) có thể tái sử dụng và có thể được tham chiếu trong cả bộ lọc tường lửa (firewall filters) (dưới cấu hình [firewall]) và các chính sách định tuyến (routing policies) (dưới cấu hình [policy-options])." }
  },
  {
    id: 66,
    topicId: 4,
    question: "Which two statements about prefix lists in Junos are correct? (Choose two.)",
    options: [
      "Prefix lists can be re-used in multiple routing policies.",
      "Prefix lists can be used in both firewall filters and routing policies.",
      "Prefix lists cannot be used in routing policies.",
      "Prefix lists cannot be used in firewall filters."
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "Prefix lists are reusable and can be referenced in both firewall filters and routing policies.", vi: "Các danh sách tiền tố (Prefix lists) có thể tái sử dụng và có thể được tham chiếu trong cả bộ lọc tường lửa (firewall filters) và các chính sách định tuyến (routing policies)." }
  },
  {
    id: 67,
    topicId: 4,
    question: "What is the primary purpose of an IPv6 link-local address?",
    options: [
      "To provide Layer 2 connectivity",
      "To assign a unique address for multicast traffic",
      "To enable communication between devices on the same segment",
      "To replace the default gateway in IPv6 networks"
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "IPv6 link-local addresses (fe80::/10) are used for communication between devices on the same network segment. They are not routable and are automatically assigned.", vi: "Địa chỉ IPv6 link-local (fe80::/10) được sử dụng để liên lạc giữa các thiết bị trên cùng một phân đoạn mạng (network segment). Chúng không thể định tuyến (non-routable) và được gán tự động." }
  },
  {
    id: 68,
    topicId: 4,
    question: "Which two actions would you perform in operational mode of the CLI? (Choose two.)",
    options: [
      "Clear the log files.",
      "Commit the configuration.",
      "Reboot the device.",
      "Configure routing protocols."
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: { en: "Operational mode (user@router>) is for monitoring and managing: clearing logs, rebooting, ping, traceroute, etc. Committing and configuring are done in configuration mode.", vi: "Chế độ vận hành (Operational mode) (user@router>) dùng để giám sát và quản lý: xóa log, khởi động lại, ping, traceroute, v.v. Việc áp dụng (commit) và cấu hình được thực hiện ở chế độ cấu hình (configuration mode)." }
  },
  {
    id: 69,
    topicId: 4,
    question: "Which protocol is used to discover the Layer 2 (MAC) address of a next hop for IPv6 hosts?",
    options: ["DHCP", "ARP", "NDP", "DNS"],
    correct: [2],
    multiSelect: false,
    explanation: { en: "IPv6 uses NDP (Neighbor Discovery Protocol) instead of ARP. NDP performs address resolution, router discovery, and other functions.", vi: "IPv6 sử dụng NDP (Neighbor Discovery Protocol) thay vì ARP. NDP thực hiện phân giải địa chỉ, khám phá bộ định tuyến (router discovery) và các chức năng khác." }
  },
  {
    id: 70,
    topicId: 4,
    question: "After factory default configuration is loaded, which object must be created before the first commit?",
    options: [
      "Host name",
      "Loopback IP address",
      "Out-of-band connectivity",
      "Root authentication"
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "Junos requires root authentication (password) to be set before the first commit on a factory-default device. Without it, commit will fail with an error.", vi: "Junos yêu cầu xác thực root (mật khẩu) phải được cấu hình trước lần commit đầu tiên trên một thiết bị ở chế độ mặc định nhà sản xuất. Nếu không có mật khẩu root, thao tác commit sẽ thất bại với thông báo lỗi." }
  },
  {
    id: 71,
    topicId: 4,
    question: "You want to automatically back up your configuration to an external server every time you commit.\n\nWhich command accomplishes this?",
    options: [
      "set system commit synchronize",
      "set system archival configuration transfer-interval",
      "set system archival configuration transfer-on-commit",
      "set system archival configuration archive-sites"
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "'transfer-on-commit' triggers an automatic backup to the configured archive site every time a commit occurs. 'transfer-interval' does periodic backups.", vi: "Tùy chọn 'transfer-on-commit' kích hoạt việc tự động sao lưu đến trang lưu trữ (archive site) đã cấu hình mỗi khi xảy ra quá trình commit. 'transfer-interval' thực hiện sao lưu định kỳ." }
  },
  {
    id: 72,
    topicId: 4,
    question: "Which two traffic types are processed by the Routing Engine? (Choose two.)",
    options: [
      "Traffic with CoS markings",
      "Transit traffic",
      "Routing updates",
      "Local management traffic"
    ],
    correct: [2, 3],
    multiSelect: true,
    explanation: { en: "The Routing Engine processes control plane traffic: routing protocol updates and local management traffic (SSH, SNMP). Transit traffic and CoS processing happen on the PFE.", vi: "Routing Engine xử lý lưu lượng mặt phẳng điều khiển (control plane): các bản cập nhật giao thức định tuyến và lưu lượng quản lý nội bộ (SSH, SNMP). Lưu lượng quá cảnh (transit traffic) và xử lý CoS diễn ra trên PFE." }
  },
  {
    id: 73,
    topicId: 4,
    question: "What is the purpose of an ARP packet?",
    options: [
      "To determine the MPLS label of a given IP address",
      "To determine the IP address of a given URL",
      "To determine the MAC address of a given IP address",
      "To determine the IP address of a given MAC address"
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "ARP (Address Resolution Protocol) resolves an IPv4 address to a MAC address. This is essential for Layer 2 frame delivery on local networks.", vi: "ARP (Address Resolution Protocol) phân giải địa chỉ IPv4 thành địa chỉ MAC. Điều này là thiết yếu để phân phối khung (frame) Layer 2 trên các mạng cục bộ." }
  },
  {
    id: 74,
    topicId: 4,
    question: "Which two statements describe rollback configuration behavior in Junos? (Choose two.)",
    options: [
      "Rollback configurations are applied automatically after a commit confirmed timeout.",
      "Rollback 0 always refers to the factory default configuration.",
      "Rollback files are stored automatically after each commit.",
      "Up to 100 rollback configurations are maintained by default."
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: { en: "Junos automatically saves rollback files after each commit (up to 49 by default, not 100). 'commit confirmed' auto-rolls back if not confirmed within the timeout. Rollback 0 is the current active config, NOT factory default.", vi: "Junos tự động lưu các tệp rollback sau mỗi lần commit (tối đa 49 theo mặc định, không phải 100). 'commit confirmed' tự động rollback nếu không được xác nhận trong thời gian chờ (timeout). Rollback 0 là cấu hình đang hoạt động hiện tại, KHÔNG PHẢI mặc định của nhà sản xuất." }
  },
  {
    id: 75,
    topicId: 4,
    question: "Which two statements about firewall filters are correct? (Choose two.)",
    options: [
      "Firewall filters are stateful.",
      "Firewall filters can match Layer 4 parameters.",
      "Firewall filters can match Layer 7 parameters.",
      "Firewall filters are stateless."
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: { en: "Junos firewall filters are stateless (each packet evaluated independently) and can match Layer 3-4 parameters (IP, TCP/UDP ports). They cannot match Layer 7 (application) data.", vi: "Các bộ lọc tường lửa (firewall filters) của Junos là phi trạng thái (stateless - mỗi gói tin được đánh giá độc lập) và có thể khớp các tham số Layer 3-4 (IP, cổng TCP/UDP). Chúng không thể khớp dữ liệu Layer 7 (ứng dụng)." }
  },
  {
    id: 76,
    topicId: 4,
    question: "Which statement describes the primary purpose of a routing policy in Junos OS?",
    options: [
      "It controls which routes are accepted or advertised by a routing protocol.",
      "It determines the physical interface used for forwarding traffic.",
      "It sets the maximum number of routes in the routing table.",
      "It enables automatic rollback of routing changes."
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "Routing policies control route import and export: which routes are accepted from neighbors and which are advertised to them.", vi: "Các chính sách định tuyến (routing policies) kiểm soát việc import và export route: route nào được chấp nhận từ neighbor và route nào được quảng bá (advertise) đến chúng." }
  },
  {
    id: 77,
    topicId: 4,
    question: "Which statement accurately describes the purpose of route preference in Junos OS?",
    options: [
      "It sets the metric for forwarding traffic through the PFE.",
      "It determines which route is selected as active when multiple routes to the same destination exist.",
      "It controls redistribution of routes between routing instances.",
      "It determines the maximum number of routes in the routing table."
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "Route preference (administrative distance) determines which route is selected as active when multiple routes to the same destination exist from different sources.", vi: "Route preference (administrative distance) quyết định route nào được chọn làm active khi có nhiều route đến cùng một đích từ các nguồn khác nhau." }
  },
  {
    id: 78,
    topicId: 4,
    question: "Which two operational mode commands verify CPU and memory utilization? (Choose two.)",
    options: [
      "show chassis routing-engine",
      "show chassis environment",
      "show system processes extensive",
      "show system resource-monitor summary"
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: { en: "'show chassis routing-engine' displays CPU utilization and memory usage of the RE. 'show system processes extensive' shows detailed per-process CPU and memory usage.", vi: "Lệnh 'show chassis routing-engine' hiển thị mức sử dụng CPU và bộ nhớ của RE. Lệnh 'show system processes extensive' hiển thị chi tiết mức sử dụng CPU và bộ nhớ trên từng tiến trình (process)." }
  },
  {
    id: 79,
    topicId: 4,
    question: "Which two tasks are performed by the Routing Engine? (Choose two.)",
    options: [
      "The RE runs routing protocols.",
      "The RE evaluates transit traffic against firewall filters.",
      "The RE manages the device configuration.",
      "The RE forwards transit traffic."
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: { en: "The RE runs routing protocols (OSPF, BGP, etc.) and manages device configuration. Transit traffic forwarding and firewall filter evaluation for transit are done by the PFE.", vi: "RE chạy các giao thức định tuyến (OSPF, BGP, v.v.) và quản lý cấu hình thiết bị. Việc chuyển tiếp lưu lượng transit (transit traffic forwarding) và đánh giá firewall filter cho transit được thực hiện bởi PFE." }
  },
  {
    id: 80,
    topicId: 4,
    image: "images/q80.png",
    question: "Exhibit: Referring to the exhibit, which route will be selected for a packet destined to IP address 10.50.10.55?",
    options: [
      "0.0.0.0/0 via 203.0.113.1 – default route matches all and has been active longest.",
      "10.50.0.0/16 via 192.168.1.10 – OSPF has a better preference than BGP.",
      "10.50.10.0/24 via 192.168.1.20 – longest prefix match for the destination.",
      "10.0.0.0/8 via 192.168.1.1 – static has the lowest preference value."
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "Longest prefix match wins: 10.50.10.0/24 is the most specific match for 10.50.10.55. Prefix length is evaluated before route preference.", vi: "Longest prefix match luôn ưu tiên: 10.50.10.0/24 là match cụ thể nhất cho 10.50.10.55. Prefix length được đánh giá trước route preference." }
  },

  // ========== TOPIC 5: Firewall Filters & Policies (Q81-Q100) ==========
  {
    id: 81,
    topicId: 5,
    image: "images/q81.png",
    question: "Which statement is correct about traffic flow in the network shown in the exhibit?",
    options: [
      "A routing loop can occur if one of the users sends packets to 10.1.99.1.",
      "Only User A can reach destinations beyond Router R1.",
      "Router R2 will drop packets destined for User B and User C.",
      "Router R1 will discard all packets from all three users."
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "If a user sends traffic to 10.1.99.1 (doesn't exist), R1 sends it to R2 (default route), R2 sends it back to R1 (10.1.0.0/16 route), creating a routing loop.", vi: "Nếu user gửi lưu lượng đến 10.1.99.1 (không tồn tại), R1 gửi nó đến R2 (default route), R2 gửi ngược lại R1 (route 10.1.0.0/16), tạo ra một routing loop." }
  },
  {
    id: 82,
    topicId: 5,
    image: "images/q82.png",
    question: "Exhibit: Referring to the exhibit, with firewall filter Packet-Filter attached to an interface, if traffic is sent from 192.168.1.1 to 8.8.8.8 for a UDP DNS query, what will happen to the traffic?",
    options: [
      "The traffic will match term 1 and be forwarded.",
      "The traffic will match the default last term and be forwarded.",
      "The traffic will match the default last term and be discarded.",
      "The traffic will match term 3 and be forwarded."
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "Term 1 requires protocol tcp – UDP DNS doesn't match. Term 2 requires source 192.168.2.0/24 – 192.168.1.1 doesn't match. The implicit default term at the end discards unmatched traffic.", vi: "Term 1 yêu cầu giao thức tcp - UDP DNS không match. Term 2 yêu cầu source 192.168.2.0/24 - 192.168.1.1 không match. Term mặc định (implicit default term) ở cuối sẽ loại bỏ (discard) các lưu lượng không match." }
  },
  {
    id: 83,
    topicId: 5,
    question: "Which two statements about route preference in Junos are correct? (Choose two.)",
    options: [
      "Both direct and static routes have the same preference.",
      "Both direct and local routes have the same preference.",
      "Both OSPF internal and OSPF AS external routes have the same preference.",
      "Both EBGP and IBGP routes have the same preference."
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: { en: "Direct and Local routes both have preference 0. EBGP and IBGP both have preference 170 in Junos. Static is 5, OSPF internal is 10, OSPF external is 150.", vi: "Cả Direct và Local route đều có preference là 0. EBGP và IBGP đều có preference là 170 trong Junos. Static là 5, OSPF internal là 10, OSPF external là 150." }
  },
  {
    id: 84,
    topicId: 5,
    question: "Which statement about collision domains and broadcast domains is correct?",
    options: [
      "A router separates collision domains but forwards all broadcast traffic.",
      "VLANs on a switch reduce collision domains but have no effect on broadcast domains.",
      "A switch creates a separate collision domain for each port, but all ports are in the same broadcast domain by default.",
      "Broadcast domains are only relevant in IPv4 networks."
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "A switch creates a separate collision domain per port (micro-segmentation), but by default all ports share the same broadcast domain unless VLANs are configured.", vi: "Một switch tạo ra một collision domain riêng biệt trên mỗi port (micro-segmentation), nhưng theo mặc định tất cả các port dùng chung một broadcast domain trừ khi VLAN được cấu hình." }
  },
  {
    id: 85,
    topicId: 5,
    question: "Which command is used to view real-time traffic statistics for all interfaces?",
    options: [
      "show interfaces extensive",
      "monitor interface traffic",
      "monitor traffic interface all",
      "show interfaces statistics"
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "'monitor interface traffic' provides real-time, continuously updating traffic statistics across all interfaces.", vi: "Lệnh 'monitor interface traffic' cung cấp số liệu thống kê lưu lượng theo thời gian thực (real-time) và liên tục cập nhật trên tất cả các interface." }
  },
  {
    id: 86,
    topicId: 5,
    question: "Which protocol provides secure remote CLI access to a Junos device?",
    options: ["FTP", "SNMP", "Telnet", "SSH"],
    correct: [3],
    multiSelect: false,
    explanation: { en: "SSH (Secure Shell) provides encrypted remote CLI access. Telnet is unencrypted, FTP is for file transfer, and SNMP is for monitoring.", vi: "SSH (Secure Shell) cung cấp quyền truy cập CLI từ xa được mã hóa. Telnet không được mã hóa, FTP dùng để truyền tệp (file transfer) và SNMP dùng để giám sát (monitoring)." }
  },
  {
    id: 87,
    topicId: 5,
    question: "When should you use the 'replace pattern' command instead of the 'rename' command?",
    options: [
      "You want to create a private candidate configuration.",
      "You want to disable a physical interface.",
      "You need to edit a single component name in the configuration.",
      "You want to globally replace all occurrences of a specific string."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "'replace pattern' does a global find-and-replace across the entire configuration. 'rename' changes a single specific item's name.", vi: "Lệnh 'replace pattern' thực hiện tìm kiếm và thay thế (find-and-replace) toàn cục trên toàn bộ cấu hình. Lệnh 'rename' thay đổi tên của một mục (item) cụ thể." }
  },
  {
    id: 88,
    topicId: 5,
    question: "Which statement accurately describes the Junos candidate configuration?",
    options: [
      "It is a backup configuration stored in the rollback archive.",
      "It is the active configuration currently running on the device.",
      "It is a temporary configuration that becomes active only after a reboot.",
      "It is a configuration that stores proposed changes before they are committed."
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "The candidate configuration is a working copy where you make changes. It only becomes active after you commit it. This allows reviewing changes before applying them.", vi: "Candidate configuration là một bản sao làm việc (working copy) nơi bạn thực hiện các thay đổi. Nó chỉ trở thành active sau khi bạn commit. Điều này cho phép xem xét các thay đổi trước khi áp dụng." }
  },
  {
    id: 89,
    topicId: 5,
    image: "images/q89.png",
    question: "Exhibit: Referring to the exhibit, which routing configuration is required for these two users to access the remote server?",
    options: [
      "Users and the server require a default gateway.",
      "Trunk ports must be enabled on the switch.",
      "Users must connect directly to the router.",
      "A routing protocol must be enabled on the router."
    ],
    correct: [0],
    multiSelect: false,
    explanation: { en: "For inter-subnet communication, both users and the server need a default gateway (the router interface on their respective subnets) to route traffic between the two networks.", vi: "Để giao tiếp inter-subnet (giữa các subnet), cả user và server đều cần một default gateway (interface của router trên subnet tương ứng của chúng) để định tuyến lưu lượng giữa hai mạng." }
  },
  {
    id: 90,
    topicId: 5,
    question: "Which command would you use to gracefully power off a Junos device?",
    options: [
      "request system reboot",
      "shutdown now",
      "request system logout",
      "request system halt"
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "'request system halt' gracefully shuts down all processes and powers off the device. 'reboot' restarts it, 'logout' logs you out, 'shutdown now' is not a Junos command.", vi: "Lệnh 'request system halt' tắt an toàn tất cả các tiến trình (gracefully shuts down) và tắt nguồn thiết bị. Lệnh 'reboot' khởi động lại thiết bị, 'logout' đăng xuất bạn, lệnh 'shutdown now' không phải là một lệnh trong Junos." }
  },
  {
    id: 91,
    topicId: 5,
    question: "Which statement describes the purpose of configuring traceoption log files in Junos OS?",
    options: [
      "They automatically optimize routing decisions based on traffic patterns.",
      "They enable detailed debugging of specific protocols or processes.",
      "They allow permanent storage of all system logs for compliance.",
      "They provide real-time monitoring of interface bandwidth utilization."
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "Traceoptions are Junos's debugging mechanism, allowing detailed logging of specific protocol operations (OSPF, BGP, etc.) for troubleshooting.", vi: "Traceoptions là cơ chế debugging của Junos, cho phép ghi log chi tiết (detailed logging) các hoạt động giao thức cụ thể (OSPF, BGP, v.v.) để khắc phục sự cố (troubleshooting)." }
  },
  {
    id: 92,
    topicId: 5,
    question: "You set time zone to America/Los_Angeles but the system time didn't change to correct local time.\n\nWhich two additional actions would fix this? (Choose two.)",
    options: [
      "Configure an NTP server.",
      "Configure a DNS server.",
      "Set the date and time setting manually.",
      "Reboot the device."
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: { en: "Setting the timezone doesn't automatically set the correct time. You need to either configure NTP for automatic time sync or manually set the date/time.", vi: "Cài đặt timezone không tự động thiết lập thời gian chính xác. Bạn cần phải cấu hình NTP để đồng bộ thời gian tự động (automatic time sync) hoặc thiết lập ngày/giờ thủ công." }
  },
  {
    id: 93,
    topicId: 5,
    question: "Which statement about class of service (CoS) in a network is correct?",
    options: [
      "CoS encrypts traffic to secure data across the network.",
      "CoS prioritizes certain types of traffic during congestion.",
      "CoS assigns IP addresses dynamically to optimize routing.",
      "CoS prevents broadcast storms by segmenting VLANs."
    ],
    correct: [1],
    multiSelect: false,
    explanation: { en: "Class of Service (CoS) prioritizes traffic during congestion, ensuring time-sensitive traffic (voice, video) gets preferential treatment over best-effort traffic.", vi: "Class of Service (CoS) ưu tiên lưu lượng trong thời gian nghẽn mạng (congestion), đảm bảo lưu lượng nhạy cảm với thời gian (voice, video) nhận được ưu tiên xử lý so với best-effort traffic." }
  },
  {
    id: 94,
    topicId: 5,
    question: "Which two tasks should be performed when creating a new user account on a Junos device? (Choose two.)",
    options: [
      "Assign the user to a login class.",
      "Configure a password for the user.",
      "Enable SSH for the user explicitly.",
      "Configure the user to bypass authentication."
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "When creating a user: assign a login class (determines permissions) and set a password. SSH is enabled system-wide, not per user. Users should never bypass authentication.", vi: "Khi tạo một user: cần gán một login class (quyết định quyền - permissions) và thiết lập password. SSH được enable trên toàn hệ thống (system-wide), không phải theo từng user. User không bao giờ được phép bỏ qua xác thực (bypass authentication)." }
  },
  {
    id: 95,
    topicId: 5,
    question: "A new user must view routing table and interface statistics but NOT make configuration changes.\n\nWhich permission flag would satisfy this?",
    options: ["network", "configure", "view", "all"],
    correct: [2],
    multiSelect: false,
    explanation: { en: "The 'view' permission allows reading operational and configuration data without making changes. 'configure' allows changes, 'all' gives full access.", vi: "Quyền 'view' cho phép đọc dữ liệu hoạt động (operational data) và cấu hình mà không được thực hiện thay đổi. Quyền 'configure' cho phép thay đổi, quyền 'all' cung cấp quyền truy cập đầy đủ (full access)." }
  },
  {
    id: 96,
    topicId: 5,
    question: "Which two subnet ranges include IP address 192.168.3.29? (Choose two.)",
    options: [
      "192.168.0.0/22",
      "192.168.3.0/28",
      "192.168.2.0/23",
      "192.168.252.0/21"
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: { en: "192.168.0.0/22 covers .0.0-.3.255 (includes .3.29). 192.168.2.0/23 covers .2.0-.3.255 (includes .3.29). 192.168.3.0/28 covers .3.0-.3.15 (does NOT include .3.29). 192.168.252.0/21 doesn't include .3.29.", vi: "192.168.0.0/22 bao gồm .0.0-.3.255 (bao gồm .3.29). 192.168.2.0/23 bao gồm .2.0-.3.255 (bao gồm .3.29). 192.168.3.0/28 bao gồm .3.0-.3.15 (KHÔNG bao gồm .3.29). 192.168.252.0/21 không bao gồm .3.29." }
  },
  {
    id: 97,
    topicId: 5,
    question: "Which daemon verifies that the configuration is valid before committing?",
    options: ["rpd", "mgd", "dcd", "chassisd"],
    correct: [1],
    multiSelect: false,
    explanation: { en: "mgd (Management Daemon) is responsible for validating configuration before commit. rpd handles routing protocols, dcd handles interfaces, chassisd handles chassis management.", vi: "mgd (Management Daemon) chịu trách nhiệm xác thực cấu hình (validating configuration) trước khi commit. rpd xử lý các giao thức định tuyến, dcd xử lý interface, chassisd xử lý quản lý chassis." }
  },
  {
    id: 98,
    topicId: 5,
    question: "Which two tasks would you perform in operational mode? (Choose two.)",
    options: [
      "Requesting the system to reboot",
      "Verifying the version of Junos OS",
      "Rolling back to a previous configuration",
      "Committing your configuration"
    ],
    correct: [0, 1],
    multiSelect: true,
    explanation: { en: "Operational mode (>) tasks: reboot (request system reboot), show version. Rolling back and committing are done in configuration mode (#).", vi: "Các tác vụ ở Operational mode (>): reboot (request system reboot), show version. Rolling back và commit được thực hiện ở configuration mode (#)." }
  },
  {
    id: 99,
    topicId: 5,
    question: "After a Junos OS upgrade, you want to confirm the device is running the correct version.\n\nWhich command should you use?",
    options: [
      "request system software validate",
      "show chassis routing-engine",
      "show system snapshot",
      "show version"
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "'show version' displays the current Junos OS version running on the device. This is the simplest and most direct way to verify the software version.", vi: "Lệnh 'show version' hiển thị phiên bản Junos OS hiện tại đang chạy trên thiết bị. Đây là cách đơn giản và trực tiếp nhất để kiểm tra (verify) phiên bản phần mềm." }
  },
  {
    id: 100,
    topicId: 5,
    question: "What contains routing information for inet.0 and inet6.0?",
    options: ["the LIB", "the SIB", "the RIB", "the MIB"],
    correct: [2],
    multiSelect: false,
    explanation: { en: "RIB (Routing Information Base) is the routing table containing inet.0 (IPv4) and inet6.0 (IPv6). LIB is for MPLS labels, MIB is for SNMP management information.", vi: "RIB (Routing Information Base) là bảng định tuyến (routing table) chứa inet.0 (IPv4) và inet6.0 (IPv6). LIB dành cho MPLS label, MIB dành cho thông tin quản lý SNMP (SNMP management information)." }
  },

  // ========== TOPIC 6: Advanced Operations (Q101-Q107) ==========
  {
    id: 101,
    topicId: 6,
    question: "Which two statements are correct about a Routing Engine? (Choose two.)",
    options: [
      "It processes CoS marked traffic.",
      "It processes management traffic.",
      "It forwards transit traffic.",
      "It maintains routing tables."
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: { en: "The Routing Engine processes management traffic and maintains routing tables. CoS processing and transit forwarding are done by the PFE.", vi: "Routing Engine (RE) xử lý lưu lượng quản lý (management traffic) và duy trì bảng định tuyến. Xử lý CoS và transit forwarding được thực hiện bởi PFE." }
  },
  {
    id: 102,
    topicId: 6,
    question: "Which two statements describe the result when you enter ? at the command-line prompt? (Choose two.)",
    options: [
      "It displays summary information about the commands and options.",
      "It lists tips for the help menu.",
      "It displays help about a text string contained in a statement.",
      "It lists the available commands and options."
    ],
    correct: [0, 3],
    multiSelect: true,
    explanation: { en: "The '?' key in Junos CLI displays available commands/options at the current cursor position and shows summary information about each option.", vi: "Phím '?' trong Junos CLI hiển thị các lệnh/tùy chọn khả dụng (available commands/options) tại vị trí con trỏ hiện tại và hiển thị thông tin tóm tắt về mỗi tùy chọn." }
  },
  {
    id: 103,
    topicId: 6,
    question: "Which two types of traffic are processed by the Routing Engine? (Choose two.)",
    options: [
      "Transit traffic",
      "Management traffic",
      "Line-card traffic",
      "Control traffic"
    ],
    correct: [1, 3],
    multiSelect: true,
    explanation: { en: "The Routing Engine processes management traffic (SSH, SNMP) and control traffic (routing protocols, keepalives). Transit traffic is handled by the PFE.", vi: "Routing Engine (RE) xử lý lưu lượng quản lý (SSH, SNMP) và lưu lượng điều khiển (control traffic - giao thức định tuyến, keepalives). Lưu lượng transit (transit traffic) được xử lý bởi PFE." }
  },
  {
    id: 104,
    topicId: 6,
    question: "Troubleshooting scenario:\nHost IP: 10.20.45.178/21\nGateway IP: 10.20.40.1/21\nDestination IP: 10.20.50.25\n\nWhich two statements are correct? (Choose two.)",
    options: [
      "The host subnet is 10.20.40.0/21.",
      "The broadcast address for the destination's subnet is 10.20.55.255.",
      "The subnet supports 2,046 addresses.",
      "The network address for the host's subnet is 10.20.44.0."
    ],
    correct: [0, 2],
    multiSelect: true,
    explanation: { en: "/21 = 2^11 = 2048 addresses, minus 2 = 2046 usable. 10.20.45.178/21: 45 = 00101101, mask at bit 5, so network = 10.20.40.0/21 (40 = 00101000).", vi: "/21 = 2^11 = 2048 địa chỉ, trừ 2 = 2046 địa chỉ khả dụng. 10.20.45.178/21: 45 = 00101101, mask ở bit 5, nên network = 10.20.40.0/21 (40 = 00101000)." }
  },
  {
    id: 105,
    topicId: 6,
    question: "Which character is used to filter the command output in the Junos CLI?",
    options: ["|", "?", ">", "<"],
    correct: [0],
    multiSelect: false,
    explanation: { en: "The pipe character '|' is used to filter command output, similar to Unix. Example: 'show interfaces | match ge-0/0/0'.", vi: "Ký tự pipe '|' được sử dụng để lọc (filter) kết quả đầu ra của lệnh (command output), tương tự như Unix. Ví dụ: 'show interfaces | match ge-0/0/0'." }
  },
  {
    id: 106,
    topicId: 6,
    question: "You must securely log in to a Junos device to perform maintenance.\n\nWhich command would you use?",
    options: [
      "ftp 172.16.10.1",
      "traceroute 172.16.10.1",
      "telnet 172.16.10.1",
      "ssh 172.16.10.1"
    ],
    correct: [3],
    multiSelect: false,
    explanation: { en: "SSH provides encrypted, secure remote access. FTP is for file transfer, telnet is unencrypted, and traceroute is a diagnostic tool.", vi: "SSH cung cấp quyền truy cập từ xa (remote access) bảo mật và được mã hóa. FTP dùng để truyền tệp, telnet không được mã hóa, và traceroute là một công cụ chuẩn đoán (diagnostic tool)." }
  },
  {
    id: 107,
    topicId: 6,
    question: "Which statement accurately describes the Junos OS CLI?",
    options: [
      "The operational mode CLI is used to make persistent changes.",
      "Changes in configuration mode immediately affect the active configuration.",
      "The commit confirmed 5 command activates the candidate configuration and automatically reverts if not confirmed in 5 minutes.",
      "The rollback 0 command restores the device to factory defaults."
    ],
    correct: [2],
    multiSelect: false,
    explanation: { en: "'commit confirmed 5' is a safety mechanism: it activates the config but automatically reverts after 5 minutes unless confirmed with another commit. This prevents lockouts from bad configs.", vi: "Lệnh 'commit confirmed 5' là một cơ chế an toàn: nó kích hoạt (activate) cấu hình nhưng tự động revert sau 5 phút trừ khi được xác nhận (confirmed) bằng một lệnh commit khác. Điều này ngăn ngừa lockouts do cấu hình sai." }
  }
];
