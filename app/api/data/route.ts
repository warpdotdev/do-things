import { ObjectData, ObjectType } from '@/types/object';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/**
 * Interface matching the YAML structure in the objects directory
 */
interface YamlObject {
  title: string;
  description: string;
  type: keyof typeof ObjectType;
  link: string;
  author: string;
  date_added: string;
  tags: string[];
}

export function GET() {
  try {
    const objectsDir = path.join(process.cwd(), 'public', 'objects');
    const files = fs.readdirSync(objectsDir);

    const objects: ObjectData[] = files
      .filter(file => file.endsWith('.yaml') && file !== 'duplicate-me.yaml') // exclude duplicate-me.yaml
      .map(file => {
        const filePath = path.join(objectsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const data = yaml.load(content) as YamlObject;

        // Validate required fields
        if (!data.title || !data.description || !data.type || !data.link || !data.author || !data.date_added) {
          throw new Error(`Missing required fields in ${file}`);
        }

        // Validate type is one of the allowed values
        if (!Object.keys(ObjectType).includes(data.type)) {
          throw new Error(`Invalid type "${data.type}" in ${file}. Must be one of: ${Object.keys(ObjectType).join(', ')}`);
        }

        return {
          title: data.title,
          description: data.description,
          type: ObjectType[data.type],
          link: data.link,
          tags: data.tags || [],
          dateAdded: data.date_added,
          author: data.author
        };
      });

    return NextResponse.json(objects);
  } catch (error) {
    console.error('Error reading data:', error);
    return NextResponse.json(
      {
        error: 'Failed to load data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
