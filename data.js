window.AI_DICT_DATA = {
  "generatedAt": "2026-06-16T04:46:01.356Z",
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
      "count": 6
    },
    {
      "id": "context",
      "name": "上下文层",
      "english": "Context",
      "stage": "Stage 03",
      "short": "AI 怎么拿到足够信息",
      "color": "#8ef28b",
      "count": 9
    },
    {
      "id": "action",
      "name": "行动层",
      "english": "Action",
      "stage": "Stage 04",
      "short": "AI 怎么调用工具和推进任务",
      "color": "#ff6b6b",
      "count": 20
    },
    {
      "id": "evaluation",
      "name": "评估层",
      "english": "Evaluation",
      "stage": "Stage 05",
      "short": "怎么检查、纠错和兜底",
      "color": "#c6a5ff",
      "count": 15
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "10_模型层/上下文窗口.md",
      "audio": "audio/上下文窗口.m4a",
      "visualType": "window",
      "visual": "像一张有限桌面，能摆上的资料才会被模型看见。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "10_模型层/幻觉 Hallucination.md",
      "audio": "audio/幻觉-hallucination.m4a",
      "visualType": "risk",
      "visual": "像导航在没有地图时仍画出一条看似合理的路。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "10_模型层/大语言模型 LLM.md",
      "audio": "audio/大语言模型-llm.m4a",
      "visualType": "model",
      "visual": "像一座语言发动机，输入任务和材料，输出回答、代码或表格。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "10_模型层/推理模型 Reasoning Model.md",
      "audio": "audio/推理模型-reasoning-model.m4a",
      "visualType": "reasoning",
      "visual": "像慢一点的解题工作台，会先拆步骤再给答案。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "10_模型层/Token.md",
      "audio": "audio/token.m4a",
      "visualType": "token",
      "visual": "像把一句话切成小积木，模型按这些积木计算和生成。",
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
      "id": "agents-md",
      "title": "AGENTS.md",
      "chinese": "AGENTS.md",
      "english": "AGENTS.md",
      "layer": "instruction",
      "layerName": "指令层",
      "aliases": [
        "Agents Markdown",
        "项目指令文件",
        "Codex 项目规则"
      ],
      "sourceLevel": "官方已核",
      "path": "20_指令层/AGENTS.md.md",
      "audio": "audio/agents-md.m4a",
      "visualType": "rulebook",
      "visual": "像贴在项目门口的长期工作守则，Codex 进门先读。",
      "oneLine": "AGENTS.md 是 Codex 在项目里读取的长期协作说明，用来放项目规则、验证方式、编码约定和工作边界。",
      "solves": [
        "避免每次开新线程都重复讲项目规则。",
        "让 Codex 在动手前知道目录职责、测试命令和交付标准。",
        "支持全局规则和项目规则叠加，离当前目录越近的规则越具体。",
        "把团队约定变成可被代理稳定读取的文档。"
      ],
      "not": [
        "不是一次性 prompt。",
        "不是具体任务计划。",
        "不是 skill。",
        "不是越长越好；关键规则要清楚、靠前、可执行。"
      ],
      "mistakes": [
        "把临时想法写进 AGENTS.md，导致长期规则混乱。",
        "写很多价值观，却不写测试、目录、命名和交付要求。",
        "忽略嵌套目录里更近的 AGENTS.md 会覆盖或细化上层规则。",
        "规则改完不验证 Codex 是否真的读到了。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "全局、项目和子目录的 AGENTS.md。"
        },
        {
          "label": "处理",
          "value": "Codex 开始工作前按层级读取并合并指令。"
        },
        {
          "label": "输出",
          "value": "更符合项目习惯的行动计划和文件改动。"
        },
        {
          "label": "风险",
          "value": "规则过期、层级冲突、文件太长导致重点被淹没。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "system-prompt",
        "prompt",
        "技能-skills",
        "codex配置-config-toml"
      ]
    },
    {
      "id": "codex配置-config-toml",
      "title": "Codex 配置（Config.toml）",
      "chinese": "Codex 配置",
      "english": "Config.toml",
      "layer": "instruction",
      "layerName": "指令层",
      "aliases": [
        "config.toml",
        "Codex Configuration",
        "Codex配置"
      ],
      "sourceLevel": "官方已核",
      "path": "20_指令层/Codex配置 Config.toml.md",
      "audio": "audio/codex配置-config-toml.m4a",
      "visualType": "config",
      "visual": "像 Codex 的控制面板，模型、权限和连接都在这里设定。",
      "oneLine": "Config.toml 是 Codex 的配置文件，用来设置模型、权限、MCP、hooks、项目配置和其他运行默认值。",
      "solves": [
        "把 Codex 的运行偏好从聊天里移到可持久配置。",
        "支持用户级配置和项目级配置。",
        "管理 MCP servers、权限、沙盒、hooks、模型和功能开关。",
        "让不同项目或 profile 有不同默认行为。"
      ],
      "not": [
        "不是任务说明书。",
        "不是概念卡片。",
        "不是应该存放密钥正文的地方。",
        "不是所有项目都能无条件覆盖用户级安全配置。"
      ],
      "mistakes": [
        "把项目规则写进 config.toml，而不是 AGENTS.md。",
        "改了配置但没有重启或重新进入会话。",
        "在不可信项目里期待项目级 .codex/config.toml 生效。",
        "把权限、规则、hooks、MCP 的职责混在一起。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户级、profile 级、项目级配置。"
        },
        {
          "label": "处理",
          "value": "Codex 按优先级加载配置层。"
        },
        {
          "label": "输出",
          "value": "模型选择、权限边界、工具连接和生命周期行为。"
        },
        {
          "label": "风险",
          "value": "配置层级误判、权限过宽、私密信息误入仓库。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "agents-md",
        "mcp",
        "钩子-hooks",
        "权限-permissions"
      ]
    },
    {
      "id": "few-shot",
      "title": "示例提示（Few-shot）",
      "chinese": "示例提示",
      "english": "Few-shot",
      "layer": "instruction",
      "layerName": "指令层",
      "aliases": [],
      "sourceLevel": "待补",
      "path": "20_指令层/Few-shot.md",
      "audio": "audio/few-shot.m4a",
      "visualType": "examples",
      "visual": "像给两三个标准样张，让模型照着版式继续做。",
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
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "20_指令层/Prompt.md",
      "audio": "audio/prompt.m4a",
      "visualType": "prompt",
      "visual": "像写给助手的任务单，越清楚越容易执行。",
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
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "20_指令层/结构化输出 Structured Output.md",
      "audio": "audio/结构化输出-structured-output.m4a",
      "visualType": "output",
      "visual": "像给答案套上表格模具，每个字段都有固定位置。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "20_指令层/System Prompt.md",
      "audio": "audio/system-prompt.m4a",
      "visualType": "rulebook",
      "visual": "像场馆里的总规矩，所有任务都要先遵守它。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "30_上下文层/Chunking.md",
      "audio": "audio/chunking.m4a",
      "visualType": "chunks",
      "visual": "像把长书切成合适卡片，方便检索和放进上下文。",
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
      "id": "codex记忆-codex-memories",
      "title": "Codex 记忆（Codex Memories）",
      "chinese": "Codex 记忆",
      "english": "Codex Memories",
      "layer": "context",
      "layerName": "上下文层",
      "aliases": [
        "Memories",
        "Codex Memory",
        "本地记忆"
      ],
      "sourceLevel": "官方已核",
      "path": "30_上下文层/Codex记忆 Codex Memories.md",
      "audio": "audio/codex记忆-codex-memories.m4a",
      "visualType": "memory",
      "visual": "像 Codex 的项目经验卡，记录你过去反复强调过的习惯。",
      "oneLine": "Codex Memories 是 Codex 从以往线程中提取的稳定偏好、项目习惯和已知坑点，用来帮助未来任务少重复上下文。",
      "solves": [
        "让 Codex 记住稳定偏好和长期工作方式。",
        "减少每次重新解释项目习惯、常用路径和验收要求。",
        "在新线程里补充历史经验，但不替代当前明确指令。",
        "帮助跨项目复用高价值经验。"
      ],
      "not": [
        "不是必须永远生效的项目规则。",
        "不是官方事实来源。",
        "不是应该保存密钥或敏感信息的地方。",
        "不是替代 AGENTS.md、README 或当前用户要求。"
      ],
      "mistakes": [
        "把 memory 当成当前事实，不做现场验证。",
        "把必须执行的团队规则只放 memory，不写进项目文件。",
        "不区分用户偏好、历史经验和当前任务要求。",
        "分享 Codex home 目录前不检查记忆文件。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "过往线程摘要、稳定偏好、项目习惯、错误经验。"
        },
        {
          "label": "处理",
          "value": "Codex 在新会话中按需注入相关记忆。"
        },
        {
          "label": "输出",
          "value": "更贴合个人习惯的行动方式。"
        },
        {
          "label": "风险",
          "value": "记忆过期、来源不明、与当前要求冲突。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "记忆-memory",
        "上下文-context",
        "agents-md",
        "trace"
      ]
    },
    {
      "id": "上下文-context",
      "title": "上下文（Context）",
      "chinese": "上下文",
      "english": "Context",
      "layer": "context",
      "layerName": "上下文层",
      "aliases": [],
      "sourceLevel": "待补",
      "path": "30_上下文层/上下文 Context.md",
      "audio": "audio/上下文-context.m4a",
      "visualType": "context",
      "visual": "像模型眼前的材料包，当前能看见什么就会影响答案。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "30_上下文层/上下文工程 Context Engineering.md",
      "audio": "audio/上下文工程-context-engineering.m4a",
      "visualType": "context",
      "visual": "像布置工作台，决定哪些材料先放、哪些噪音拿走。",
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
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "30_上下文层/Embedding.md",
      "audio": "audio/embedding.m4a",
      "visualType": "vector",
      "visual": "像给文字做语义坐标，让相近意思靠得更近。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "30_上下文层/知识库.md",
      "audio": "audio/知识库.m4a",
      "visualType": "library",
      "visual": "像整理好的资料馆，供 AI 查阅和引用。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "30_上下文层/记忆 Memory.md",
      "audio": "audio/记忆-memory.m4a",
      "visualType": "memory",
      "visual": "像助手的小本子，记住长期偏好和稳定事实。",
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
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "30_上下文层/RAG.md",
      "audio": "audio/rag.m4a",
      "visualType": "retrieval",
      "visual": "像先去资料柜找证据，再带着证据回答问题。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "30_上下文层/向量数据库.md",
      "audio": "audio/向量数据库.m4a",
      "visualType": "vector-db",
      "visual": "像按语义位置摆放的仓库，可以找意思相近的片段。",
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
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "40_行动层/Agent.md",
      "audio": "audio/agent.m4a",
      "visualType": "agent",
      "visual": "像带目标的执行者，会观察、行动、检查并继续推进。",
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
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "40_行动层/Agent循环.md",
      "audio": "audio/agent循环.m4a",
      "visualType": "loop",
      "visual": "像不断转动的循环表盘：观察、计划、行动、检查。",
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
      "id": "技能-skills",
      "title": "技能（Skills）",
      "chinese": "技能",
      "english": "Agent Skills",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "Skill",
        "Agent Skill",
        "Codex Skills"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/技能 Skills.md",
      "audio": "audio/技能-skills.m4a",
      "visualType": "package",
      "visual": "像可复用的任务配方包，说明步骤，也能带脚本和素材。",
      "oneLine": "Skills 是给 Codex 复用的任务工作流包，通常包含一份 SKILL.md 指令，以及可选的参考资料、脚本和素材。",
      "solves": [
        "把高频任务从“每次重新解释”变成“可复用流程”。",
        "让 Codex 在特定任务中按稳定步骤行动。",
        "把参考资料、脚本、模板和质量标准放在同一个能力包里。",
        "通过渐进式加载减少上下文浪费。"
      ],
      "not": [
        "不是插件本身。",
        "不是模型能力。",
        "不是一次性提示词。",
        "不是越大越好；好的 skill 应该聚焦一个工作。"
      ],
      "mistakes": [
        "把任何提示词都叫 skill。",
        "只写一堆泛泛原则，不写触发边界、输入输出和验收方式。",
        "需要确定性处理时，不提供脚本或测试。",
        "skill 描述写得太模糊，导致 Codex 该用时不用、不该用时误用。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "任务描述、skill 描述、SKILL.md、可选脚本和参考文件。"
        },
        {
          "label": "处理",
          "value": "Codex 判断是否触发，读取完整指令，再按流程执行。"
        },
        {
          "label": "输出",
          "value": "更稳定的任务结果、报告、文件或自动化动作。"
        },
        {
          "label": "风险",
          "value": "触发词不准、流程过时、脚本没验证、上下文过重。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "插件-plugin",
        "工作流-workflow",
        "mcp",
        "agents-md"
      ]
    },
    {
      "id": "应用连接-app-connector",
      "title": "应用连接（App Connector）",
      "chinese": "应用连接",
      "english": "App Connector",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "App Integration",
        "Connector",
        "应用集成"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/应用连接 App Connector.md",
      "audio": "audio/应用连接-app-connector.m4a",
      "visualType": "connector",
      "visual": "像授权门禁，让 Codex 进入 GitHub、Gmail、Drive 等应用。",
      "oneLine": "应用连接是 Codex 通过授权接入外部应用的能力，让它能读取或操作 GitHub、Gmail、Google Drive 等私有工作数据。",
      "solves": [
        "让 Codex 不只看本地文件，还能进入授权的工作系统。",
        "把私有数据和动作接入任务流，比如读邮件、查 PR、改文档。",
        "和插件一起把“工作流 + 工具 + 登录态”组合起来。"
      ],
      "not": [
        "不是普通网页搜索。",
        "不是自动拥有你所有账号权限。",
        "不等于 MCP server。",
        "不等于本地文件访问。"
      ],
      "mistakes": [
        "以为能搜索互联网就等于能看自己的私有应用。",
        "忘记外部应用通常需要安装、登录和授权。",
        "把插件安装成功误认为连接应用也成功。",
        "不区分只读权限和可写动作。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户授权、应用账号、插件或连接配置。"
        },
        {
          "label": "处理",
          "value": "Codex 通过连接器读取数据或执行允许的动作。"
        },
        {
          "label": "输出",
          "value": "应用数据摘要、评论、文档修改、邮件草稿等。"
        },
        {
          "label": "风险",
          "value": "授权范围不清、私有数据泄露、误操作外部系统。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "插件-plugin",
        "mcp",
        "工具调用-tool-use",
        "权限-permissions"
      ]
    },
    {
      "id": "api",
      "title": "接口（API）",
      "chinese": "接口",
      "english": "Application Programming Interface",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [],
      "sourceLevel": "待补",
      "path": "40_行动层/API.md",
      "audio": "audio/api.m4a",
      "visualType": "api",
      "visual": "像两个系统之间的服务窗口，按约定递交请求和结果。",
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
      "aliases": [
        "Codex Automation",
        "Codex自动化",
        "Thread Automation",
        "Standalone Automation",
        "Project Automation"
      ],
      "sourceLevel": "待补",
      "path": "40_行动层/自动化 Automation.md",
      "audio": "audio/自动化-automation.m4a",
      "visualType": "automation",
      "visual": "像设好闹钟和路线的后台小工，按时重复完成稳定动作。",
      "oneLine": "自动化是让系统按条件或时间自动执行稳定流程；Codex 自动化是把这种后台运行能力交给 Codex 来做检查、跟进或产出。",
      "solves": [
        "提高效率。",
        "降低重复劳动。",
        "让稳定流程可以持续运行。",
        "让 Codex 在后台定时检查项目、资料、部署或同一线程的长任务。"
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
          "value": "按条件执行动作；在 Codex 里，还可能调用 skills、plugins、MCP 和本地工作树。"
        },
        {
          "label": "输出",
          "value": "完成的操作、通知、线程回复、文件改动或 PR。"
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
        "兜底-fallback",
        "权限-permissions"
      ]
    },
    {
      "id": "codex",
      "title": "Codex",
      "chinese": "Codex",
      "english": "Codex",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "OpenAI Codex",
        "编码代理"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/Codex.md",
      "audio": "audio/codex.m4a",
      "visualType": "agent",
      "visual": "像会进项目现场的开发代理，能读文件、改文件、检查结果。",
      "oneLine": "Codex 是 OpenAI 的软件开发代理，可以理解代码、修改文件、运行命令、检查结果，并把任务推进到可交付状态。",
      "solves": [
        "把“问 AI 怎么做”升级成“让 AI 实际做一部分工作”。",
        "让模型进入真实项目目录，读文件、改代码、跑检查。",
        "把聊天、工具调用、版本控制和验证串成一个工作循环。",
        "让人把精力放在目标、判断和验收上。"
      ],
      "not": [
        "不是普通聊天机器人。",
        "不是自动正确的开发者。",
        "不是可以无边界访问你电脑的一切能力。",
        "不是替代 Git、测试和人工判断的魔法层。"
      ],
      "mistakes": [
        "只把 Codex 当成“更会写代码的 ChatGPT”。",
        "不给项目规则、验收标准和边界，却期待它稳定交付。",
        "没检查工作目录、权限、分支和部署目标就让它改动。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户目标、项目文件、指令、上下文和权限边界。"
        },
        {
          "label": "处理",
          "value": "读代码、制定步骤、调用工具、编辑文件、运行检查。"
        },
        {
          "label": "输出",
          "value": "代码改动、解释、验证结果、部署或 PR。"
        },
        {
          "label": "风险",
          "value": "目标不清、权限过大、验证不足、误改用户文件。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "agent",
        "工具调用-tool-use",
        "工作流-workflow",
        "评估-eval"
      ]
    },
    {
      "id": "codex使用入口-surfaces",
      "title": "Codex 使用入口（Codex Surfaces）",
      "chinese": "Codex 使用入口",
      "english": "Codex Surfaces",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "Codex App",
        "Codex CLI",
        "Codex IDE",
        "Codex Web",
        "Codex Cloud"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/Codex使用入口 Surfaces.md",
      "audio": "audio/codex使用入口-surfaces.m4a",
      "visualType": "surfaces",
      "visual": "像同一个代理的不同入口：桌面、终端、网页或云端。",
      "oneLine": "Codex 使用入口是你和 Codex 协作的不同界面，包括桌面 App、CLI、IDE 扩展、Web、Cloud 和 SDK 等。",
      "solves": [
        "让同一个 Codex 能适配不同工作场景。",
        "桌面 App 适合多线程、审查、规划和本地交互。",
        "CLI 适合终端里的项目工作和脚本化执行。",
        "IDE 扩展适合贴着编辑器改代码。"
      ],
      "not": [
        "不是不同的 AI 概念体系。",
        "不是所有入口都有完全相同的工具和权限。",
        "不是换入口就能绕过项目规则或安全边界。"
      ],
      "mistakes": [
        "以为 App、CLI、IDE、Web 的能力和状态完全一样。",
        "忽略某些入口依赖本地文件，某些入口依赖云端环境。",
        "把浏览器、Chrome 扩展、Computer Use 和普通网页搜索混在一起。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "同一个目标，但来自不同入口。"
        },
        {
          "label": "处理",
          "value": "入口决定可用工具、文件位置、登录态和交互方式。"
        },
        {
          "label": "输出",
          "value": "本地改动、远端任务、PR、报告或自动化结果。"
        },
        {
          "label": "风险",
          "value": "入口选错，导致文件不在同一个环境，或者验证不在真实目标上发生。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "codex",
        "工作树-worktree",
        "自动化-automation",
        "mcp"
      ]
    },
    {
      "id": "function-calling",
      "title": "函数调用（Function Calling）",
      "chinese": "函数调用",
      "english": "Function Calling",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "40_行动层/Function Calling.md",
      "audio": "audio/function-calling.m4a",
      "visualType": "function",
      "visual": "像模型填写一张工具申请单，由代码去真正执行。",
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
      "id": "交接-handoff",
      "title": "交接（Handoff）",
      "chinese": "交接",
      "english": "Handoff",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "Codex Handoff",
        "线程交接"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/交接 Handoff.md",
      "audio": "audio/交接-handoff.m4a",
      "visualType": "handoff",
      "visual": "像把任务接力棒从后台工作间交回你的本地现场。",
      "oneLine": "交接是 Codex 把一个线程和它的代码改动在本地检出与工作树之间移动的流程。",
      "solves": [
        "让后台工作可以回到你的本地主工作现场。",
        "让本地进行中的线程可以转到工作树里继续后台推进。",
        "避免人手动搬文件、切分支、处理 Git 限制时出错。"
      ],
      "not": [
        "不是复制粘贴文件。",
        "不是部署。",
        "不是自动合并所有冲突。",
        "不是把未被 Git 跟踪的所有东西都保证带走。"
      ],
      "mistakes": [
        "以为 Handoff 只是换个聊天窗口。",
        "忽略 Git 分支同一时间只能在一个工作树里检出。",
        "没看清楚交接后线程实际绑定到哪个目录。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "一个线程、一个源环境、一个目标环境。"
        },
        {
          "label": "处理",
          "value": "Codex 处理必要的 Git 移动和目录绑定。"
        },
        {
          "label": "输出",
          "value": "同一线程继续在另一个文件现场工作。"
        },
        {
          "label": "风险",
          "value": "未跟踪文件、依赖环境和分支状态没有被正确理解。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "工作树-worktree",
        "本地检出-local-checkout",
        "codex使用入口-surfaces",
        "trace"
      ]
    },
    {
      "id": "本地检出-local-checkout",
      "title": "本地检出（Local Checkout）",
      "chinese": "本地检出",
      "english": "Local Checkout",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "Local",
        "本地工作目录",
        "本地仓库现场"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/本地检出 Local Checkout.md",
      "audio": "audio/本地检出-local-checkout.m4a",
      "visualType": "workspace-home",
      "visual": "像你桌面上的主工作现场，平时直接打开和编辑的那份项目。",
      "oneLine": "本地检出是你原本打开的 Git 项目目录，也就是你平时在编辑器、终端和文件系统里直接操作的主工作现场。",
      "solves": [
        "给 Codex 一个明确的“当前项目现场”。",
        "区分你正在看的本地目录和 Codex 后台创建的工作树。",
        "帮助判断文件改动、测试和部署到底发生在哪里。"
      ],
      "not": [
        "不是所有 Codex 任务天然共享的唯一环境。",
        "不是工作树。",
        "不是云端任务环境。",
        "不是只要对话在同一线程就一定在同一文件现场。"
      ],
      "mistakes": [
        "只看 Codex 对话，不确认当前目录。",
        "在工作树里生成了改动，却以为本地目录已经同步。",
        "把浏览器看到的页面、部署仓库和本地检出混成一个对象。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "用户选择的项目目录。"
        },
        {
          "label": "处理",
          "value": "Codex 在这个目录里读文件、编辑、运行命令或交接工作。"
        },
        {
          "label": "输出",
          "value": "本地文件改动、测试结果、Git 状态。"
        },
        {
          "label": "风险",
          "value": "没有确认目录，导致改了另一个项目或另一个工作树。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "工作树-worktree",
        "交接-handoff",
        "codex",
        "trace"
      ]
    },
    {
      "id": "mcp",
      "title": "模型上下文协议（MCP）",
      "chinese": "模型上下文协议",
      "english": "Model Context Protocol",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "MCP Server",
        "MCP服务器",
        "MCP服务",
        "Model Context Protocol Server"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/MCP.md",
      "audio": "audio/mcp.m4a",
      "visualType": "mcp",
      "visual": "像通用插座和插头标准，让外部工具接进 AI 助手。",
      "oneLine": "MCP 可以理解为一种把外部工具、数据和上下文接给 AI 助手的标准化连接方式；MCP Server 是按这套协议把具体工具暴露出来的服务。",
      "solves": [
        "让不同工具用相对统一的方式暴露给模型。",
        "降低每个 AI 应用单独适配工具的成本。",
        "让 Agent 更容易访问文件、数据库、浏览器、业务系统等能力。",
        "区分“协议标准”和“具体连接服务”，避免把 MCP Server 当成另一套概念。"
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
          "value": "MCP Server 按协议把外部能力暴露给 AI 客户端。"
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "40_行动层/多Agent Multi-Agent.md",
      "audio": "audio/多agent-multi-agent.m4a",
      "visualType": "multi",
      "visual": "像一个小队分工合作，主代理负责收束结果。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "40_行动层/计划 Plan.md",
      "audio": "audio/计划-plan.m4a",
      "visualType": "plan",
      "visual": "像行动前画路线图，先拆步骤、风险和检查点。",
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
      "id": "插件-plugin",
      "title": "插件（Plugin）",
      "chinese": "插件",
      "english": "Plugin",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "Codex Plugin",
        "Plugins"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/插件 Plugin.md",
      "audio": "audio/插件-plugin.m4a",
      "visualType": "package",
      "visual": "像能力套装，把技能、连接器和 MCP 服务打包安装。",
      "oneLine": "Plugin 是 Codex 的可安装能力包，可以把 skills、应用连接、MCP 服务器和相关配置打包成可分发的工作流。",
      "solves": [
        "把一个或多个可复用能力打包给别人安装。",
        "让 skill 和外部工具连接、MCP、应用授权一起分发。",
        "支持团队、个人或工作区共享稳定能力。",
        "把“本地写好的流程”升级成“可安装的产品化能力”。"
      ],
      "not": [
        "不等于一个 skill。",
        "不等于浏览器扩展。",
        "不一定自带外部应用权限。",
        "不会绕过 Codex 的审批、沙盒和权限边界。"
      ],
      "mistakes": [
        "把 plugin 和 skill 混用。",
        "还在个人本地试错阶段就急着打包成 plugin。",
        "忽略插件里的应用和 MCP 可能需要额外登录或授权。",
        "没有区分“已安装”和“已启用”。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "插件清单、skills、apps、MCP 配置、权限和安装状态。"
        },
        {
          "label": "处理",
          "value": "Codex 安装后在任务中加载对应能力。"
        },
        {
          "label": "输出",
          "value": "可复用的跨工具工作流。"
        },
        {
          "label": "风险",
          "value": "来源不可信、授权不清、能力边界不明确。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "技能-skills",
        "应用连接-app-connector",
        "mcp",
        "权限-permissions"
      ]
    },
    {
      "id": "反思-reflection",
      "title": "反思（Reflection）",
      "chinese": "反思",
      "english": "Reflection",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [],
      "sourceLevel": "待补",
      "path": "40_行动层/反思 Reflection.md",
      "audio": "audio/反思-reflection.m4a",
      "visualType": "reflection",
      "visual": "像做完后回看镜子，判断哪里要修正或重试。",
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
      "id": "子代理-subagent",
      "title": "子代理（Subagent）",
      "chinese": "子代理",
      "english": "Subagent",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "Subagents",
        "Parallel Agents",
        "子智能体"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/子代理 Subagent.md",
      "audio": "audio/子代理-subagent.m4a",
      "visualType": "subagent",
      "visual": "像临时叫来的专门同事，分头查一块再把结果交回主线程。",
      "oneLine": "Subagent 是 Codex 为某个子任务临时启动的专门代理，用来并行探索、测试、审查或总结，然后把结果汇总给主线程。",
      "solves": [
        "把大型任务拆成可以并行处理的部分。",
        "避免主线程被大量日志、搜索结果和中间过程污染。",
        "让不同代理分别关注安全、测试、可维护性等不同角度。",
        "加速读多、查多、对比多的任务。"
      ],
      "not": [
        "不是普通角色扮演。",
        "不是 Codex 每次都会自动启动的能力。",
        "不是越多越好；子代理会消耗更多 token 和协调成本。",
        "不适合没有边界的并行写入任务。"
      ],
      "mistakes": [
        "把“多个观点发言”误认为 subagent workflow。",
        "没说明每个子代理负责什么、何时汇总、输出什么。",
        "让多个代理同时改同一批文件，制造冲突。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "主任务、拆分规则、子代理角色和输出要求。"
        },
        {
          "label": "处理",
          "value": "Codex 启动并行代理，各自读文件、分析或验证。"
        },
        {
          "label": "输出",
          "value": "多个子结论和主线程汇总。"
        },
        {
          "label": "风险",
          "value": "成本上升、结论冲突、重复探索、写入冲突。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "多agent-multi-agent",
        "agent",
        "trace",
        "成本-cost"
      ]
    },
    {
      "id": "工具调用-tool-use",
      "title": "工具调用（Tool Use）",
      "chinese": "工具调用",
      "english": "Tool Use",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "40_行动层/工具调用 Tool Use.md",
      "audio": "audio/工具调用-tool-use.m4a",
      "visualType": "tool",
      "visual": "像给 AI 配上工具箱，让它查、算、写、浏览和执行。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "40_行动层/工作流 Workflow.md",
      "audio": "audio/工作流-workflow.m4a",
      "visualType": "workflow",
      "visual": "像一条标准流水线，把一类任务拆成固定步骤。",
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
      "id": "工作树-worktree",
      "title": "工作树（Worktree）",
      "chinese": "工作树",
      "english": "Worktree",
      "layer": "action",
      "layerName": "行动层",
      "aliases": [
        "Git Worktree",
        "Codex Worktree",
        "Codex-managed Worktree"
      ],
      "sourceLevel": "官方已核",
      "path": "40_行动层/工作树 Worktree.md",
      "audio": "audio/工作树-worktree.m4a",
      "visualType": "workspace",
      "visual": "像同一个项目旁边开出的独立工作间，互不打扰并行修改。",
      "oneLine": "工作树是同一个 Git 仓库的另一份可工作的文件现场，让 Codex 可以在后台并行做任务，而不打扰你当前本地目录。",
      "solves": [
        "让多个任务能在同一个项目中并行推进。",
        "把 Codex 的后台改动和你当前本地改动隔离开。",
        "让自动化、实验方案和临时探索不污染主工作现场。",
        "让线程可以从后台工作树交接回本地目录。"
      ],
      "not": [
        "不是普通文件夹复制。",
        "不是独立的新仓库。",
        "不是和原仓库完全无关的沙盒。",
        "不是不需要 Git 的功能；Codex 工作树依赖 Git 仓库。"
      ],
      "mistakes": [
        "以为 Codex 分叉对话就会隔离真实文件。",
        "以为同一个分支可以同时在多个工作树里被检出。",
        "忘记未纳入 Git 的文件不一定能随工作树一起移动。",
        "在工作树里跑不起来项目，却没意识到依赖或本地环境没同步。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "一个 Git 仓库、起始分支、线程任务。"
        },
        {
          "label": "处理",
          "value": "Codex 基于仓库创建独立文件现场并执行任务。"
        },
        {
          "label": "输出",
          "value": "后台改动、分支、PR 或可交接回本地的工作。"
        },
        {
          "label": "风险",
          "value": "分支归属混乱、依赖缺失、未跟踪文件没被带过去。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "本地检出-local-checkout",
        "交接-handoff",
        "codex使用入口-surfaces",
        "自动化-automation"
      ]
    },
    {
      "id": "审批-approval",
      "title": "审批（Approval）",
      "chinese": "审批",
      "english": "Approval",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [
        "Approval Policy",
        "Ask for Approval",
        "人工审批"
      ],
      "sourceLevel": "官方已核",
      "path": "50_评估层/审批 Approval.md",
      "audio": "audio/审批-approval.m4a",
      "visualType": "approval",
      "visual": "像高风险按钮前的确认锁，按下前先问人。",
      "oneLine": "审批是 Codex 在执行某些敏感动作前停下来请求用户确认的机制。",
      "solves": [
        "让越界文件修改、联网、安装依赖、危险命令等动作有人工确认。",
        "在效率和安全之间建立可调节的协作方式。",
        "让用户知道 Codex 准备做什么、为什么需要更高权限。",
        "给高风险动作留下决策点。"
      ],
      "not": [
        "不是所有任务都必须打断用户。",
        "不是测试通过。",
        "不是权限本身，而是权限动作前的确认流程。",
        "不是让用户替 Codex 思考每一步。"
      ],
      "mistakes": [
        "把审批弹窗当成错误。",
        "没看清 Codex 申请的动作和理由就同意。",
        "对高风险任务设置 never，却没有其他保护。",
        "低风险重复任务要求每步审批，导致流程无法推进。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "审批策略、沙盒状态、工具调用意图。"
        },
        {
          "label": "处理",
          "value": "Codex 判断是否可以直接执行，或需要请求确认。"
        },
        {
          "label": "输出",
          "value": "执行、拒绝、等待用户确认或寻找替代方案。"
        },
        {
          "label": "风险",
          "value": "误批危险动作、审批过多、审批说明不清。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "沙盒-sandbox",
        "权限-permissions",
        "人在回路-human-in-the-loop",
        "护栏-guardrails"
      ]
    },
    {
      "id": "成本-cost",
      "title": "成本（Cost）",
      "chinese": "成本",
      "english": "Cost",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [],
      "sourceLevel": "待补",
      "path": "50_评估层/成本 Cost.md",
      "audio": "audio/成本-cost.m4a",
      "visualType": "cost",
      "visual": "像仪表盘上的消耗表，记录模型、工具、存储和人工成本。",
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
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "50_评估层/评估 Eval.md",
      "audio": "audio/评估-eval.m4a",
      "visualType": "eval",
      "visual": "像固定考卷，反复测同一批题来判断系统是否稳定。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "50_评估层/失败模式 Failure Mode.md",
      "audio": "audio/失败模式-failure-mode.m4a",
      "visualType": "failure",
      "visual": "像故障标本册，把反复出现的问题归成几类。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "50_评估层/兜底 Fallback.md",
      "audio": "audio/兜底-fallback.m4a",
      "visualType": "fallback",
      "visual": "像主路封闭时的备用路线，让任务失败后还能收束。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "50_评估层/护栏 Guardrails.md",
      "audio": "audio/护栏-guardrails.m4a",
      "visualType": "guardrails",
      "visual": "像道路护栏和检查站，防止 AI 越界或误操作。",
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
      "id": "钩子-hooks",
      "title": "钩子（Hooks）",
      "chinese": "钩子",
      "english": "Hooks",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [
        "Codex Hooks",
        "Lifecycle Hooks",
        "生命周期钩子"
      ],
      "sourceLevel": "官方已核",
      "path": "50_评估层/钩子 Hooks.md",
      "audio": "audio/钩子-hooks.m4a",
      "visualType": "hooks",
      "visual": "像流水线上的自动检查点，在关键节点触发脚本。",
      "oneLine": "Hooks 是 Codex 的生命周期扩展点，可以在工具调用前后、用户提交、压缩、停止等节点运行脚本或检查。",
      "solves": [
        "在关键动作前后插入团队自定义检查。",
        "记录对话、扫描敏感信息、执行质量门或生成记忆。",
        "把“每次都要检查”的流程自动化。",
        "让组织或个人把安全与质量要求嵌入代理循环。"
      ],
      "not": [
        "不是普通 prompt。",
        "不是 skill。",
        "不是业务逻辑本身。",
        "不是不需要信任审查的任意脚本。"
      ],
      "mistakes": [
        "把 hooks 当作替代测试。",
        "不审查 hooks 就运行不可信脚本。",
        "在项目子目录用相对路径，导致不同启动目录下失效。",
        "忽略多个匹配 hooks 可能并发运行。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "hook 事件、匹配规则、命令脚本、超时设置。"
        },
        {
          "label": "处理",
          "value": "Codex 在对应生命周期节点触发 hook。"
        },
        {
          "label": "输出",
          "value": "日志、阻断、提醒、额外检查或自动整理。"
        },
        {
          "label": "风险",
          "value": "脚本不可信、误阻断、运行太慢、路径不稳定。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "规则-rules",
        "codex配置-config-toml",
        "护栏-guardrails",
        "评估-eval"
      ]
    },
    {
      "id": "人在回路-human-in-the-loop",
      "title": "人在回路（Human-in-the-loop）",
      "chinese": "人在回路",
      "english": "Human-in-the-loop",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [],
      "sourceLevel": "待补",
      "path": "50_评估层/人在回路 Human-in-the-loop.md",
      "audio": "audio/人在回路-human-in-the-loop.m4a",
      "visualType": "human",
      "visual": "像关键路口的人工闸门，重要决定交给人确认。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "50_评估层/延迟 Latency.md",
      "audio": "audio/延迟-latency.m4a",
      "visualType": "latency",
      "visual": "像沙漏，从用户发出请求到系统返回结果的等待时间。",
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
      "aliases": [],
      "sourceLevel": "待补",
      "path": "50_评估层/日志 Log.md",
      "audio": "audio/日志-log.m4a",
      "visualType": "log",
      "visual": "像按时间盖章的流水账，记录系统发生过什么。",
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
      "id": "权限-permissions",
      "title": "权限（Permissions）",
      "chinese": "权限",
      "english": "Permissions",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [
        "Permission Profiles",
        "权限配置",
        "文件系统权限",
        "网络权限"
      ],
      "sourceLevel": "官方已核",
      "path": "50_评估层/权限 Permissions.md",
      "audio": "audio/权限-permissions.m4a",
      "visualType": "permissions",
      "visual": "像门禁卡，规定 Codex 能进哪些房间、碰哪些文件。",
      "oneLine": "权限是 Codex 能读写哪些文件、能不能访问网络、哪些命令需要限制的边界配置。",
      "solves": [
        "控制 Codex 对本机文件系统和网络的访问范围。",
        "用最小必要权限降低误改、泄露和越权风险。",
        "让不同项目可以有不同安全姿态。",
        "给自动化和后台任务设置更可控的边界。"
      ],
      "not": [
        "不是信任感。",
        "不是任务质量保证。",
        "不是护栏的全部。",
        "不是越宽越方便就越好。"
      ],
      "mistakes": [
        "为了省事长期使用最大权限。",
        "没区分 read、write、deny。",
        "忽略网络权限和本地私有服务访问。",
        "自动化任务沿用过宽权限。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "文件系统规则、网络规则、项目根目录和权限 profile。"
        },
        {
          "label": "处理",
          "value": "Codex 的工具调用受到这些规则约束。"
        },
        {
          "label": "输出",
          "value": "允许、拒绝或需要审批的动作。"
        },
        {
          "label": "风险",
          "value": "规则过宽、deny 漏配、项目根目录判断错误。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "沙盒-sandbox",
        "审批-approval",
        "护栏-guardrails",
        "codex配置-config-toml"
      ]
    },
    {
      "id": "prompt-injection",
      "title": "提示词注入（Prompt Injection）",
      "chinese": "提示词注入",
      "english": "Prompt Injection",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [],
      "sourceLevel": "官方已核",
      "path": "50_评估层/Prompt Injection.md",
      "audio": "audio/prompt-injection.m4a",
      "visualType": "injection",
      "visual": "像藏在资料里的假指令，试图让助手偏离原规则。",
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
      "id": "规则-rules",
      "title": "规则（Rules）",
      "chinese": "规则",
      "english": "Rules",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [
        "Codex Rules",
        "Command Rules",
        "命令规则"
      ],
      "sourceLevel": "官方已核",
      "path": "50_评估层/规则 Rules.md",
      "audio": "audio/规则-rules.m4a",
      "visualType": "rules",
      "visual": "像命令红绿灯，决定某类命令放行、询问或禁止。",
      "oneLine": "Rules 是 Codex 用来允许、询问或禁止某类命令的规则系统，帮助控制工具调用边界。",
      "solves": [
        "把常见命令的处理方式从临时判断变成稳定规则。",
        "对安全敏感命令设置强制询问或禁止。",
        "对可信低风险命令减少重复打断。",
        "和沙盒、审批一起形成更细的执行边界。"
      ],
      "not": [
        "不是 AGENTS.md。",
        "不是代码质量规则。",
        "不是 hook 脚本。",
        "不是模型自己理解的抽象偏好，而是面向命令执行的控制规则。"
      ],
      "mistakes": [
        "把 rules 写成宽泛建议，而不是可匹配的命令前缀。",
        "以为 allow 就代表命令一定安全。",
        "忽略更严格规则优先。",
        "没给 forbidden 规则写清替代方案。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "命令 pattern、decision、justification。"
        },
        {
          "label": "处理",
          "value": "Codex 在命令执行前匹配规则。"
        },
        {
          "label": "输出",
          "value": "允许、询问或禁止。"
        },
        {
          "label": "风险",
          "value": "规则过窄漏掉危险命令，规则过宽阻断正常工作。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "钩子-hooks",
        "审批-approval",
        "沙盒-sandbox",
        "权限-permissions"
      ]
    },
    {
      "id": "沙盒-sandbox",
      "title": "沙盒（Sandbox）",
      "chinese": "沙盒",
      "english": "Sandbox",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [
        "Sandboxing",
        "Sandbox Mode",
        "沙盒模式"
      ],
      "sourceLevel": "官方已核",
      "path": "50_评估层/沙盒 Sandbox.md",
      "audio": "audio/沙盒-sandbox.m4a",
      "visualType": "sandbox",
      "visual": "像透明实验箱，把操作限制在安全范围内。",
      "oneLine": "沙盒是 Codex 运行命令和访问文件时的隔离边界，用来限制它能触碰的范围。",
      "solves": [
        "防止命令随意影响整个电脑。",
        "限制文件写入、网络访问和危险操作。",
        "让不同信任等级的项目使用不同执行模式。",
        "在自动化和工具调用中降低失控风险。"
      ],
      "not": [
        "不是代码正确性保证。",
        "不是网络安全的全部。",
        "不是可以替代人工验收的机制。",
        "不是越严格越适合所有任务；太严格会阻塞必要动作。"
      ],
      "mistakes": [
        "不知道当前处于只读、工作区写入还是 full access。",
        "把沙盒限制误判为代码错误。",
        "为了部署或联网一律开最大权限。",
        "没给自动化设置合适的默认沙盒。"
      ],
      "product": [
        {
          "label": "输入",
          "value": "sandbox mode、权限 profile、工作区根目录。"
        },
        {
          "label": "处理",
          "value": "Codex 工具调用被限制在允许范围内。"
        },
        {
          "label": "输出",
          "value": "动作成功、被拒绝、或转为审批请求。"
        },
        {
          "label": "风险",
          "value": "边界误配、权限过宽、必要文件不在工作区。"
        }
      ],
      "reviewQuestion": "",
      "related": [
        "权限-permissions",
        "审批-approval",
        "护栏-guardrails",
        "工具调用-tool-use"
      ]
    },
    {
      "id": "trace",
      "title": "轨迹（Trace）",
      "chinese": "轨迹",
      "english": "Trace",
      "layer": "evaluation",
      "layerName": "评估层",
      "aliases": [],
      "sourceLevel": "待补",
      "path": "50_评估层/Trace.md",
      "audio": "audio/trace.m4a",
      "visualType": "trace",
      "visual": "像一条带脚印的路线图，串起一次任务的每一步。",
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
