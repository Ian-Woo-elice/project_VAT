// ════════════════════════════════════════════
// 인스턴스 가격표 (Runbox / ECI 공통 적용)
// 단위: 원/시간
// ════════════════════════════════════════════
const PRICING = {
  gpu: [
    { id: 'G-NBTHS-1440', group: 'B200', name: '8 x B200 180GB SXM',  vram: '1440GB', cpu: '192vCore', ram: '1920GiB', ondemand: 62400, month1: 55760, month12: 49320 },
    { id: 'G-NBTHS-720',  group: 'B200', name: '4 x B200 180GB SXM',  vram: '720GB',  cpu: '96vCore',  ram: '960GiB',  ondemand: 31360, month1: 27880, month12: 24660 },
    { id: 'G-NBTHS-360',  group: 'B200', name: '2 x B200 180GB SXM',  vram: '360GB',  cpu: '48vCore',  ram: '480GiB',  ondemand: 15720, month1: 13940, month12: 12330 },
    { id: 'G-NBTHS-180',  group: 'B200', name: 'B200 180GB SXM',       vram: '180GB',  cpu: '24vCore',  ram: '240GiB',  ondemand:  7870, month1:  6970, month12:  6170 },
    { id: 'G-NHHS-640',   group: 'H100', name: '8 x H100 80GB SXM',   vram: '640GB',  cpu: '192vCore', ram: '1920GiB', ondemand: 33600, month1: 31080, month12: 26480 },
    { id: 'G-NHHS-320',   group: 'H100', name: '4 x H100 80GB SXM',   vram: '320GB',  cpu: '96vCore',  ram: '960GiB',  ondemand: 16960, month1: 15460, month12: 13160 },
    { id: 'G-NHHS-160',   group: 'H100', name: '2 x H100 80GB SXM',   vram: '160GB',  cpu: '48vCore',  ram: '480GiB',  ondemand:  8520, month1:  7730, month12:  6580 },
    { id: 'G-NHHS-80',    group: 'H100', name: 'H100 80GB SXM',        vram: '80GB',   cpu: '24vCore',  ram: '240GiB',  ondemand:  4270, month1:  3870, month12:  3290 },
    { id: 'G-NAHP-320',   group: 'A100', name: '4 x A100 80GB PCIe',  vram: '320GB',  cpu: '64vCore',  ram: '768GiB',  ondemand:  7880, month1:  7380, month12:  6320 },
    { id: 'G-NAHP-160',   group: 'A100', name: '2 x A100 80GB PCIe',  vram: '160GB',  cpu: '32vCore',  ram: '384GiB',  ondemand:  3980, month1:  3690, month12:  3160 },
    { id: 'G-NAHP-80',    group: 'A100', name: 'A100 80GB PCIe',       vram: '80GB',   cpu: '16vCore',  ram: '192GiB',  ondemand:  2000, month1:  1850, month12:  1580 },
  ],
  npu: [
    { id: 'N-FR-48', name: 'FuriosaAI Renegade 48GB',    vram: '48GB', cpu: '16vCore', ram: '192GiB', ondemand: 4250, month1: null, month12: null },
    { id: 'N-FW-64', name: '4 x FuriosaAI Warboy 16GB',  vram: '64GB', cpu: '16vCore', ram: '192GiB', ondemand: 5600, month1: null, month12: null },
    { id: 'N-FW-32', name: '2 x FuriosaAI Warboy 16GB',  vram: '32GB', cpu: '8vCore',  ram: '96GiB',  ondemand: 2800, month1: null, month12: null },
    { id: 'N-FW-16', name: 'FuriosaAI Warboy 16GB',      vram: '16GB', cpu: '4vCore',  ram: '48GiB',  ondemand: 1400, month1: null, month12: null },
  ],
  // MIG: Runbox 전용 (A100 PCIe MIG 파티션)
  mig: [
    { id: 'G-NAHPM-40', name: 'A100 80GB PCIe MIG 3g-40GB', vram: '40GB', cpu: '8vCore',  ram: '96GiB',  ondemand: 1380, month1: 1130, month12: 1040 },
    { id: 'G-NAHPM-20', name: 'A100 80GB PCIe MIG 2g-20GB', vram: '20GB', cpu: '4vCore',  ram: '48GiB',  ondemand:  690, month1:  620, month12:  550 },
    { id: 'G-NAHPM-10', name: 'A100 80GB PCIe MIG 1g-10GB', vram: '10GB', cpu: '2vCore',  ram: '24GiB',  ondemand:  340, month1:  290, month12:  280 },
  ],
  cpu: [
    { id: 'M-16', name: 'M-16', cpu: '16vCore', ram: '64GiB', ondemand: 960, month1: 960, month12: 960 },
    { id: 'M-8',  name: 'M-8',  cpu: '8vCore',  ram: '32GiB', ondemand: 480, month1: 480, month12: 480 },
    { id: 'M-4',  name: 'M-4',  cpu: '4vCore',  ram: '16GiB', ondemand: 240, month1: 240, month12: 240 },
    { id: 'M-2',  name: 'M-2',  cpu: '2vCore',  ram: '8GiB',  ondemand: 120, month1: 120, month12: 120 },
    { id: 'C-16', name: 'C-16', cpu: '16vCore', ram: '32GiB', ondemand: 800, month1: 800, month12: 800 },
    { id: 'C-8',  name: 'C-8',  cpu: '8vCore',  ram: '16GiB', ondemand: 400, month1: 400, month12: 400 },
    { id: 'C-4',  name: 'C-4',  cpu: '4vCore',  ram: '8GiB',  ondemand: 200, month1: 200, month12: 200 },
    { id: 'C-2',  name: 'C-2',  cpu: '2vCore',  ram: '4GiB',  ondemand: 100, month1: 100, month12: 100 },
  ],
};

const STORAGE_RATES = {
  block:  0.15,   // 원/GiB/시간
  object: 0.035,  // 원/GiB/시간
};

const ECI_NET = {
  publicIp:   5.5,   // 원/개/시간
  publicZone: 0.10,  // 소계 × 10%
  infiniband: 0.15,  // 인스턴스 비용 × 15%
};
