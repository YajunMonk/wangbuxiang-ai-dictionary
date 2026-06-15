window.AI_DICT_DATA = {
  "generatedAt": "2026-06-15T14:21:35.302Z",
  "sourceRoot": "02_领域/AI能力/AI概念字典",
  "layers": [
    {
      "id": "model",
      "name": "模型层",
      "english": "Model",
      "stage": "Stage 01",
      "short": "AI 本身有什么能力",
      "color": "#6ee7f9",
      "count": 5
    },
    {
      "id": "instruction",
      "name": "指令层",
      "english": "Instruction",
      "stage": "Stage 02",
      "short": "人怎么把任务讲清楚",
      "color": "#ffb84d",
      "count": 4
    },
    {
      "id": "context",
      "name": "上下文层",
      "english": "Context",
      "stage": "Stage 03",
      "short": "AI 怎么拿到足够信息",
      "color": "#8ef28b",
      "count": 8
    },
    {
      "id": "action",
      "name": "行动层",
      "english": "Action",
      "stage": "Stage 04",
      "short": "AI 怎么调用工具和推进任务",
      "color": "#ff6b6b",
      "count": 11
    },
    {
      "id": "evaluation",
      "name": "评估层",
      "english": "Evaluation",
      "stage": "Stage 05",
      "short": "怎么检查、纠错和兜底",
      "color": "#c6a5ff",
      "count": 10
    }
  ],
  "concepts": [
    {
      "id": "上下文窗口",
      "title": "上下文窗口（Context Window）",
      "chinese": "上下文窗口",
      "english": "Context Window",
      "layer": "model",
      "layerName": "模型层",
      "sourceLevel": "待补",
      "path": "10_模型层/上下文窗口.md",
      "audio": "audio/上下文窗口.m4a",
      "oneLine": "上下文窗口是模型一次能看到的最大信息范围。",
      "solves": [
        "决定一次对话或任务里能放多少材料。",
        "影响模型能否理解长文档、长代码和多轮历史。",
        "影响成本、速度和注意力分配。"
      ],
      "not": [
        "不是长期记忆。",
        "不是资料越多效果越好。",
        "不是检索系统的替代品。"
      ],
      "mistakes": [
        "以为上下文窗口足够大，就不需要 RAG。",
        "把所有历史都塞进去，不做筛选和压缩。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "系统规则、用户历史、外部资料、工具结果。"
        },
        {
          "label": "处理",
          "value": "模型只能基于窗口内信息生成答案。"
        },
        {
          "label": "输出",
          "value": "回答长度也会占用窗口。"
        },
        {
          "label": "风险",
          "value": "重要信息超出窗口，或被无关信息稀释。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "token",
        "上下文-context",
        "上下文工程-context-engineering",
        "记忆-memory"
      ]
    },
    {
      "id": "幻觉-hallucination",
      "title": "幻觉（Hallucination）",
      "chinese": "幻觉",
      "english": "Hallucination",
      "layer": "model",
      "layerName": "模型层",
      "sourceLevel": "待补",
      "path": "10_模型层/幻觉 Hallucination.md",
      "audio": "audio/幻觉-hallucination.m4a",
      "oneLine": "幻觉是模型把不确定、错误或不存在的信息说得像真的一样。",
      "solves": [
        "它不是能力，而是一类必须管理的风险。"
      ],
      "not": [
        "不只是“事实错误”。",
        "也可能是引用错误、工具结果误读、推理链条断裂、格式伪造。"
      ],
      "mistakes": [
        "只靠提示词说“不要编造”。",
        "以为接入 RAG 后就不会幻觉。",
        "不区分事实性任务和创意性任务。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "问题、资料、检索结果、工具输出。"
        },
        {
          "label": "处理",
          "value": "模型在缺证据时仍可能补全。"
        },
        {
          "label": "输出",
          "value": "看似流畅但无法验证的答案。"
        },
        {
          "label": "风险",
          "value": "误导用户、污染知识库、造成错误决策。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "rag",
        "评估-eval",
        "trace",
        "护栏-guardrails"
      ]
    },
    {
      "id": "大语言模型-llm",
      "title": "大语言模型（LLM）",
      "chinese": "大语言模型",
      "english": "Large Language Model",
      "layer": "model",
      "layerName": "模型层",
      "sourceLevel": "待补",
      "path": "10_模型层/大语言模型 LLM.md",
      "audio": "audio/大语言模型-llm.m4a",
      "oneLine": "大语言模型是一个根据输入上下文生成语言、代码、结构化内容和推理步骤的概率模型。",
      "solves": [
        "把自然语言变成可交互的计算入口。",
        "能理解、改写、总结、推理、生成和转换信息。",
        "让普通人不用写代码也能调用复杂能力。"
      ],
      "not": [
        "不是数据库。事实不一定准。",
        "不是执行器。它本身不能真正打开文件、改数据或访问网页。",
        "不是稳定规则引擎。同样输入也可能因为上下文和参数产生差异。"
      ],
      "mistakes": [
        "以为换更强模型就能解决所有问题。",
        "把模型回答当事实，而不是当需要验证的候选答案。",
        "忽略 上下文 Context、工具调用 Tool Use 和 评估 Eval 的作用。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户任务、上下文、规则、工具结果。"
        },
        {
          "label": "处理",
          "value": "理解意图，生成下一步答案或行动请求。"
        },
        {
          "label": "输出",
          "value": "文本、代码、JSON、工具调用参数。"
        },
        {
          "label": "风险",
          "value": "幻觉 Hallucination、格式不稳、过度自信。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "token",
        "上下文窗口",
        "推理模型-reasoning-model",
        "结构化输出-structured-output"
      ]
    },
    {
      "id": "推理模型-reasoning-model",
      "title": "推理模型（Reasoning Model）",
      "chinese": "推理模型",
      "english": "Reasoning Model",
      "layer": "model",
      "layerName": "模型层",
      "sourceLevel": "待补",
      "path": "10_模型层/推理模型 Reasoning Model.md",
      "audio": "audio/推理模型-reasoning-model.m4a",
      "oneLine": "推理模型更擅长多步思考、复杂约束、代码、数学和需要规划的任务。",
      "solves": [
        "处理步骤多、约束多、容易出错的任务。",
        "在行动前先拆解、比较和检查。",
        "提高复杂任务的一次成功率。"
      ],
      "not": [
        "不是永远更适合。",
        "不是事实数据库。",
        "不是自动替代 评估 Eval。"
      ],
      "mistakes": [
        "简单任务也用高推理模型，导致成本和延迟变高。",
        "把推理模型的解释当成真实内部过程。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "复杂目标、规则、样例、工具结果。"
        },
        {
          "label": "处理",
          "value": "更重视分步推理和自检。"
        },
        {
          "label": "输出",
          "value": "计划、代码、分析、结构化结论。"
        },
        {
          "label": "风险",
          "value": "慢、贵、过度复杂化。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "大语言模型-llm",
        "计划-plan",
        "反思-reflection",
        "成本-cost"
      ]
    },
    {
      "id": "token",
      "title": "词元（Token）",
      "chinese": "词元",
      "english": "Token",
      "layer": "model",
      "layerName": "模型层",
      "sourceLevel": "待补",
      "path": "10_模型层/Token.md",
      "audio": "audio/token.m4a",
      "oneLine": "Token 是模型处理文本的基本单位，可以粗略理解为“被模型切开的文字片段”。",
      "solves": [
        "让模型把文本转成可计算的输入和输出。",
        "用来计算 上下文窗口、费用和响应长度。",
        "帮你判断一段资料能不能一次塞给模型。"
      ],
      "not": [
        "不是一个汉字，也不是一个英文单词。",
        "不是越多越好，Token 越多通常成本和延迟越高。"
      ],
      "mistakes": [
        "只关心 token 上限，不关心哪些内容真正有用。",
        "把长上下文当成万金油，导致模型注意力被噪音稀释。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户消息、系统规则、历史记录、检索资料。"
        },
        {
          "label": "处理",
          "value": "所有内容都会占用 token。"
        },
        {
          "label": "输出",
          "value": "回答也消耗 token。"
        },
        {
          "label": "风险",
          "value": "上下文太长、成本过高、关键信息被淹没。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "上下文窗口",
        "上下文工程-context-engineering",
        "成本-cost",
        "延迟-latency"
      ]
    },
    {
      "id": "few-shot",
      "title": "示例提示（Few-shot）",
      "chinese": "示例提示",
      "english": "Few-shot",
      "layer": "instruction",
      "layerName": "指令层",
      "sourceLevel": "待补",
      "path": "20_指令层/Few-shot.md",
      "audio": "audio/few-shot.m4a",
      "oneLine": "Few-shot 是用少量示例告诉模型“照这个样子做”。",
      "solves": [
        "让模型理解风格、格式、判断标准。",
        "比抽象规则更容易被模型模仿。",
        "适合分类、改写、抽取、评分等任务。"
      ],
      "not": [
        "不是训练模型。",
        "不是例子越多越好。",
        "不是替代 评估 Eval 的方法。"
      ],
      "mistakes": [
        "示例和真实任务差太远。",
        "只给好例子，不给反例。",
        "示例占满上下文，反而挤掉关键资料。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "2-5 个高质量示例。"
        },
        {
          "label": "处理",
          "value": "模型从示例中归纳模式。"
        },
        {
          "label": "输出",
          "value": "更接近示例的结果。"
        },
        {
          "label": "风险",
          "value": "过拟合示例、照搬无关细节。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "prompt",
        "上下文工程-context-engineering",
        "结构化输出-structured-output"
      ]
    },
    {
      "id": "prompt",
      "title": "提示词（Prompt）",
      "chinese": "提示词",
      "english": "Prompt",
      "layer": "instruction",
      "layerName": "指令层",
      "sourceLevel": "官方已核",
      "path": "20_指令层/Prompt.md",
      "audio": "audio/prompt.m4a",
      "oneLine": "Prompt 是你给模型的任务说明。",
      "solves": [
        "说明目标、背景、约束、角色、输出格式。",
        "引导模型按你希望的方向处理信息。",
        "降低模型误解任务的概率。"
      ],
      "not": [
        "不是魔法咒语。",
        "不是越长越好。",
        "不是完整产品能力。"
      ],
      "mistakes": [
        "迷信固定提示词模板。",
        "只写“请你专业一点”，但不给具体标准。",
        "用 prompt 解决本该由 工具调用 Tool Use 或 评估 Eval 解决的问题。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户自然语言任务。"
        },
        {
          "label": "处理",
          "value": "把任务变成模型可执行的指令。"
        },
        {
          "label": "输出",
          "value": "回答方向、格式和风格。"
        },
        {
          "label": "风险",
          "value": "目标模糊、约束冲突、输出不可检查。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "system-prompt",
        "few-shot",
        "结构化输出-structured-output",
        "上下文工程-context-engineering"
      ]
    },
    {
      "id": "结构化输出-structured-output",
      "title": "结构化输出（Structured Outputs）",
      "chinese": "结构化输出",
      "english": "Structured Outputs",
      "layer": "instruction",
      "layerName": "指令层",
      "sourceLevel": "官方已核",
      "path": "20_指令层/结构化输出 Structured Output.md",
      "audio": "audio/结构化输出-structured-output.m4a",
      "oneLine": "结构化输出是让模型按固定格式返回内容，比如 JSON、表格、字段清单或固定段落。",
      "solves": [
        "让结果可解析、可检查、可进入下一步流程。",
        "降低模型自由发挥导致的格式不稳。",
        "支撑自动化和工具调用。"
      ],
      "not": [
        "不是保证内容一定正确。",
        "不是把回答写成表格就够了。",
        "不是替代 schema 校验。"
      ],
      "mistakes": [
        "只在 prompt 里说“输出 JSON”，但没有字段约束。",
        "没有处理模型输出非法格式的情况。",
        "格式稳定了，但事实仍然没验证。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "字段定义、示例、schema、输出约束。"
        },
        {
          "label": "处理",
          "value": "模型填充结构。"
        },
        {
          "label": "输出",
          "value": "可被程序继续使用的数据。"
        },
        {
          "label": "风险",
          "value": "字段缺失、类型错误、内容编造。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "function-calling",
        "工作流-workflow",
        "评估-eval",
        "prompt"
      ]
    },
    {
      "id": "system-prompt",
      "title": "系统提示词（System Prompt）",
      "chinese": "系统提示词",
      "english": "System Prompt",
      "layer": "instruction",
      "layerName": "指令层",
      "sourceLevel": "待补",
      "path": "20_指令层/System Prompt.md",
      "audio": "audio/system-prompt.m4a",
      "oneLine": "System Prompt 是系统层面对模型行为的长期规则和边界。",
      "solves": [
        "统一产品里的助手身份、语气、限制和优先级。",
        "把用户每次不该重复说的规则前置。",
        "管理安全、格式、工具使用和拒绝边界。"
      ],
      "not": [
        "不是绝对安全锁。",
        "不是产品能力本身。",
        "不是越复杂越稳。"
      ],
      "mistakes": [
        "把所有业务逻辑都塞进 system prompt。",
        "规则写得太多，模型抓不到重点。",
        "缺少和 护栏 Guardrails、评估 Eval 的配合。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "产品设定、行为规则、安全边界。"
        },
        {
          "label": "处理",
          "value": "作为高优先级上下文影响模型回答。"
        },
        {
          "label": "输出",
          "value": "更稳定的助手行为。"
        },
        {
          "label": "风险",
          "value": "规则冲突、被用户输入诱导绕过。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "prompt",
        "prompt-injection",
        "护栏-guardrails",
        "结构化输出-structured-output"
      ]
    },
    {
      "id": "chunking",
      "title": "切块（Chunking）",
      "chinese": "切块",
      "english": "Chunking",
      "layer": "context",
      "layerName": "上下文层",
      "sourceLevel": "待补",
      "path": "30_上下文层/Chunking.md",
      "audio": "audio/chunking.m4a",
      "oneLine": "Chunking 是把长资料切成适合检索和放进上下文的小片段。",
      "solves": [
        "让长文档能进入检索系统。",
        "控制每个资料片段的长度和语义完整度。",
        "影响 RAG 的命中率和答案质量。"
      ],
      "not": [
        "不是随便按字数切。",
        "不是越小越好。",
        "不是一次性工作，常常需要根据任务调整。"
      ],
      "mistakes": [
        "切得太碎，模型看不到完整上下文。",
        "切得太粗，检索出来全是无关信息。",
        "不保留标题、来源、时间等元数据。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "文档、网页、笔记、记录。"
        },
        {
          "label": "处理",
          "value": "按标题、段落、主题、长度切分。"
        },
        {
          "label": "输出",
          "value": "可检索片段。"
        },
        {
          "label": "风险",
          "value": "片段失去语境，答案断章取义。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "embedding",
        "rag",
        "知识库",
        "上下文工程-context-engineering"
      ]
    },
    {
      "id": "上下文-context",
      "title": "上下文（Context）",
      "chinese": "上下文",
      "english": "Context",
      "layer": "context",
      "layerName": "上下文层",
      "sourceLevel": "待补",
      "path": "30_上下文层/上下文 Context.md",
      "audio": "audio/上下文-context.m4a",
      "oneLine": "上下文是模型当前能看到、并会用来生成答案的全部信息。",
      "solves": [
        "让模型知道任务背景、用户意图、参考资料和输出要求。",
        "把外部世界临时带进模型窗口。",
        "决定模型回答时“站在哪个现场”。"
      ],
      "not": [
        "不等于长期记忆。",
        "不等于 prompt 本身。",
        "不等于把所有资料都塞进去。"
      ],
      "mistakes": [
        "只优化一句 prompt，不设计资料、历史和工具结果的组织方式。",
        "上下文里规则互相冲突，模型只能猜哪个更重要。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "系统规则、用户输入、历史、资料、工具返回。"
        },
        {
          "label": "处理",
          "value": "模型根据上下文生成下一步。"
        },
        {
          "label": "输出",
          "value": "回答、工具调用、结构化数据。"
        },
        {
          "label": "风险",
          "value": "缺上下文会胡猜，乱上下文会跑偏。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "上下文窗口",
        "prompt",
        "system-prompt",
        "上下文工程-context-engineering"
      ]
    },
    {
      "id": "上下文工程-context-engineering",
      "title": "上下文工程（Context Engineering）",
      "chinese": "上下文工程",
      "english": "Context Engineering",
      "layer": "context",
      "layerName": "上下文层",
      "sourceLevel": "待补",
      "path": "30_上下文层/上下文工程 Context Engineering.md",
      "audio": "audio/上下文工程-context-engineering.m4a",
      "oneLine": "上下文工程是系统性设计模型在每一步应该看到什么、忽略什么、按什么顺序看。",
      "solves": [
        "让模型拿到刚好够用的信息。",
        "管理系统规则、用户输入、历史、知识库和工具结果。",
        "提高复杂任务的稳定性。"
      ],
      "not": [
        "不只是写 prompt。",
        "不只是拉长上下文窗口。",
        "不只是把资料全塞进去。"
      ],
      "mistakes": [
        "把所有历史都保留，导致重点丢失。",
        "检索资料未经筛选，模型被噪音误导。",
        "工具结果没有转成模型容易理解的格式。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "任务、历史、资料、工具输出。"
        },
        {
          "label": "处理",
          "value": "筛选、排序、压缩、标注优先级。"
        },
        {
          "label": "输出",
          "value": "高质量上下文包。"
        },
        {
          "label": "风险",
          "value": "信息缺失、顺序混乱、规则冲突。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "上下文-context",
        "上下文窗口",
        "rag",
        "记忆-memory"
      ]
    },
    {
      "id": "embedding",
      "title": "嵌入（Embedding）",
      "chinese": "嵌入",
      "english": "Embedding",
      "layer": "context",
      "layerName": "上下文层",
      "sourceLevel": "官方已核",
      "path": "30_上下文层/Embedding.md",
      "audio": "audio/embedding.m4a",
      "oneLine": "Embedding 是把文本、图片或其他内容变成一组数字，用来表示它们的语义位置。",
      "solves": [
        "让系统可以按“意思相近”搜索，而不是只按关键词搜索。",
        "是 RAG 和 向量数据库 的基础。",
        "帮助机器判断两段内容是否相关。"
      ],
      "not": [
        "不是原文内容本身。",
        "不是保证理解正确。",
        "不是完整知识库。"
      ],
      "mistakes": [
        "以为有 embedding 就等于能准确回答。",
        "忽略原始资料质量、切分方式和检索策略。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "文本片段、图片描述或其他内容。"
        },
        {
          "label": "处理",
          "value": "转成向量。"
        },
        {
          "label": "输出",
          "value": "可用于相似度搜索的数字表示。"
        },
        {
          "label": "风险",
          "value": "语义相似不等于答案正确。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "向量数据库",
        "chunking",
        "rag",
        "知识库"
      ]
    },
    {
      "id": "知识库",
      "title": "知识库（Knowledge Base）",
      "chinese": "知识库",
      "english": "Knowledge Base",
      "layer": "context",
      "layerName": "上下文层",
      "sourceLevel": "待补",
      "path": "30_上下文层/知识库.md",
      "audio": "audio/知识库.m4a",
      "oneLine": "知识库是被整理、存储、检索和复用的资料集合。",
      "solves": [
        "把个人经验、业务资料、产品文档和案例沉淀下来。",
        "让 AI 可以基于外部资料工作。",
        "减少重复解释和重复查找。"
      ],
      "not": [
        "不是资料堆。",
        "不是越多越好。",
        "不是一接入 AI 就自动变聪明。"
      ],
      "mistakes": [
        "只收集，不整理。",
        "没有分层：原始资料、消化观点、发布稿、模板混在一起。",
        "不维护过期信息和冲突版本。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "文档、笔记、网页、对话、文件。"
        },
        {
          "label": "处理",
          "value": "清洗、分类、切片、索引、检索。"
        },
        {
          "label": "输出",
          "value": "可引用的上下文。"
        },
        {
          "label": "风险",
          "value": "垃圾进，垃圾出。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "rag",
        "chunking",
        "embedding",
        "记忆-memory"
      ]
    },
    {
      "id": "记忆-memory",
      "title": "记忆（Memory）",
      "chinese": "记忆",
      "english": "Memory",
      "layer": "context",
      "layerName": "上下文层",
      "sourceLevel": "待补",
      "path": "30_上下文层/记忆 Memory.md",
      "audio": "audio/记忆-memory.m4a",
      "oneLine": "记忆是系统跨会话保留的偏好、事实、历史状态或长期经验。",
      "solves": [
        "让 AI 不必每次从零认识用户和项目。",
        "保留长期偏好、常用规则和稳定事实。",
        "支撑个性化和连续协作。"
      ],
      "not": [
        "不是上下文窗口。",
        "不是知识库的全部。",
        "不是所有历史都应该保存。"
      ],
      "mistakes": [
        "把短期任务信息写成长期记忆。",
        "记忆不区分“事实”“偏好”“推测”。",
        "旧记忆过期后不更新。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户偏好、项目规则、历史选择。"
        },
        {
          "label": "处理",
          "value": "筛选、写入、读取、更新。"
        },
        {
          "label": "输出",
          "value": "影响未来交互的上下文。"
        },
        {
          "label": "风险",
          "value": "记错、过期、越权、隐私问题。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "上下文-context",
        "知识库",
        "rag",
        "护栏-guardrails"
      ]
    },
    {
      "id": "rag",
      "title": "检索增强生成（RAG）",
      "chinese": "检索增强生成",
      "english": "Retrieval-Augmented Generation",
      "layer": "context",
      "layerName": "上下文层",
      "sourceLevel": "官方已核",
      "path": "30_上下文层/RAG.md",
      "audio": "audio/rag.m4a",
      "oneLine": "RAG 是先从外部资料中检索相关内容，再让模型基于这些内容回答。",
      "solves": [
        "弥补模型不知道最新资料、私有资料和长尾事实的问题。",
        "降低 幻觉 Hallucination 风险。",
        "让答案可以更接近可追溯资料。"
      ],
      "not": [
        "不是“接个知识库就万事大吉”。",
        "不是长期记忆。",
        "不是保证答案一定正确。"
      ],
      "mistakes": [
        "资料质量差，却怪模型回答差。",
        "检索结果没命中，却要求模型准确回答。",
        "没有要求模型区分“资料里有”和“资料里没有”。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户问题。"
        },
        {
          "label": "处理",
          "value": "查询改写、检索、排序、塞入上下文、模型生成。"
        },
        {
          "label": "输出",
          "value": "基于资料的回答。"
        },
        {
          "label": "风险",
          "value": "检索错、引用错、模型混入猜测。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "embedding",
        "向量数据库",
        "chunking",
        "知识库",
        "评估-eval"
      ]
    },
    {
      "id": "向量数据库",
      "title": "向量数据库（Vector Database）",
      "chinese": "向量数据库",
      "english": "Vector Database",
      "layer": "context",
      "layerName": "上下文层",
      "sourceLevel": "待补",
      "path": "30_上下文层/向量数据库.md",
      "audio": "audio/向量数据库.m4a",
      "oneLine": "向量数据库用来存储和搜索 Embedding，让系统能找到语义相近的资料片段。",
      "solves": [
        "支撑大规模语义检索。",
        "让 AI 应用能从外部资料里找相关内容。",
        "是很多 RAG 系统的基础设施。"
      ],
      "not": [
        "不是知识整理本身。",
        "不是模型。",
        "不是一定比传统数据库更适合所有搜索。"
      ],
      "mistakes": [
        "把资料放进向量库，就以为知识库完成了。",
        "不处理重复、过期、冲突和低质量资料。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "资料片段和对应 embedding。"
        },
        {
          "label": "处理",
          "value": "根据查询向量找相似片段。"
        },
        {
          "label": "输出",
          "value": "候选资料。"
        },
        {
          "label": "风险",
          "value": "找得到相似内容，但不一定找得到正确答案。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "embedding",
        "chunking",
        "rag",
        "知识库"
      ]
    },
    {
      "id": "agent",
      "title": "智能体（Agent）",
      "chinese": "智能体",
      "english": "Agent",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "官方已核",
      "path": "40_行动层/Agent.md",
      "audio": "audio/agent.m4a",
      "oneLine": "Agent 是围绕一个目标，能观察状态、选择行动、调用工具、检查结果并继续推进的 AI 系统。",
      "solves": [
        "处理路径不完全确定的复杂任务。",
        "在多步骤任务中根据中间结果调整路线。",
        "把模型、上下文、工具和评估串起来。"
      ],
      "not": [
        "不是多角色聊天。",
        "不是单次问答。",
        "不是只要能调用工具就一定是 Agent。"
      ],
      "mistakes": [
        "把工作流包装成 Agent。",
        "没有停止条件，导致循环失控。",
        "没有检查机制，失败后继续胡编。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "目标、上下文、工具、约束。"
        },
        {
          "label": "处理",
          "value": "计划、行动、观察、修正。"
        },
        {
          "label": "输出",
          "value": "完成的任务或可解释的中间结果。"
        },
        {
          "label": "风险",
          "value": "越权行动、错误累积、成本失控。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "agent循环",
        "工具调用-tool-use",
        "计划-plan",
        "评估-eval"
      ]
    },
    {
      "id": "agent循环",
      "title": "智能体循环（Agent Loop）",
      "chinese": "智能体循环",
      "english": "Agent Loop",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "官方已核",
      "path": "40_行动层/Agent循环.md",
      "audio": "audio/agent循环.m4a",
      "oneLine": "Agent 循环是观察、计划、行动、检查、再行动的循环机制。",
      "solves": [
        "让 AI 不只是一次性回答，而是分步推进。",
        "让系统根据工具结果和环境反馈调整路线。",
        "支撑复杂任务的持续执行。"
      ],
      "not": [
        "不是无限循环。",
        "不是每一步都必须让模型决定。",
        "不是没有约束地自动执行。"
      ],
      "mistakes": [
        "没有明确停止条件。",
        "每一步都交给模型，导致不稳定。",
        "缺少 Trace，事后不知道哪里错了。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "目标、当前状态、可用工具。"
        },
        {
          "label": "处理",
          "value": "观察 -> 计划 -> 行动 -> 检查。"
        },
        {
          "label": "输出",
          "value": "下一步动作或完成状态。"
        },
        {
          "label": "风险",
          "value": "循环太长、成本高、错误被放大。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "agent",
        "计划-plan",
        "反思-reflection",
        "兜底-fallback"
      ]
    },
    {
      "id": "api",
      "title": "接口（API）",
      "chinese": "接口",
      "english": "Application Programming Interface",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "待补",
      "path": "40_行动层/API.md",
      "audio": "audio/api.m4a",
      "oneLine": "API 是软件系统之间互相请求和返回数据的接口。",
      "solves": [
        "让 AI 应用调用外部系统能力。",
        "让不同工具、数据库、服务可以连接起来。",
        "支撑自动化和产品集成。"
      ],
      "not": [
        "不是用户界面。",
        "不是模型能力本身。",
        "不是只要接上就一定稳定。"
      ],
      "mistakes": [
        "只关注能不能调通，不关注权限、限流、错误处理。",
        "API 返回的数据没有转成模型能理解的结构。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "请求参数、身份凭证。"
        },
        {
          "label": "处理",
          "value": "外部系统执行查询或动作。"
        },
        {
          "label": "输出",
          "value": "结构化结果或错误。"
        },
        {
          "label": "风险",
          "value": "权限泄露、限流、接口变更、失败未处理。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "function-calling",
        "工具调用-tool-use",
        "工作流-workflow",
        "日志-log"
      ]
    },
    {
      "id": "自动化-automation",
      "title": "自动化（Automation）",
      "chinese": "自动化",
      "english": "Automation",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "待补",
      "path": "40_行动层/自动化 Automation.md",
      "audio": "audio/自动化-automation.m4a",
      "oneLine": "自动化是让系统自动执行重复动作，减少人工操作。",
      "solves": [
        "提高效率。",
        "降低重复劳动。",
        "让稳定流程可以持续运行。"
      ],
      "not": [
        "不等于智能。",
        "不等于 Agent。",
        "不等于完全无人看管。"
      ],
      "mistakes": [
        "没先确认流程稳定，就急着自动化。",
        "没有失败提醒和回滚。",
        "把需要判断的环节也机械自动化。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "触发条件、规则、工具权限。"
        },
        {
          "label": "处理",
          "value": "按条件执行动作。"
        },
        {
          "label": "输出",
          "value": "完成的操作或通知。"
        },
        {
          "label": "风险",
          "value": "错误被放大、权限误用、无人发现失败。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "工作流-workflow",
        "工具调用-tool-use",
        "日志-log",
        "兜底-fallback"
      ]
    },
    {
      "id": "function-calling",
      "title": "函数调用（Function Calling）",
      "chinese": "函数调用",
      "english": "Function Calling",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "官方已核",
      "path": "40_行动层/Function Calling.md",
      "audio": "audio/function-calling.m4a",
      "oneLine": "Function Calling 是让模型按预设函数格式提出工具调用请求。",
      "solves": [
        "把自然语言意图转成结构化工具参数。",
        "让模型从“回答问题”走向“请求执行动作”。",
        "降低自由文本调用工具的不稳定性。"
      ],
      "not": [
        "不是模型真的执行函数。",
        "不是完整 Agent。",
        "不是安全边界本身。"
      ],
      "mistakes": [
        "以为模型调用了函数，就一定完成了动作。",
        "参数没有校验，导致工具执行错误。",
        "没有把工具返回结果再交给模型解释或检查。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户意图、函数描述、参数 schema。"
        },
        {
          "label": "处理",
          "value": "模型选择函数并填参数。"
        },
        {
          "label": "输出",
          "value": "函数调用请求。"
        },
        {
          "label": "风险",
          "value": "选错函数、参数不完整、越权请求。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "工具调用-tool-use",
        "api",
        "结构化输出-structured-output",
        "护栏-guardrails"
      ]
    },
    {
      "id": "mcp",
      "title": "模型上下文协议（MCP）",
      "chinese": "模型上下文协议",
      "english": "Model Context Protocol",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "官方已核",
      "path": "40_行动层/MCP.md",
      "audio": "audio/mcp.m4a",
      "oneLine": "MCP 可以理解为一种把外部工具、数据和上下文接给 AI 助手的标准化连接方式。",
      "solves": [
        "让不同工具用相对统一的方式暴露给模型。",
        "降低每个 AI 应用单独适配工具的成本。",
        "让 Agent 更容易访问文件、数据库、浏览器、业务系统等能力。"
      ],
      "not": [
        "不是模型。",
        "不是 Agent 本身。",
        "不是自动保证安全和质量。"
      ],
      "mistakes": [
        "以为接了 MCP 就有 Agent 能力。",
        "忽略工具权限、返回格式和错误处理。",
        "把 MCP 当成普通 API 的替代品，而不是连接协议。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "工具描述、资源、权限。"
        },
        {
          "label": "处理",
          "value": "把外部能力暴露给 AI 客户端。"
        },
        {
          "label": "输出",
          "value": "可被模型调用的工具或上下文。"
        },
        {
          "label": "风险",
          "value": "工具过多、权限过大、结果不可控。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "工具调用-tool-use",
        "api",
        "agent",
        "护栏-guardrails"
      ]
    },
    {
      "id": "多agent-multi-agent",
      "title": "多智能体（Multi-Agent）",
      "chinese": "多智能体",
      "english": "Multi-Agent",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "待补",
      "path": "40_行动层/多Agent Multi-Agent.md",
      "audio": "audio/多agent-multi-agent.m4a",
      "oneLine": "多 Agent 是多个有分工的 Agent 围绕同一目标协作。",
      "solves": [
        "把复杂任务拆给不同能力或视角。",
        "并行处理研究、执行、检查等工作。",
        "在需要多角色制衡时提高质量。"
      ],
      "not": [
        "不是多人设聊天。",
        "不是角色越多越好。",
        "不是天然比单 Agent 稳。"
      ],
      "mistakes": [
        "只有发言顺序，没有真实分工。",
        "没有统一目标和最终收束。",
        "结果冲突时没有仲裁机制。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "总目标、子任务、角色边界。"
        },
        {
          "label": "处理",
          "value": "分工、并行、汇总、冲突处理。"
        },
        {
          "label": "输出",
          "value": "合并后的结果。"
        },
        {
          "label": "风险",
          "value": "噪音变多、成本上升、责任不清。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "agent",
        "工作流-workflow",
        "评估-eval",
        "trace"
      ]
    },
    {
      "id": "计划-plan",
      "title": "计划（Plan）",
      "chinese": "计划",
      "english": "Plan",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "待补",
      "path": "40_行动层/计划 Plan.md",
      "audio": "audio/计划-plan.m4a",
      "oneLine": "计划是 Agent 在行动前对任务路径、步骤和风险的拆解。",
      "solves": [
        "避免模型直接跳到答案。",
        "把复杂任务拆成可执行步骤。",
        "让人能提前发现方向错误。"
      ],
      "not": [
        "不是越详细越好。",
        "不是不能调整。",
        "不是替代执行和检查。"
      ],
      "mistakes": [
        "计划写得很漂亮，但没有可验证动作。",
        "计划不随着中间结果更新。",
        "把不确定事实也写成确定结论。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "目标、约束、资源、风险。"
        },
        {
          "label": "处理",
          "value": "拆步骤、排顺序、设检查点。"
        },
        {
          "label": "输出",
          "value": "可执行路径。"
        },
        {
          "label": "风险",
          "value": "过度规划、忽略现实反馈。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "agent循环",
        "推理模型-reasoning-model",
        "人在回路-human-in-the-loop"
      ]
    },
    {
      "id": "反思-reflection",
      "title": "反思（Reflection）",
      "chinese": "反思",
      "english": "Reflection",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "待补",
      "path": "40_行动层/反思 Reflection.md",
      "audio": "audio/反思-reflection.m4a",
      "oneLine": "反思是让 Agent 回看当前结果，判断是否需要修正、重试或换路径。",
      "solves": [
        "发现明显错误和遗漏。",
        "在失败后调整策略。",
        "提升多步骤任务的稳定性。"
      ],
      "not": [
        "不是模型自言自语越多越好。",
        "不是可靠评估的替代品。",
        "不是所有任务都需要。"
      ],
      "mistakes": [
        "让模型检查自己，却没有外部标准。",
        "反思阶段没有接入真实结果。",
        "一直反思，迟迟不交付。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "计划、执行结果、标准、错误信息。"
        },
        {
          "label": "处理",
          "value": "比较预期和现实。"
        },
        {
          "label": "输出",
          "value": "修正动作、重试建议或停止判断。"
        },
        {
          "label": "风险",
          "value": "自我确认偏误、成本增加。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "agent循环",
        "评估-eval",
        "trace",
        "失败模式-failure-mode"
      ]
    },
    {
      "id": "工具调用-tool-use",
      "title": "工具调用（Tool Use）",
      "chinese": "工具调用",
      "english": "Tool Use",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "官方已核",
      "path": "40_行动层/工具调用 Tool Use.md",
      "audio": "audio/工具调用-tool-use.m4a",
      "oneLine": "工具调用是让 AI 使用外部工具完成查询、计算、写入、浏览、执行等动作。",
      "solves": [
        "让模型接触实时信息和真实系统。",
        "把“说”变成“做”。",
        "弥补模型不能直接访问外部世界的问题。"
      ],
      "not": [
        "不是所有任务都需要工具。",
        "不是工具越多越好。",
        "不是无需人工确认。"
      ],
      "mistakes": [
        "给模型太多工具，反而选择困难。",
        "工具结果没有校验就继续下一步。",
        "高风险动作没有 人在回路 Human-in-the-loop。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "任务目标、可用工具、权限。"
        },
        {
          "label": "处理",
          "value": "选择工具、填参数、执行、读取结果。"
        },
        {
          "label": "输出",
          "value": "真实数据或动作结果。"
        },
        {
          "label": "风险",
          "value": "误操作、权限过大、工具失败。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "function-calling",
        "api",
        "agent",
        "trace"
      ]
    },
    {
      "id": "工作流-workflow",
      "title": "工作流（Workflow）",
      "chinese": "工作流",
      "english": "Workflow",
      "layer": "action",
      "layerName": "行动层",
      "sourceLevel": "待补",
      "path": "40_行动层/工作流 Workflow.md",
      "audio": "audio/工作流-workflow.m4a",
      "oneLine": "工作流是一组固定步骤，用来稳定完成某类任务。",
      "solves": [
        "把重复任务标准化。",
        "降低每次重新思考流程的成本。",
        "适合规则稳定、路径清晰的任务。"
      ],
      "not": [
        "不等于 Agent。",
        "不一定需要大模型。",
        "不适合路径高度不确定的任务。"
      ],
      "mistakes": [
        "把所有 AI 自动化都叫 Agent。",
        "明明固定流程能解决，却强行上 Agent。",
        "流程里没有检查点。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "触发条件、材料、规则。"
        },
        {
          "label": "处理",
          "value": "按步骤执行。"
        },
        {
          "label": "输出",
          "value": "稳定交付物。"
        },
        {
          "label": "风险",
          "value": "异常情况处理不足，流程僵硬。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "自动化-automation",
        "agent",
        "工具调用-tool-use",
        "评估-eval"
      ]
    },
    {
      "id": "成本-cost",
      "title": "成本（Cost）",
      "chinese": "成本",
      "english": "Cost",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "待补",
      "path": "50_评估层/成本 Cost.md",
      "audio": "audio/成本-cost.m4a",
      "oneLine": "成本是 AI 应用运行时消耗的模型、工具、存储、计算和人工资源。",
      "solves": [
        "它帮助判断一个 AI 应用能不能持续使用和规模化。"
      ],
      "not": [
        "不只是 token 费用。",
        "不只是模型调用费用。",
        "不只是钱，也包括时间和人工审核成本。"
      ],
      "mistakes": [
        "演示阶段不计成本，上线后无法承受。",
        "简单任务使用过强模型。",
        "Agent 循环过长，工具调用太频繁。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "请求量、token、模型等级、工具调用、人工确认。"
        },
        {
          "label": "处理",
          "value": "计费、统计、优化。"
        },
        {
          "label": "输出",
          "value": "单次任务成本和整体成本。"
        },
        {
          "label": "风险",
          "value": "成本失控，商业模式无法成立。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "token",
        "推理模型-reasoning-model",
        "延迟-latency",
        "评估-eval"
      ]
    },
    {
      "id": "评估-eval",
      "title": "评估（Evals）",
      "chinese": "评估",
      "english": "Evaluation / Evals",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "官方已核",
      "path": "50_评估层/评估 Eval.md",
      "audio": "audio/评估-eval.m4a",
      "oneLine": "评估是用固定样本、标准和记录来判断 AI 系统表现是否稳定。",
      "solves": [
        "判断 prompt、模型、RAG、工具或 Agent 改动是否变好。",
        "找出系统常见失败原因。",
        "让 AI 产品从演示走向可维护。"
      ],
      "not": [
        "不是人工感觉。",
        "不是只看一次成功案例。",
        "不是上线后才补的东西。"
      ],
      "mistakes": [
        "只收集成功样本。",
        "没有明确通过标准。",
        "改了系统后不回测旧任务。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "测试集、评分标准、真实任务。"
        },
        {
          "label": "处理",
          "value": "批量运行、记录、评分、对比。"
        },
        {
          "label": "输出",
          "value": "成功率、失败类型、改进方向。"
        },
        {
          "label": "风险",
          "value": "测试集不代表真实场景。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "失败模式-failure-mode",
        "trace",
        "日志-log",
        "兜底-fallback"
      ]
    },
    {
      "id": "失败模式-failure-mode",
      "title": "失败模式（Failure Mode）",
      "chinese": "失败模式",
      "english": "Failure Mode",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "待补",
      "path": "50_评估层/失败模式 Failure Mode.md",
      "audio": "audio/失败模式-failure-mode.m4a",
      "oneLine": "失败模式是 AI 系统反复出现的典型失败类型。",
      "solves": [
        "让问题从“这次又错了”变成可分类、可改进。",
        "帮助设计评估、兜底和护栏。",
        "找出系统最脆弱的环节。"
      ],
      "not": [
        "不是单个 bug。",
        "不是用户抱怨集合。",
        "不是只记录模型错误。"
      ],
      "mistakes": [
        "每次失败都当孤立事件。",
        "不区分检索失败、工具失败、模型幻觉、权限失败。",
        "没有把失败样本回流到评估集。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "失败案例、日志、用户反馈。"
        },
        {
          "label": "处理",
          "value": "分类、归因、统计频率。"
        },
        {
          "label": "输出",
          "value": "失败模式清单和改进优先级。"
        },
        {
          "label": "风险",
          "value": "归因错误，改错方向。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "评估-eval",
        "日志-log",
        "trace",
        "兜底-fallback"
      ]
    },
    {
      "id": "兜底-fallback",
      "title": "兜底（Fallback）",
      "chinese": "兜底",
      "english": "Fallback",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "待补",
      "path": "50_评估层/兜底 Fallback.md",
      "audio": "audio/兜底-fallback.m4a",
      "oneLine": "兜底是主路径失败时的备用处理方案。",
      "solves": [
        "避免系统失败后直接崩掉或胡编。",
        "给用户可接受的下一步。",
        "降低高风险场景的损失。"
      ],
      "not": [
        "不是事后补救文案。",
        "不是所有失败都假装成功。",
        "不是替代根因修复。"
      ],
      "mistakes": [
        "工具失败后让模型猜结果。",
        "没有向用户说明哪些部分没完成。",
        "兜底路径没有测试过。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "错误、超时、低置信度、权限不足。"
        },
        {
          "label": "处理",
          "value": "重试、换工具、降级、暂停、转人工。"
        },
        {
          "label": "输出",
          "value": "备用结果或明确失败说明。"
        },
        {
          "label": "风险",
          "value": "兜底也失败，用户信任下降。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "失败模式-failure-mode",
        "人在回路-human-in-the-loop",
        "护栏-guardrails",
        "评估-eval"
      ]
    },
    {
      "id": "护栏-guardrails",
      "title": "护栏（Guardrails）",
      "chinese": "护栏",
      "english": "Guardrails",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "待补",
      "path": "50_评估层/护栏 Guardrails.md",
      "audio": "audio/护栏-guardrails.m4a",
      "oneLine": "护栏是限制 AI 行为边界、降低错误和风险的规则、检查和权限设计。",
      "solves": [
        "防止越权、误操作、违规输出。",
        "控制工具调用和敏感动作。",
        "让 AI 应用更可控。"
      ],
      "not": [
        "不是一句“不要犯错”的 prompt。",
        "不是绝对安全。",
        "不是只在模型层解决。"
      ],
      "mistakes": [
        "把安全全靠 system prompt。",
        "没有限制工具权限。",
        "没有记录和报警。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "规则、权限、风险动作、敏感数据。"
        },
        {
          "label": "处理",
          "value": "拦截、校验、降级、要求人工确认。"
        },
        {
          "label": "输出",
          "value": "允许、拒绝、修改或暂停。"
        },
        {
          "label": "风险",
          "value": "太宽不安全，太严影响可用性。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "system-prompt",
        "人在回路-human-in-the-loop",
        "prompt-injection",
        "兜底-fallback"
      ]
    },
    {
      "id": "人在回路-human-in-the-loop",
      "title": "人在回路（Human-in-the-loop）",
      "chinese": "人在回路",
      "english": "Human-in-the-loop",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "待补",
      "path": "50_评估层/人在回路 Human-in-the-loop.md",
      "audio": "audio/人在回路-human-in-the-loop.m4a",
      "oneLine": "人在回路是让人在关键节点参与判断、确认或接管。",
      "solves": [
        "控制高风险动作。",
        "在不确定任务中保留人的判断。",
        "防止 AI 自动化把错误放大。"
      ],
      "not": [
        "不是所有步骤都让人确认。",
        "不是 AI 无用。",
        "不是流程失败的补丁，而是设计的一部分。"
      ],
      "mistakes": [
        "该自动的地方频繁打扰用户。",
        "该确认的地方直接自动执行。",
        "人工确认点没有说明风险和选项。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "高风险动作、不确定结论、低置信度结果。"
        },
        {
          "label": "处理",
          "value": "暂停、展示证据、让人选择。"
        },
        {
          "label": "输出",
          "value": "确认、修改、拒绝或接管。"
        },
        {
          "label": "风险",
          "value": "确认太多导致用户疲劳。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "护栏-guardrails",
        "agent",
        "工具调用-tool-use",
        "prompt-injection"
      ]
    },
    {
      "id": "延迟-latency",
      "title": "延迟（Latency）",
      "chinese": "延迟",
      "english": "Latency",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "待补",
      "path": "50_评估层/延迟 Latency.md",
      "audio": "audio/延迟-latency.m4a",
      "oneLine": "延迟是用户发起请求到系统返回结果之间的时间。",
      "solves": [
        "它不是能力，而是衡量产品体验和可用性的关键指标。"
      ],
      "not": [
        "不只是模型速度。",
        "不只是网络问题。",
        "不一定越低越好，有些复杂任务可以接受等待。"
      ],
      "mistakes": [
        "只看模型响应时间，不看检索、工具调用和重试。",
        "为了降低延迟牺牲结果质量。",
        "没有区分同步体验和后台任务。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户请求。"
        },
        {
          "label": "处理",
          "value": "上下文构建、模型调用、工具调用、后处理。"
        },
        {
          "label": "输出",
          "value": "最终结果。"
        },
        {
          "label": "风险",
          "value": "等待太久、任务超时、用户中断。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "成本-cost",
        "推理模型-reasoning-model",
        "工具调用-tool-use",
        "agent循环"
      ]
    },
    {
      "id": "日志-log",
      "title": "日志（Log）",
      "chinese": "日志",
      "english": "Log",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "待补",
      "path": "50_评估层/日志 Log.md",
      "audio": "audio/日志-log.m4a",
      "oneLine": "日志是系统运行过程中留下的事件记录。",
      "solves": [
        "还原系统发生了什么。",
        "帮助排查失败原因。",
        "支撑评估、监控和审计。"
      ],
      "not": [
        "不是用户可读报告。",
        "不是所有内容都该记录。",
        "不是只在报错时才有用。"
      ],
      "mistakes": [
        "没记录输入、工具结果和错误信息。",
        "记录太多敏感信息。",
        "日志没有时间、任务 ID 和阶段标记。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "请求、响应、工具调用、错误、状态。"
        },
        {
          "label": "处理",
          "value": "按时间和任务写入。"
        },
        {
          "label": "输出",
          "value": "可检索记录。"
        },
        {
          "label": "风险",
          "value": "隐私泄露、噪音太多、缺关键字段。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "trace",
        "评估-eval",
        "失败模式-failure-mode",
        "prompt-injection"
      ]
    },
    {
      "id": "prompt-injection",
      "title": "提示词注入（Prompt Injection）",
      "chinese": "提示词注入",
      "english": "Prompt Injection",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "官方已核",
      "path": "50_评估层/Prompt Injection.md",
      "audio": "audio/prompt-injection.m4a",
      "oneLine": "Prompt Injection 是恶意或不可信输入诱导模型忽略规则、泄露信息或执行错误动作。",
      "solves": [
        "它不是能力，而是 AI 应用必须防范的安全风险。"
      ],
      "not": [
        "不只是用户直接说“忽略之前规则”。",
        "也可能藏在网页、文档、邮件、知识库资料里。",
        "不是只靠 system prompt 就能防住。"
      ],
      "mistakes": [
        "认为内部工具不需要防护。",
        "让模型同时读取不可信内容和高权限工具。",
        "不区分用户内容、系统规则和工具结果。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户输入、不可信网页、外部文档。"
        },
        {
          "label": "处理",
          "value": "模型可能被诱导改变行为。"
        },
        {
          "label": "输出",
          "value": "越权、泄露、错误调用工具。"
        },
        {
          "label": "风险",
          "value": "安全事故、数据泄露、误操作。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "system-prompt",
        "护栏-guardrails",
        "工具调用-tool-use",
        "人在回路-human-in-the-loop"
      ]
    },
    {
      "id": "trace",
      "title": "轨迹（Trace）",
      "chinese": "轨迹",
      "english": "Trace",
      "layer": "evaluation",
      "layerName": "评估层",
      "sourceLevel": "待补",
      "path": "50_评估层/Trace.md",
      "audio": "audio/trace.m4a",
      "oneLine": "Trace 是一次 AI 任务从输入到输出的完整路径记录。",
      "solves": [
        "看清模型做了哪些判断、调用了哪些工具、每步结果如何。",
        "定位 Agent 在哪一步跑偏。",
        "帮助复盘成本、耗时和失败原因。"
      ],
      "not": [
        "不只是错误日志。",
        "不等于模型真实内心。",
        "不一定适合完整暴露给用户。"
      ],
      "mistakes": [
        "只记录最终答案，不记录中间步骤。",
        "工具调用结果和模型判断没有关联起来。",
        "没有任务 ID，无法串起完整过程。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户请求、上下文、工具调用、模型输出。"
        },
        {
          "label": "处理",
          "value": "按步骤串联。"
        },
        {
          "label": "输出",
          "value": "可追踪任务链路。"
        },
        {
          "label": "风险",
          "value": "记录过细导致隐私和成本问题。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "日志-log",
        "agent循环",
        "评估-eval",
        "失败模式-failure-mode"
      ]
    }
  ]
};
