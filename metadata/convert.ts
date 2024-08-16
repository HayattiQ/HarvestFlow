import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  'Lending Amount': string;
  Crypto: string;
  Country: string;
  Category: string;
  'Asset ID': string;
  Background: string;
  Skin: string;
  Message: string;
  Collaboration: string;
}

interface JSONOutput {
  name: string;
  description: string;
  image: string;
  attributes: Array<{ trait_type: string; value: string }>;
}

const inputFile = 'metadata.csv';
const outputDir = 'json';

// CSVファイルを読み込む
const csvData = fs.readFileSync(inputFile, 'utf8');

// CSVをパースする
const records: NFTMetadata[] = parse(csvData, {
  columns: true,
  skip_empty_lines: true,
});

// 出力ディレクトリを作成（存在しない場合）
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 各レコードを処理してJSONファイルを生成
records.forEach((record, index) => {
  const jsonOutput: JSONOutput = {
    name: record.name,
    description: record.description,
    image: record.image,
    attributes: [
      { trait_type: 'Lending Amount', value: record['Lending Amount'] },
      { trait_type: 'Crypto', value: record.Crypto },
      { trait_type: 'Country', value: record.Country },
      { trait_type: 'Category', value: record.Category },
      { trait_type: 'Asset ID', value: record['Asset ID'] },
      { trait_type: 'Background', value: record.Background },
      { trait_type: 'Skin', value: record.Skin },
      { trait_type: 'Message', value: record.Message },
      { trait_type: 'Collaboration', value: record.Collaboration },
    ],
  };

  const outputFile = path.join(outputDir, `${index + 1}`);
  fs.writeFileSync(outputFile, JSON.stringify(jsonOutput, null, 2));
});
