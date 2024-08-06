-- Cria a extensão para UUID se não existir
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Cria a tabela de categorias com timestamps e restrição de unicidade para 'name'
CREATE TABLE IF NOT EXISTS categories (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE, -- Adiciona restrição de unicidade
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (id)
);

-- Cria a tabela de contatos com timestamps e referência para categorias
CREATE TABLE IF NOT EXISTS contacts (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(255) NOT NULL,
  category_id uuid NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Cria a função para atualizar o campo updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Cria o trigger para a tabela categories
CREATE TRIGGER trigger_update_categories_updated_at
BEFORE UPDATE ON categories
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Cria o trigger para a tabela contacts
CREATE TRIGGER trigger_update_contacts_updated_at
BEFORE UPDATE ON contacts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();
