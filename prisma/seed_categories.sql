-- =============================================================================
-- Categories table – "3nconnect" schema
-- Pattern: Parent Reference + Ancestors Array (Materialized Path hybrid)
--
-- ancestors  : GIN-indexed TEXT[] → fast "get all descendants" query:
--              WHERE 'cat_003' = ANY(ancestors)
-- slug       : SEO-friendly URL segment, unique
-- sort_order : display order within the same parent
-- =============================================================================

-- ────────────────────────────────────────────────────────────────────────────
-- 1. CREATE TABLE
-- ────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "3nconnect".categories (
  id          TEXT           PRIMARY KEY,
  name        TEXT           NOT NULL,
  slug        TEXT           NOT NULL,
  parent_id   TEXT           REFERENCES "3nconnect".categories(id) ON DELETE SET NULL,
  ancestors   TEXT[]         NOT NULL DEFAULT '{}',
  level       SMALLINT       NOT NULL DEFAULT 0,
  sort_order  SMALLINT       NOT NULL DEFAULT 0,
  image_url   TEXT,
  is_active   BOOLEAN        NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ(6) NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ(6),

  CONSTRAINT categories_slug_unique UNIQUE (slug)
);

-- ────────────────────────────────────────────────────────────────────────────
-- 2. INDEXES
-- ────────────────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_categories_parent_id  ON "3nconnect".categories (parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_level      ON "3nconnect".categories (level);
CREATE INDEX IF NOT EXISTS idx_categories_sort_order ON "3nconnect".categories (sort_order);
CREATE INDEX IF NOT EXISTS idx_categories_is_active  ON "3nconnect".categories (is_active);
-- GIN index enables: WHERE 'cat_003' = ANY(ancestors)
CREATE INDEX IF NOT EXISTS idx_categories_ancestors  ON "3nconnect".categories USING GIN (ancestors);

-- ────────────────────────────────────────────────────────────────────────────
-- 3. SEED DATA  (66 rows)
-- ────────────────────────────────────────────────────────────────────────────
INSERT INTO "3nconnect".categories
  (id, name, slug, parent_id, ancestors, level, sort_order, image_url, is_active, created_at, updated_at)
VALUES

-- ── Level 0 : Root categories ────────────────────────────────────────────────
('cat_001', 'Biosafety Cabinet / CleanBench / Hood', 'biosafety-cabinet-cleanbench-hood', NULL, '{}',           0,  1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_002', 'Cell Culture',                          'cell-culture',                      NULL, '{}',           0,  2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_003', 'Equipment & Instrument',                'equipment-instrument',               NULL, '{}',           0,  3, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_004', 'Filtration',                            'filtration',                         NULL, '{}',           0,  4, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_005', 'Health & Aesthetics',                   'health-aesthetics',                  NULL, '{}',           0,  5, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_006', 'Hygiene & Cuisine',                     'hygiene-cuisine',                    NULL, '{}',           0,  6, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_007', 'Microbiology',                          'microbiology',                       NULL, '{}',           0,  7, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_008', 'Plasticware & Supplies',                'plasticware-supplies',               NULL, '{}',           0,  8, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_009', 'Protein & Cell Analysis',               'protein-cell-analysis',              NULL, '{}',           0,  9, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 1 : cat_001 ────────────────────────────────────────────────────────
('cat_011', 'Biosafety Cabinet (BSC)', 'biosafety-cabinet-bsc', 'cat_001', '{cat_001}', 1, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 1 : cat_003 ────────────────────────────────────────────────────────
('cat_031', 'Liquid Handling',               'liquid-handling',               'cat_003', '{cat_003}', 1,  1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_032', 'Centrifuge',                    'centrifuge',                    'cat_003', '{cat_003}', 1,  2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_033', 'Water Bath / Circulator',       'water-bath-circulator',         'cat_003', '{cat_003}', 1,  3, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_034', 'Mixing Device',                 'mixing-device',                 'cat_003', '{cat_003}', 1,  4, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_035', 'Spectrophotometer & Elisa',     'spectrophotometer-elisa',       'cat_003', '{cat_003}', 1,  5, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_036', 'Incubator',                     'incubator',                     'cat_003', '{cat_003}', 1,  6, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_037', 'Homogenizer / Overhead Stirrer','homogenizer-overhead-stirrer',  'cat_003', '{cat_003}', 1,  7, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_038', 'Shaker',                        'shaker',                        'cat_003', '{cat_003}', 1,  8, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_039', 'Desiccator',                    'desiccator',                    'cat_003', '{cat_003}', 1,  9, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_040', 'Liquid Nitrogen Storage',       'liquid-nitrogen-storage',       'cat_003', '{cat_003}', 1, 10, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_041', 'Molecular Biology Equipment',   'molecular-biology-equipment',   'cat_003', '{cat_003}', 1, 11, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_042', 'Transport Box',                 'transport-box',                 'cat_003', '{cat_003}', 1, 12, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_043', 'Lab Support Equipment',         'lab-support-equipment',         'cat_003', '{cat_003}', 1, 13, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 1 : cat_004 ────────────────────────────────────────────────────────
('cat_044', 'Peristaltic Pump', 'peristaltic-pump', 'cat_004', '{cat_004}', 1, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_045', 'Vacuum Pump',      'vacuum-pump',      'cat_004', '{cat_004}', 1, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 1 : cat_005 ────────────────────────────────────────────────────────
('cat_051', 'Dermatology Equipment', 'dermatology-equipment', 'cat_005', '{cat_005}', 1, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 1 : cat_006 ────────────────────────────────────────────────────────
('cat_061', 'Cryogenic Cooking', 'cryogenic-cooking', 'cat_006', '{cat_006}', 1, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 1 : cat_007 ────────────────────────────────────────────────────────
('cat_071', 'Stomacher', 'stomacher', 'cat_007', '{cat_007}', 1, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 1 : cat_008 ────────────────────────────────────────────────────────
('cat_081', 'Tubes',                  'tubes',                 'cat_008', '{cat_008}', 1, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_082', 'Boxes & Racks',          'boxes-racks',           'cat_008', '{cat_008}', 1, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_083', 'Containers',             'containers',            'cat_008', '{cat_008}', 1, 3, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_084', 'Pipette Tips',           'pipette-tips',          'cat_008', '{cat_008}', 1, 4, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_085', 'Disposable Pipette',     'disposable-pipette',    'cat_008', '{cat_008}', 1, 5, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_086', 'PPE / Safety Wear',      'ppe-safety-wear',       'cat_008', '{cat_008}', 1, 6, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_087', 'Storage & Organization', 'storage-organization',  'cat_008', '{cat_008}', 1, 7, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 1 : cat_009 ────────────────────────────────────────────────────────
('cat_091', 'Automate Cell Counter', 'automate-cell-counter', 'cat_009', '{cat_009}', 1, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_031 (Liquid Handling) ──────────────────────────────────────
('cat_311', 'Auto Pipette', 'auto-pipette', 'cat_031', '{cat_003,cat_031}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_312', 'Dispensor',    'dispensor',    'cat_031', '{cat_003,cat_031}', 2, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_032 (Centrifuge) ───────────────────────────────────────────
('cat_321', 'Low Speed Centrifuge',        'low-speed-centrifuge',        'cat_032', '{cat_003,cat_032}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_322', 'High Speed Centrifuge',       'high-speed-centrifuge',       'cat_032', '{cat_003,cat_032}', 2, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_323', 'Rotor & Accessories',         'rotor-accessories',           'cat_032', '{cat_003,cat_032}', 2, 3, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_324', 'Immunohematology Centrifuge', 'immunohematology-centrifuge', 'cat_032', '{cat_003,cat_032}', 2, 4, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_325', 'PRP Centrifuge',              'prp-centrifuge',              'cat_032', '{cat_003,cat_032}', 2, 5, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_033 (Water Bath / Circulator) ──────────────────────────────
('cat_331', 'Bead Bath', 'bead-bath', 'cat_033', '{cat_003,cat_033}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_034 (Mixing Device) ────────────────────────────────────────
('cat_341', 'Vortex Mixer', 'vortex-mixer', 'cat_034', '{cat_003,cat_034}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_035 (Spectrophotometer & Elisa) ────────────────────────────
('cat_351', 'UV/Visible Spectrophotometer', 'uv-visible-spectrophotometer', 'cat_035', '{cat_003,cat_035}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_352', 'Elisa Reader',                 'elisa-reader',                 'cat_035', '{cat_003,cat_035}', 2, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_353', 'NIR Spectrophotometer',        'nir-spectrophotometer',        'cat_035', '{cat_003,cat_035}', 2, 3, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_354', 'Fluorometer',                  'fluorometer',                  'cat_035', '{cat_003,cat_035}', 2, 4, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_036 (Incubator) ────────────────────────────────────────────
('cat_361', 'General Incubator',    'general-incubator',    'cat_036', '{cat_003,cat_036}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_362', 'Biochemical Incubator','biochemical-incubator','cat_036', '{cat_003,cat_036}', 2, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_037 (Homogenizer) ──────────────────────────────────────────
('cat_371', 'Homogenizer', 'homogenizer', 'cat_037', '{cat_003,cat_037}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_038 (Shaker) ───────────────────────────────────────────────
('cat_381', 'Microplate Shaker', 'microplate-shaker', 'cat_038', '{cat_003,cat_038}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_040 (Liquid Nitrogen Storage) ──────────────────────────────
('cat_401', 'Liquid Nitrogen Accessories', 'liquid-nitrogen-accessories', 'cat_040', '{cat_003,cat_040}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_402', 'Liquid Nitrogen Tank',        'liquid-nitrogen-tank',        'cat_040', '{cat_003,cat_040}', 2, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_041 (Molecular Biology Equipment) ──────────────────────────
('cat_411', 'Gel Electrophoresis',                      'gel-electrophoresis',                      'cat_041', '{cat_003,cat_041}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_412', 'Automated Nucleic Acid Extraction System', 'automated-nucleic-acid-extraction-system', 'cat_041', '{cat_003,cat_041}', 2, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_043 (Lab Support Equipment) ────────────────────────────────
('cat_431', 'Clamps & Stands', 'clamps-stands', 'cat_043', '{cat_003,cat_043}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_081 (Tubes) ────────────────────────────────────────────────
('cat_811', 'Cryovial',    'cryovial',    'cat_081', '{cat_008,cat_081}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_812', 'Conical Tube','conical-tube','cat_081', '{cat_008,cat_081}', 2, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_082 (Boxes & Racks) ────────────────────────────────────────
('cat_821', 'Tube Rack',  'tube-rack',  'cat_082', '{cat_008,cat_082}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_822', 'Freezer Box','freezer-box','cat_082', '{cat_008,cat_082}', 2, 2, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),
('cat_823', 'Tip Box',    'tip-box',    'cat_082', '{cat_008,cat_082}', 2, 3, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_083 (Containers) ───────────────────────────────────────────
('cat_831', 'Staining Containers', 'staining-containers', 'cat_083', '{cat_008,cat_083}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_085 (Disposable Pipette) ───────────────────────────────────
('cat_851', 'Dropper', 'dropper', 'cat_085', '{cat_008,cat_085}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00'),

-- ── Level 2 : cat_087 (Storage & Organization) ───────────────────────────────
('cat_871', 'Slide Storage / Slide Box', 'slide-storage-slide-box', 'cat_087', '{cat_008,cat_087}', 2, 1, NULL, TRUE, '2026-05-11 00:00:00+00', '2026-05-11 00:00:00+00')

ON CONFLICT (id) DO NOTHING;

-- ────────────────────────────────────────────────────────────────────────────
-- 4. USEFUL QUERY EXAMPLES
-- ────────────────────────────────────────────────────────────────────────────
-- Get all root categories (for main menu):
--   SELECT * FROM "3nconnect".categories WHERE parent_id IS NULL ORDER BY sort_order;
--
-- Get direct children of a category:
--   SELECT * FROM "3nconnect".categories WHERE parent_id = 'cat_003' ORDER BY sort_order;
--
-- Get ALL descendants of 'Equipment & Instrument' (any depth):
--   SELECT * FROM "3nconnect".categories WHERE 'cat_003' = ANY(ancestors) ORDER BY level, sort_order;
--
-- Breadcrumb for a leaf node (ancestors array already contains the path):
--   SELECT id, name, slug FROM "3nconnect".categories
--   WHERE id = ANY(ARRAY['cat_003','cat_032','cat_321'])
--   ORDER BY level;
--
-- Count products per root category (after adding category_id to products):
--   SELECT c.id, c.name, COUNT(p.id) AS product_count
--   FROM "3nconnect".categories c
--   LEFT JOIN "3nconnect".products p ON p.category_id = c.id OR c.id = ANY(
--     SELECT unnest(c2.ancestors) FROM "3nconnect".categories c2 WHERE c2.id = p.category_id
--   )
--   WHERE c.level = 0
--   GROUP BY c.id, c.name;
